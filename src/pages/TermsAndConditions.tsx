import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const TermsAndConditions: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen text-modern-text">
      <Navbar />
      <div className="pt-24 bg-modern-darkbg/70 py-12">
        <div className="section-container">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-modern-text-muted mb-12">
              Effective Date: March 18, 2021
            </p>

            <p className="mb-8">
              These Terms of Service ("Terms") govern the access and use of all
              online software products, websites, applications, and services
              (collectively, the "Services") provided by Modernize-se ("we,"
              "us," or "our"). By accessing or using any of the Services, you
              ("you" or "User") agree to be bound by these Terms, our Privacy
              Policy, and any applicable Subscription Terms.
            </p>

            <p className="mb-12">
              If you do not agree to these Terms, you may not access or use the
              Services.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  1. Scope of Application
                </h2>
                <p>
                  These Terms apply to all Services provided by Modernize-se,
                  including but not limited to any subscription-based software
                  products, online platforms, websites, subdomains, and
                  standalone domains operated by us. Each individual product may
                  maintain its own website or domain but will be governed by
                  these centralized Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                <p className="mb-4">
                  By using the Services, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You are at least 18 years old, or of legal age in your
                    jurisdiction.
                  </li>
                  <li>
                    You have the legal authority to enter into a binding
                    agreement.
                  </li>
                  <li>
                    If you are using the Services on behalf of an entity, you
                    are authorized to bind that entity to these Terms.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  3. Account Registration
                </h2>
                <p className="mb-4">
                  You may need to create an account to access certain features
                  of the Services. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information.</li>
                  <li>
                    Maintain and promptly update your information as necessary.
                  </li>
                  <li>
                    Keep your login credentials confidential and not share your
                    account with others.
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use or security
                    breach of your account.
                  </li>
                </ul>
                <p className="mt-4">
                  You are solely responsible for all activities that occur under
                  your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  4. Subscription Terms
                </h2>
                <p className="mb-4">
                  Your use of any subscription-based Services is governed by our
                  Subscription Terms (incorporated herein by reference), which
                  include details about:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription plans and billing cycles</li>
                  <li>Automatic renewals</li>
                  <li>Cancellation procedures</li>
                  <li>Refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Acceptable Use
                </h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Services for any unlawful, harmful, or fraudulent
                    purpose.
                  </li>
                  <li>
                    Interfere with the operation, security, or integrity of the
                    Services.
                  </li>
                  <li>
                    Reverse engineer, decompile, or disassemble any part of the
                    Services.
                  </li>
                  <li>
                    Attempt unauthorized access to any part of the Services.
                  </li>
                  <li>Transmit viruses, malware, or other harmful code.</li>
                  <li>
                    Use automated means (bots, crawlers, scrapers) to access the
                    Services, unless explicitly permitted.
                  </li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that
                  violate these restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  6. Intellectual Property
                </h2>
                <p className="mb-4">
                  All content, software, trademarks, logos, and other materials
                  provided through the Services are owned by or licensed to
                  Modernize-se and are protected by intellectual property laws.
                  You are granted a limited, non-exclusive, non-transferable,
                  revocable license to access and use the Services for their
                  intended purposes.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create
                  derivative works from any part of the Services without prior
                  written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  7. Third-Party Services
                </h2>
                <p>
                  The Services may integrate with or link to third-party
                  websites, services, or resources. We do not endorse, control,
                  or assume responsibility for any third-party services. Your
                  use of third-party services is at your own risk and subject to
                  their separate terms and policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Disclaimers</h2>
                <p className="mb-4">
                  The Services are provided "as is" and "as available" without
                  warranties of any kind, express or implied, including but not
                  limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Availability or uptime</li>
                  <li>Accuracy of data or results</li>
                </ul>
                <p className="mt-4">
                  We do not guarantee that the Services will be uninterrupted,
                  error-free, or secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, Modernize-se and its
                  affiliates, officers, directors, employees, agents, and
                  licensors shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Any indirect, incidental, special, or consequential damages.
                  </li>
                  <li>Loss of profits, revenue, or data.</li>
                  <li>Business interruption or system failure.</li>
                  <li>
                    Any damages exceeding the amount you paid us for the
                    Services during the prior 12 months.
                  </li>
                </ul>
                <p className="mt-4">
                  This limitation applies even if we have been advised of the
                  possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  10. Indemnification
                </h2>
                <p className="mb-4">
                  You agree to indemnify, defend, and hold harmless Modernize-se
                  and its affiliates, officers, directors, employees, agents,
                  and licensors from any claims, losses, damages, liabilities,
                  costs, or expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your violation of these Terms.</li>
                  <li>Your use of the Services.</li>
                  <li>Your violation of any law or third-party rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  11. Modifications
                </h2>
                <p>
                  We reserve the right to update or modify these Terms at any
                  time. We will provide notice of material changes via the
                  Services or by other reasonable means. Continued use of the
                  Services after changes take effect constitutes your acceptance
                  of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
                <p className="mb-4">
                  We may suspend or terminate your access to the Services at any
                  time, with or without cause or notice, including for
                  violations of these Terms.
                </p>
                <p className="mb-4">Upon termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Your right to use the Services will immediately cease.
                  </li>
                  <li>Any outstanding payment obligations will remain due.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  13. Governing Law; Dispute Resolution
                </h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction where Modernize-se operates,
                  without regard to conflict of law principles.
                </p>
                <p>
                  Any disputes arising under these Terms shall be resolved
                  through binding arbitration or in the courts of competent
                  jurisdiction, as determined by Modernize-se.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  14. Entire Agreement
                </h2>
                <p>
                  These Terms, along with our Privacy Policy and Subscription
                  Terms, constitute the entire agreement between you and
                  Modernize-se regarding your use of the Services and supersede
                  all prior agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  15. Contact Information
                </h2>
                <p>
                  For any questions or concerns about these Terms, please
                  contact us at:
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

export default TermsAndConditions;
