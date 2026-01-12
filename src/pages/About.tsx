import { Target, Heart, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-4">About SR Job Centre</h1>
          <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Building trust through genuine opportunities since our founding. We believe every job seeker deserves honesty.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 rounded-2xl bg-card border shadow-custom-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-6">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h2 className="heading-section text-foreground mb-4">Our Mission</h2>
              <p className="text-body">
                To connect hardworking Nepali citizens with genuine, verified employment opportunities 
                around the world. We strive to eliminate the exploitation and fraud that has plagued 
                the recruitment industry, ensuring every candidate receives honest information, 
                fair treatment, and real job placements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border shadow-custom-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-6">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h2 className="heading-section text-foreground mb-4">Our Vision</h2>
              <p className="text-body">
                To become Nepal's most trusted recruitment agency — known for integrity, transparency, 
                and successful placements. We envision a future where every Nepali worker abroad is 
                treated with dignity and receives exactly what was promised to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Promise */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mx-auto mb-6">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h2 className="heading-section text-foreground mb-4">Our Transparency Promise</h2>
            <p className="text-body">
              We believe you deserve to know exactly what you're getting into before you make any decisions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: 'Clear Fee Structure',
                description: 'All costs are disclosed upfront. No hidden charges, no surprise fees after you commit.',
              },
              {
                title: 'Verified Employers',
                description: 'Every company we work with is verified. We personally confirm job details before listing.',
              },
              {
                title: 'Honest Job Details',
                description: 'Salary, working conditions, accommodation — you get the real picture, not inflated promises.',
              },
              {
                title: 'Contract Transparency',
                description: 'We explain every clause of your employment contract in simple terms you can understand.',
              },
              {
                title: 'Ongoing Support',
                description: 'Our relationship doesn\'t end at placement. We support you throughout your employment.',
              },
              {
                title: 'Money-Back Guarantee',
                description: 'If a job falls through due to employer issues, we work to find alternatives or refund fees.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border shadow-custom-sm">
                <CheckCircle className="h-6 w-6 text-accent mb-4" />
                <h3 className="heading-card text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Fake Jobs Disclaimer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Important Notice: No Fake Jobs</h2>
                <p className="text-body mb-4">
                  We are aware of fraudulent agencies that promise impossible salaries and dream jobs 
                  that don't exist. At SR Job Centre, we take a firm stand against this:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive font-bold">•</span>
                    We never list jobs we haven't personally verified with the employer
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive font-bold">•</span>
                    We never promise salaries that are unrealistic for the position
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive font-bold">•</span>
                    We never charge fees for jobs that don't actually exist
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive font-bold">•</span>
                    We encourage you to verify our credentials with government authorities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Have Questions? Let's Talk</h2>
          <p className="text-body-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            We're happy to answer any questions about our services, process, or available opportunities.
          </p>
          <a href="https://wa.me/9779800000000?text=Hello,%20I%20have%20some%20questions%20about%20SR%20Job%20Centre" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ask Us Anything
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
