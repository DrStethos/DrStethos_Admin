import { ArrowLeft, Printer, Download, Trash2 } from "lucide-react";
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
      <main className="container mx-auto px-4 py-6 md:py-12 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4 sm:mb-6">Last updated: November 25, 2025</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => window.print()} title="Print" className="flex-1 sm:flex-none">
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Print / Save as PDF</span>
              <span className="sm:hidden ml-2">Print</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
              title="Download PDF (use Print -> Save as PDF)"
              className="flex-1 sm:flex-none">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Download PDF</span>
              <span className="sm:hidden ml-2">Download</span>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Content column (spans 2) */}
          <div className="md:col-span-2">
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          <section id="introduction">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-base sm:text-lg">
              Welcome to <strong>DrStethos</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          {/* Collection of Your Information */}
          <details id="collection" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Collection of Your Information</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect via the App includes:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4">Personal Data</h3>
              <p className="mb-2">
                Personally identifiable information, such as your name, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the App or when you choose to participate in various activities related to the App.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4">Derivative Data</h3>
              <p className="mb-2">
                Information our servers automatically collect when you access the App, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the App.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4">Mobile Device Access</h3>
              <p className="mb-2">
                We may request access or permission to certain features from your mobile device, including your mobile device's <strong>camera</strong>, <strong>storage</strong>, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4">Mobile Device Data</h3>
              <p>
                Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the App from a mobile device.
              </p>
            </div>
          </details>



          {/* Use of Your Information */}
          <details id="use" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Use of Your Information</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions performed related to the App.</li>
                <li>Generate a personal profile about you to make future visits to the App more personalized.</li>
                <li>Increase the efficiency and operation of the App.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
                <li>Notify you of updates to the App.</li>
                <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
                <li>Perform other business activities as needed.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Request feedback and contact you about your use of the App.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
              </ul>
            </div>
          </details>

          {/* Disclosure of Your Information */}
          <details id="disclosure" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Disclosure of Your Information</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p className="mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4">By Law or to Protect Rights</h3>
              <p className="mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4">Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
            </div>
          </details>

          {/* Third-Party Services */}
          <details id="third-party" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Third-Party Services</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p className="mb-4">
                We use the following third-party services which may collect information used to identify you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Google Play Services</strong></li>
                <li><strong>Firebase Analytics</strong></li>
                <li><strong>Google Sign-In</strong></li>
              </ul>

              <p className="mb-2">Link to privacy policy of third party service providers used by the app:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Google Play Services
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Firebase Analytics
                  </a>
                </li>
              </ul>
            </div>
          </details>

          {/* Policy for Children */}
          <details id="children" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Policy for Children</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p>
                We do not knowingly solicit information from or market to children under the age of 13. If you become aware that any data we have collected is from children under age 13, please contact us using the contact information provided below.
              </p>
            </div>
          </details>

          {/* Security of Your Information */}
          <details id="security" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Security of Your Information</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>
          </details>

          {/* Account & Data Deletion */}
          <details id="deletion" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Account & Data Deletion</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p className="mb-4">
                You have the right to request deletion of your account and all associated personal data at any time. We are committed to respecting your privacy rights under GDPR, CCPA, and Google Play Store data deletion requirements.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">How to Request Deletion</h3>
              <p className="mb-2">You can delete your account through the following methods:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>In-App:</strong> Navigate to Profile → Settings → Delete Account</li>
                <li><strong>Email:</strong> Send a deletion request to <a href="mailto:stethosabhisha@gmail.com" className="text-primary underline">stethosabhisha@gmail.com</a></li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">What Gets Deleted</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Firebase Authentication data (email, phone number)</li>
                <li>User profile information (name, preferences, profile picture)</li>
                <li>Medical records and health data</li>
                <li>Communication history (chats, messages)</li>
                <li>App usage data and analytics linked to your account</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Data Retention</h3>
              <p className="mb-2">
                Most data is deleted within <strong>7 days</strong> of your request. However, we may retain certain data for limited periods:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Security and fraud prevention logs (7-30 days)</li>
                <li>Transaction records (if required by financial regulations)</li>
                <li>Legal compliance data (only if mandated by law)</li>
                <li>Anonymized analytics data (cannot identify you personally)</li>
              </ul>

              <div className="mt-4 p-4 bg-primary/10 rounded-md border border-primary/20">
                <p className="flex items-start gap-2">
                  <Trash2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    For detailed information about our account deletion process, data retention policies, and timelines, please visit our dedicated{" "}
                    <Link to="/privacy-policy/delete-account" className="text-primary underline font-semibold">
                      Account Deletion Page
                    </Link>.
                  </span>
                </p>
              </div>
            </div>
          </details>

          {/* Changes to This Privacy Policy */}
          <details id="changes" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Changes to This Privacy Policy</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p>
                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </details>

          {/* Contact Us */}
          <details id="contact" className="group bg-muted/5 rounded-md p-3 sm:p-4">
            <summary className="cursor-pointer list-none outline-none">
              <h2 className="text-xl sm:text-2xl font-semibold inline">Contact Us</h2>
              <span className="ml-2 text-sm text-muted-foreground group-open:rotate-180 transition-transform inline-block">▾</span>
            </summary>
            <div className="mt-3">
              <p className="mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>DrStethos</strong><br />
                <a
                  href="mailto:stethosabhisha@gmail.com"
                  className="text-primary underline"
                >
                  stethosabhisha@gmail.com
                </a>
              </p>
            </div>
          </details>
            </div>
          </div>

          {/* TOC column */}
          <aside className="md:col-span-1 md:sticky md:top-28 md:self-start order-first md:order-last">
            <div className="rounded-md border p-4 bg-background/60 mb-6 md:mb-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <h3 className="text-sm font-semibold">Contents</h3>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 sm:flex-none"
                    onClick={() => {
                      document.querySelectorAll('details').forEach((d) => (d.open = true));
                    }}>
                    Expand All
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 sm:flex-none"
                    onClick={() => {
                      document.querySelectorAll('details').forEach((d) => (d.open = false));
                    }}>
                    Collapse All
                  </Button>
                </div>
              </div>

              <nav className="text-sm space-y-2">
                <a className="block text-primary hover:underline py-1 transition-colors" href="#introduction">Introduction</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#collection">Collection of Your Information</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#use">Use of Your Information</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#disclosure">Disclosure of Your Information</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#third-party">Third-Party Services</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#security">Security of Your Information</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#deletion">Account & Data Deletion</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#children">Policy for Children</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#changes">Changes to This Privacy Policy</a>
                <a className="block hover:text-primary py-1 transition-colors" href="#contact">Contact Us</a>
              </nav>
            </div>
          </aside>
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
