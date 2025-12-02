import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Check, X, Clock } from "lucide-react";
import { toast } from "sonner";
import { collection, query, getDocs, doc, updateDoc, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface VerificationItem {
  id: string;
  uid: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  createdAt: Date;
  profileId?: string;
}

const AdminVerify = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [verifications, setVerifications] = useState<VerificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchVerifications();
  }, []);

  const fetchVerifications = async () => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const users: VerificationItem[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Only include users who have completed onboarding (have profileId)
        if (data.profileId) {
          users.push({
            id: doc.id,
            uid: data.uid,
            name: data.name || "N/A",
            email: data.email || "N/A",
            role: data.role || "N/A",
            isVerified: data.isVerified || false,
            createdAt: data.createdAt?.toDate() || new Date(),
            profileId: data.profileId,
          });
        }
      });

      setVerifications(users);
    } catch (error) {
      console.error("Error fetching verifications:", error);
      toast.error("Failed to load verification requests");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string, uid: string) => {
    try {
      const userRef = doc(db, "users", uid);
      const verifiedAt = new Date();

      // Update user document
      await updateDoc(userRef, {
        isVerified: true,
        verifiedAt: verifiedAt,
      });

      // Get the user's profileId and role to update the respective collection
      const user = verifications.find((item) => item.id === id);
      if (user && user.profileId) {
        const collectionName = user.profileId.startsWith("doctor") ? "doctors" : "hospitals";
        const profileRef = doc(db, collectionName, user.profileId);

        // Update the respective profile document
        await updateDoc(profileRef, {
          isVerified: true,
          verifiedAt: verifiedAt,
        });
      }

      setVerifications(
        verifications.map((item) =>
          item.id === id ? { ...item, isVerified: true } : item
        )
      );
      toast.success("User verified successfully");
    } catch (error) {
      console.error("Error approving verification:", error);
      toast.error("Failed to verify user");
    }
  };

  const handleReject = async (id: string, uid: string) => {
    try {
      const userRef = doc(db, "users", uid);

      // Update user document
      await updateDoc(userRef, {
        isVerified: false,
      });

      // Get the user's profileId to update the respective collection
      const user = verifications.find((item) => item.id === id);
      if (user && user.profileId) {
        const collectionName = user.profileId.startsWith("doctor") ? "doctors" : "hospitals";
        const profileRef = doc(db, collectionName, user.profileId);

        // Update the respective profile document
        await updateDoc(profileRef, {
          isVerified: false,
        });
      }

      setVerifications(
        verifications.map((item) =>
          item.id === id ? { ...item, isVerified: false } : item
        )
      );
      toast.error("User verification rejected");
    } catch (error) {
      console.error("Error rejecting verification:", error);
      toast.error("Failed to reject verification");
    }
  };

  const filteredVerifications = verifications.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "doctors" && item.role?.toLowerCase() === "doctor") ||
      (activeTab === "hospitals" && item.role?.toLowerCase() === "hospital");

    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (isVerified: boolean) => {
    if (isVerified) {
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          <Check className="h-3 w-3 mr-1" />
          Verified
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
        <Clock className="h-3 w-3 mr-1" />
        Pending
      </Badge>
    );
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getRoleBadgeVariant = (role: string) => {
    return role.toLowerCase() === "doctor" ? "default" : "secondary";
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-slate-200 rounded w-1/3 mb-8"></div>
          <div className="h-16 bg-slate-200 rounded mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-slate-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Verification Management</h1>
        <p className="text-slate-500 mt-2">Review and approve verification requests</p>
      </div>

      {/* Search Bar */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabs for filtering */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="doctors">Doctors</TabsTrigger>
          <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Verifications List */}
      <div className="space-y-4">
        {filteredVerifications.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="mt-1">{item.email}</CardDescription>
                  {item.profileId && (
                    <CardDescription className="mt-1 text-xs">
                      Profile ID: {item.profileId}
                    </CardDescription>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getRoleBadgeVariant(item.role)}>
                    {item.role.charAt(0).toUpperCase() + item.role.slice(1)}
                  </Badge>
                  {getStatusBadge(item.isVerified)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  Registered: {formatDate(item.createdAt)}
                </div>
                <div className="flex gap-2">
                  {!item.isVerified && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApprove(item.id, item.uid)}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                  )}
                  {item.isVerified && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => handleReject(item.id, item.uid)}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Revoke
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredVerifications.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-slate-500">No verification requests found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminVerify;
