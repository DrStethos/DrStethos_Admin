import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle,
  XCircle,
  FileText,
  Award,
} from "lucide-react";

interface Certificate {
  id: string;
  fileName: string;
  fileUrl: string;
  createdAt: any;
  updatedAt: any;
}

interface DoctorProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  phoneNumber?: string;
  profilePhotoUrl?: string;
  age?: number;
  gender?: string;
  mcaNumber?: string;
  specialization: string;
  yearsOfExperience: number;
  qualifications?: string;
  bio?: string;
  location?: string;
  createdAt: any;
  updatedAt: any;
  isVerified: boolean;
  isActive: boolean;
}

interface UserData {
  verifiedAt?: any;
  verifiedByAdminUid?: string;
  verifiedByAdminEmail?: string;
  rejectedAt?: any;
  rejectedByAdminUid?: string;
  rejectedByAdminEmail?: string;
  rejectionReason?: string;
}

const DoctorProfile = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<DoctorProfile | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  useEffect(() => {
    if (profileId) {
      fetchDoctorProfile();
      fetchCertificates();
    }
  }, [profileId]);

  const fetchDoctorProfile = async () => {
    try {
      if (!profileId) return;

      const doctorRef = doc(db, "doctors", profileId);
      const doctorDoc = await getDoc(doctorRef);

      if (doctorDoc.exists()) {
        const doctorData = { id: doctorDoc.id, ...doctorDoc.data() } as DoctorProfile;
        setDoctor(doctorData);

        // Fetch user data to get admin verification/rejection details
        const userRef = doc(db, "users", doctorData.userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
        }
      } else {
        toast.error("Doctor profile not found");
        navigate("/admin/verify");
      }
    } catch (error) {
      console.error("Error fetching doctor profile:", error);
      toast.error("Failed to load doctor profile");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCertificates = async () => {
    try {
      if (!profileId) return;

      const certificatesRef = collection(db, "doctors", profileId, "certificates");
      const certificatesSnapshot = await getDocs(certificatesRef);

      const certs: Certificate[] = [];
      certificatesSnapshot.forEach((doc) => {
        certs.push({ id: doc.id, ...doc.data() } as Certificate);
      });

      setCertificates(certs);
    } catch (error) {
      console.error("Error fetching certificates:", error);
      toast.error("Failed to load certificates");
    }
  };

  const handleApprove = async () => {
    if (!doctor || !profileId) return;

    setIsProcessing(true);
    try {
      const currentAdmin = auth.currentUser;
      if (!currentAdmin) {
        toast.error("Admin authentication required");
        setIsProcessing(false);
        return;
      }

      const verifiedAt = new Date();

      // Update doctor document (without admin info)
      const doctorRef = doc(db, "doctors", profileId);
      await updateDoc(doctorRef, {
        isVerified: true,
        verifiedAt: verifiedAt,
        updatedAt: new Date(),
      });

      // Update user document with admin information
      const userRef = doc(db, "users", doctor.userId);
      await updateDoc(userRef, {
        isVerified: true,
        verifiedAt: verifiedAt,
        verifiedByAdminUid: currentAdmin.uid,
        verifiedByAdminEmail: currentAdmin.email || "N/A",
        rejectedAt: null,
        rejectionReason: null,
        rejectedByAdminUid: null,
        rejectedByAdminEmail: null,
      });

      // Update local state
      setDoctor({
        ...doctor,
        isVerified: true,
      });

      setUserData({
        ...userData,
        verifiedAt: verifiedAt,
        verifiedByAdminUid: currentAdmin.uid,
        verifiedByAdminEmail: currentAdmin.email || "N/A",
        rejectedAt: null,
        rejectionReason: null,
        rejectedByAdminUid: null,
        rejectedByAdminEmail: null,
      });

      toast.success("Doctor verified successfully");
    } catch (error) {
      console.error("Error approving doctor:", error);
      toast.error("Failed to verify doctor");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = () => {
    setShowRejectDialog(true);
  };

  const confirmReject = async () => {
    if (!doctor || !profileId) return;
    if (!rejectionReason.trim()) {
      toast.error("Please provide a reason for rejection");
      return;
    }

    setIsProcessing(true);
    try {
      const currentAdmin = auth.currentUser;
      if (!currentAdmin) {
        toast.error("Admin authentication required");
        setIsProcessing(false);
        return;
      }

      const rejectedAt = new Date();

      // Update doctor document
      const doctorRef = doc(db, "doctors", profileId);
      await updateDoc(doctorRef, {
        isVerified: false,
        updatedAt: rejectedAt,
      });

      // Update user document with rejection reason and admin info
      const userRef = doc(db, "users", doctor.userId);
      await updateDoc(userRef, {
        isVerified: false,
        rejectionReason: rejectionReason.trim(),
        rejectedAt: rejectedAt,
        rejectedByAdminUid: currentAdmin.uid,
        rejectedByAdminEmail: currentAdmin.email || "N/A",
      });

      // Update local state
      setDoctor({
        ...doctor,
        isVerified: false,
      });

      setUserData({
        ...userData,
        rejectedAt: rejectedAt,
        rejectionReason: rejectionReason.trim(),
        rejectedByAdminUid: currentAdmin.uid,
        rejectedByAdminEmail: currentAdmin.email || "N/A",
      });

      setShowRejectDialog(false);
      setRejectionReason("");
      toast.error("Doctor verification rejected");
    } catch (error) {
      console.error("Error rejecting doctor:", error);
      toast.error("Failed to reject verification");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 rounded w-1/4"></div>
          <div className="h-64 bg-slate-200 rounded"></div>
          <div className="h-64 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="p-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-slate-500">Doctor profile not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Button variant="ghost" onClick={() => navigate("/admin/verify")} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Verifications
        </Button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{doctor.name}</h1>
            <p className="text-slate-500 mt-2">Doctor Profile Verification</p>
          </div>
          <Badge
            variant={doctor.isVerified ? "default" : "secondary"}
            className={
              doctor.isVerified
                ? "bg-green-100 text-green-800"
                : "bg-orange-100 text-orange-800"
            }
          >
            {doctor.isVerified ? "Verified" : "Pending Verification"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Photo */}
          {doctor.profilePhotoUrl && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Photo</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={doctor.profilePhotoUrl}
                  alt={doctor.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          )}

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {doctor.age && (
                  <div>
                    <p className="text-sm text-slate-500">Age</p>
                    <p className="font-medium">{doctor.age} years</p>
                  </div>
                )}
                {doctor.gender && (
                  <div>
                    <p className="text-sm text-slate-500">Gender</p>
                    <p className="font-medium capitalize">{doctor.gender}</p>
                  </div>
                )}
                {doctor.mcaNumber && (
                  <div>
                    <p className="text-sm text-slate-500">MCA Number</p>
                    <p className="font-medium">{doctor.mcaNumber}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-slate-500">Active Status</p>
                  <Badge variant={doctor.isActive ? "default" : "secondary"}>
                    {doctor.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Specialization</p>
                  <p className="font-medium">{doctor.specialization}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Experience</p>
                  <p className="font-medium">{doctor.yearsOfExperience} years</p>
                </div>
              </div>
              {doctor.qualifications && (
                <div>
                  <p className="text-sm text-slate-500">Qualifications</p>
                  <p className="font-medium">{doctor.qualifications}</p>
                </div>
              )}
              {doctor.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium">{doctor.location}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">{doctor.email}</p>
                </div>
              </div>
              {doctor.phoneNumber && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-500">Phone Number</p>
                    <p className="font-medium">{doctor.phoneNumber}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Bio */}
          {doctor.bio && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  About Doctor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 whitespace-pre-wrap">{doctor.bio}</p>
              </CardContent>
            </Card>
          )}

          {/* Certificates */}
          {certificates.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certificates ({certificates.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-slate-500" />
                        <div>
                          <p className="font-medium">{cert.fileName}</p>
                          <p className="text-xs text-slate-500">
                            Uploaded: {cert.createdAt?.toDate().toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Verification Actions</CardTitle>
              <CardDescription>Review and approve or reject this application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleApprove}
                disabled={isProcessing || doctor.isVerified}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                {doctor.isVerified ? "Already Approved" : "Approve Application"}
              </Button>
              <Button
                variant="outline"
                className="w-full text-red-600 border-red-200 hover:bg-red-50"
                onClick={handleReject}
                disabled={isProcessing}
              >
                <XCircle className="h-4 w-4 mr-2" />
                {doctor.isVerified ? "Revoke Verification" : "Reject Application"}
              </Button>
            </CardContent>
          </Card>

          {/* Admin Action History */}
          {userData && (userData.rejectionReason || userData.rejectedAt) && (
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-sm">Rejection Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="p-2 bg-white rounded border border-red-200">
                  <p className="font-semibold text-red-700 mb-1">✗ Application Rejected</p>
                  {userData.rejectedByAdminEmail && (
                    <p className="text-slate-600">By: {userData.rejectedByAdminEmail}</p>
                  )}
                  {userData.rejectedAt && (
                    <p className="text-slate-500">
                      {userData.rejectedAt.toDate().toLocaleString()}
                    </p>
                  )}
                  {userData.rejectionReason && (
                    <p className="text-slate-700 mt-2 p-2 bg-red-50 rounded italic">
                      <span className="font-semibold not-italic">Reason:</span> {userData.rejectionReason}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Metadata */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-slate-500">Created At</p>
                <p className="font-medium">
                  {doctor.createdAt?.toDate().toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Last Updated</p>
                <p className="font-medium">
                  {doctor.updatedAt?.toDate().toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">User ID</p>
                <p className="font-mono text-xs">{doctor.userId}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rejection Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Application</DialogTitle>
            <DialogDescription>
              Please provide a reason for rejecting this doctor's application. This will be shared with the applicant.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Enter rejection reason..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              rows={5}
              className="resize-none"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowRejectDialog(false);
                setRejectionReason("");
              }}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmReject}
              disabled={isProcessing || !rejectionReason.trim()}
            >
              {isProcessing ? "Rejecting..." : "Confirm Rejection"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorProfile;
