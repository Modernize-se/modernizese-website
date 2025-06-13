import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen text-modern-text">
      <Navbar />
      <div className="pt-24 bg-modern-darkbg/70 py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-8">Refund & Dispute Policy</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
              <p className="mb-4">
                Our refund policy is designed to be fair and transparent for all
                parties involved.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Subscription services are non-refundable after the first 14
                  days
                </li>
                <li>
                  Project deposits are non-refundable once work has commenced
                </li>
                <li>
                  Refunds for completed work are considered on a case-by-case
                  basis
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Dispute Resolution
              </h2>
              <p className="mb-4">
                We are committed to resolving any disputes in a fair and timely
                manner:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  All disputes must be submitted in writing within 30 days of
                  the issue
                </li>
                <li>We will respond to all disputes within 5 business days</li>
                <li>
                  If a resolution cannot be reached, we may engage in mediation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
              <p className="mb-4">We stand behind the quality of our work:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  All deliverables are subject to our quality assurance process
                </li>
                <li>
                  We provide a 30-day warranty period for all completed work
                </li>
                <li>
                  Any issues discovered during the warranty period will be
                  addressed at no additional cost
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p>
                For any questions regarding our refund and dispute policy,
                please contact us at:
                <br />
                Email: support@modernizese.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
