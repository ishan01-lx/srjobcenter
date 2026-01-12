import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-hero text-foreground mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="heading-section text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-body">
                  By using SR Job Centre's services, you agree to be bound by these Terms and 
                  Conditions. If you do not agree with any part of these terms, please do not 
                  use our services.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">2. Our Services</h2>
                <p className="text-body">
                  SR Job Centre provides recruitment and placement services connecting job seekers 
                  with employers in Nepal and abroad. Our services include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Job matching and placement assistance</li>
                  <li>Document preparation guidance</li>
                  <li>Visa and work permit processing assistance</li>
                  <li>Pre-departure orientation</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">3. Candidate Responsibilities</h2>
                <p className="text-body">
                  As a job seeker using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Provide accurate and truthful information in all documents and applications</li>
                  <li>Maintain valid travel documents and comply with visa requirements</li>
                  <li>Follow the terms of your employment contract once placed</li>
                  <li>Pay agreed-upon service fees as per our fee structure</li>
                  <li>Inform us of any changes to your application status or circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">4. Fees and Payments</h2>
                <p className="text-body">
                  Our fee structure is transparent and will be clearly explained before you 
                  commit to any service. Key points:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>All fees are communicated upfront in writing</li>
                  <li>No hidden charges will be applied</li>
                  <li>We comply with government regulations on recruitment fees</li>
                  <li>Refund policies will be explained for each service</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">5. Job Verification</h2>
                <p className="text-body">
                  We make every effort to verify job opportunities with employers. However:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>We cannot guarantee employment or specific outcomes</li>
                  <li>Final hiring decisions rest with employers</li>
                  <li>Visa approvals depend on government authorities</li>
                  <li>Working conditions are determined by employment contracts</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-body">
                  While we strive to provide accurate information and quality services, SR Job 
                  Centre is not liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Actions or decisions made by employers</li>
                  <li>Visa rejections by government authorities</li>
                  <li>Changes to employment terms by employers post-placement</li>
                  <li>Personal disputes between workers and employers</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">7. Dispute Resolution</h2>
                <p className="text-body">
                  Any disputes arising from our services will be resolved through:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Direct discussion with our management</li>
                  <li>Mediation if direct resolution fails</li>
                  <li>Applicable legal procedures as per Nepal law</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">8. Changes to Terms</h2>
                <p className="text-body">
                  We reserve the right to update these Terms and Conditions. Changes will be 
                  posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-foreground mb-4">9. Contact Information</h2>
                <p className="text-body">
                  For questions about these terms, please contact:
                </p>
                <ul className="list-none text-muted-foreground mt-4 space-y-2">
                  <li>SR Job Centre</li>
                  <li>New Baneshwor, Kathmandu, Nepal</li>
                  <li>Email: info@srjobcentre.com</li>
                  <li>Phone: +977 9800000000</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
