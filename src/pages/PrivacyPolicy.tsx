import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const PrivacyPolicy: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen text-modern-text">
      <Navbar />
      <div className="pt-24 bg-modern-darkbg/70 py-12">
        <div className="section-container">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-modern-text-muted mb-12">
              Effective Date: March 18, 2021
            </p>

            <p className="mb-8">
              Modernize-se ("we," "us," or "our") respects your privacy and is
              committed to protecting the personal information you provide to
              us. This Privacy Policy explains how we collect, use, store, and
              disclose your personal data when you use our websites, SaaS
              products, mobile applications, and related services ("Services").
            </p>

            <p className="mb-12">
              By using any of our Services, you consent to the practices
              described in this Privacy Policy.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  1. Scope of Application
                </h2>
                <p>
                  This Privacy Policy applies to all Services provided by
                  Modernize-se, including but not limited to any
                  subscription-based software products, online platforms,
                  websites, subdomains, and standalone domains operated by us.
                  This includes all SaaS products that reference this Privacy
                  Policy from their individual domains or websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect the following categories of information:
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  2.1 Personal Information
                </h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Username and password</li>
                  <li>Billing and payment information</li>
                  <li>Company name and job title (if applicable)</li>
                  <li>Contact details (address, phone number)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">2.2 Usage Data</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>IP address</li>
                  <li>Device and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Log files and error reports</li>
                  <li>Usage patterns, clicks, and activity logs</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">
                  2.3 Cookies and Tracking Technologies
                </h3>
                <p className="mb-4">
                  We use cookies, web beacons, and similar technologies to
                  collect information about your usage of our Services. You may
                  control cookies through your browser settings.
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  2.4 Information from Third Parties
                </h3>
                <p>
                  We may collect information from third-party services you
                  connect to our platform (e.g., payment processors,
                  authentication providers, analytics services).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, operate, and improve our Services</li>
                  <li>To create and manage user accounts</li>
                  <li>To process payments and subscriptions</li>
                  <li>
                    To communicate with you regarding your account,
                    transactions, or support requests
                  </li>
                  <li>
                    To send service-related notices, updates, and promotional
                    materials (where permitted)
                  </li>
                  <li>To personalize user experience and content</li>
                  <li>
                    To monitor usage, diagnose issues, and enhance security
                  </li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  4. Legal Bases for Processing (GDPR)
                </h2>
                <p className="mb-4">
                  If you are located in the European Economic Area (EEA), we
                  process your personal information based on one or more of the
                  following legal bases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Performance of a contract (e.g., providing the Services)
                  </li>
                  <li>Your consent (e.g., for marketing communications)</li>
                  <li>Compliance with legal obligations</li>
                  <li>
                    Legitimate interests (e.g., improving Services, preventing
                    fraud)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Sharing of Information
                </h2>
                <p className="mb-4">
                  We do not sell or rent your personal data. We may share your
                  information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Service Providers: third parties who assist with hosting,
                    payment processing, analytics, customer support, and other
                    business functions.
                  </li>
                  <li>
                    Legal and Regulatory Authorities: if required by law or to
                    protect our legal rights.
                  </li>
                  <li>
                    Business Transfers: in connection with a merger,
                    acquisition, or sale of assets.
                  </li>
                </ul>
                <p className="mt-4">
                  All third-party service providers are required to protect your
                  personal data in accordance with applicable data protection
                  laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  6. Data Retention
                </h2>
                <p>
                  We retain your personal data for as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy, comply
                  with legal obligations, resolve disputes, and enforce
                  agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  7. International Transfers
                </h2>
                <p>
                  Your personal data may be transferred to and processed in
                  countries outside your country of residence. Where required by
                  law, we ensure adequate safeguards are in place to protect
                  your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Delete your data</li>
                  <li>Object to or restrict processing</li>
                  <li>
                    Withdraw consent (where processing is based on consent)
                  </li>
                  <li>Data portability</li>
                  <li>File a complaint with a supervisory authority</li>
                </ul>
                <p className="mt-4">
                  You may exercise your rights by contacting us at the email
                  address provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  9. Data Security
                </h2>
                <p className="mb-4">
                  We implement reasonable administrative, technical, and
                  organizational security measures to protect your personal
                  information from unauthorized access, loss, misuse, or
                  disclosure.
                </p>
                <p>
                  However, no system can be completely secure, and we cannot
                  guarantee the absolute security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  10. Children's Privacy
                </h2>
                <p>
                  Our Services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If we become aware that personal information of a
                  child has been collected, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  11. Third-Party Links
                </h2>
                <p>
                  Our Services may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  such third parties, and we encourage you to review their
                  privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  12. Changes to this Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of material changes by posting the updated policy
                  on our website or through other appropriate means. Your
                  continued use of the Services after such changes constitutes
                  your acceptance of the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  13. Contact Information
                </h2>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at:
                  <br />
                  Email: contact@modernizese.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
