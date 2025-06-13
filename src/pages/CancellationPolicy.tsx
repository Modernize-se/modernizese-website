import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="min-h-screen text-modern-text">
      <Navbar />
      <div className="pt-24 bg-modern-darkbg/70 py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-8">Cancellation Policy</h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Service Cancellation
              </h2>
              <p className="mb-4">
                Clients may cancel their service subscription at any time. To
                cancel, please provide written notice at least 30 days before
                the desired cancellation date.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cancellations must be submitted in writing via email</li>
                <li>All outstanding fees must be paid before cancellation</li>
                <li>
                  No refunds will be provided for partial months of service
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Project Cancellation
              </h2>
              <p className="mb-4">
                For ongoing projects, cancellation terms are as follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Projects may be cancelled with 14 days written notice</li>
                <li>
                  All completed work up to the cancellation date must be paid in
                  full
                </li>
                <li>
                  Any materials or resources purchased specifically for the
                  project are non-refundable
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p>
                For any questions regarding our cancellation policy, please
                contact us at:
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

export default CancellationPolicy;
