import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-hero text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="heading-section text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-body">
                  At S.R Job Center, we collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Contact us via WhatsApp, phone, email, or in person</li>
                  <li>Apply for job opportunities through our services</li>
                  <li>Submit your resume or other documents</li>
                  <li>Visit our website</li>
                </ul>
                <p className="text-body mt-4">
                  This information may include your name, contact details, passport information, 
                  educational qualifications, work experience, and other relevant documents.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-body">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Process your job applications</li>
                  <li>Connect you with potential employers</li>
                  <li>Communicate with you about job opportunities</li>
                  <li>Provide customer support</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-body">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Employers when you apply for specific positions</li>
                  <li>Government agencies for visa and work permit processing</li>
                  <li>Third-party service providers who assist in our operations</li>
                </ul>
                <p className="text-body mt-4">
                  We never sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">4. Data Security</h2>
                <p className="text-body">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">5. Your Rights</h2>
                <p className="text-body">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">6. Contact Us</h2>
                <p className="text-body">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none text-muted-foreground mt-4 space-y-2">
                  <li>Email: info@srjobcentre.com</li>
                  <li>Phone: +977 9861804767</li>
                  <li>WhatsApp: +977 9861804767</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
