import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          <section>
            <p className="text-lg">
              This Privacy Policy explains how DrStethos (“we”, “our”, “us”) collects, uses, and protects your information when you use our doctor–hospital hiring and networking platform. By using the DrStethos app or website, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 1. Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold">1. Who We Are</h2>
            <p>
              <strong>App Name:</strong> DrStethos <br />
              <strong>Purpose:</strong> Doctor–hospital hiring, job applications, shift management, and communication. <br />
              <strong>Contact Email:</strong>{" "}
              <a href="mailto:support@drstethos.com" className="text-primary underline">
                support@drstethos.com
              </a>{" "}
              <br />
              <strong>Company:</strong> DrStethos Technologies (or your business name)
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-4">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Gender & Date of birth</li>
              <li>Education & experience</li>
              <li>Medical registration numbers & certifications</li>
              <li>Hospital/clinic details (for recruiters)</li>
              <li>Profile photo (optional)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2.2 Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Job applications and submissions</li>
              <li>Shortlisting and hiring activity</li>
              <li>Messages exchanged between doctors and hospitals</li>
              <li>Profile views and activity logs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2.3 Device & Technical Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Device model and OS version</li>
              <li>App version</li>
              <li>Crash logs (via Firebase Crashlytics)</li>
              <li>Analytics (via Firebase Analytics)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2.4 Third-Party Sign-In</h3>
            <p>If you use Google Sign-In, we may receive:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email</li>
              <li>Profile picture (optional)</li>
            </ul>
          </section>

          {/* 3. How We Collect Data */}
          <section>
            <h2 className="text-2xl font-semibold">3. How We Collect Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information provided manually during registration or profile setup</li>
              <li>Automatically through device/app usage</li>
              <li>Through Firebase (Authentication, Firestore, Crashlytics, Analytics)</li>
              <li>Through Google Sign-In</li>
            </ul>
          </section>

          {/* 4. How We Use the Data */}
          <section>
            <h2 className="text-2xl font-semibold">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage user accounts</li>
              <li>Enable job applications and postings</li>
              <li>Facilitate interviews and communication</li>
              <li>Verify identities and credentials</li>
              <li>Improve app performance and user experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          {/* 5. Sharing Information */}
          <section>
            <h2 className="text-2xl font-semibold">5. How We Share Your Information</h2>
            <p>We do not sell or rent your personal data.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With hospitals when you apply for a job</li>
              <li>With doctors when hospitals shortlist or contact you</li>
              <li>Firebase services (Auth, Firestore, Analytics, Crashlytics)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          {/* 6. User Rights */}
          <section>
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Update your profile anytime</li>
              <li>Request deletion of your account</li>
              <li>Request a copy of your stored data</li>
              <li>Stop using the app anytime</li>
            </ul>
          </section>

          {/* 7. Children’s Policy */}
          <section>
            <h2 className="text-2xl font-semibold">7. Children’s Privacy</h2>
            <p>
              DrStethos is intended for users aged 18 and above. We do not knowingly collect data from children.
            </p>
          </section>

          {/* 8. Security */}
          <section>
            <h2 className="text-2xl font-semibold">8. Security Measures</h2>
            <p>
              We use encryption, secure authentication, and industry-standard safeguards to protect your data. 
              However, no digital platform can guarantee absolute security.
            </p>
          </section>

          {/* 9. Changes */}
          <section>
            <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Significant changes will be notified within the app or by email.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="text-2xl font-semibold">10. Contact Us</h2>
            <p>
              For questions or data requests, contact:{" "}
              <a
                href="mailto:support@drstethos.com"
                className="text-primary underline"
              >
                support@drstethos.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 DrStethos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
