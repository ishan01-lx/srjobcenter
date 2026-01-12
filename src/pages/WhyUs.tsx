import { Shield, FileCheck, Users, Globe, Clock, HeadphonesIcon, BadgeCheck, Handshake, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    icon: Shield,
    title: 'Government Licensed',
    description: 'We operate under full government licensing and comply with all regulations set by the Department of Foreign Employment.',
  },
  {
    icon: FileCheck,
    title: '100% Verified Jobs',
    description: 'Every job listing goes through our rigorous verification process. We confirm directly with employers before posting.',
  },
  {
    icon: Users,
    title: '2000+ Successful Placements',
    description: 'Our track record speaks for itself. We\'ve helped thousands of Nepali workers find genuine employment abroad.',
  },
  {
    icon: Globe,
    title: 'Global Employer Network',
    description: 'Direct partnerships with reputable employers in Gulf countries, Malaysia, South Korea, Japan, and more.',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Efficient documentation and visa processing. We respect your time and work to minimize delays.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our team is available around the clock. Before, during, and after your placement, we\'re here for you.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    description: 'All fees are clearly stated upfront. No hidden charges, no surprise costs after you\'ve committed.',
  },
  {
    icon: Handshake,
    title: 'Ethical Practices',
    description: 'We follow ethical recruitment practices. No exploitation, no false promises, just honest opportunities.',
  },
  {
    icon: Award,
    title: 'Pre-Departure Training',
    description: 'Comprehensive orientation about your destination country, culture, rights, and what to expect.',
  },
];

const stats = [
  { value: '2000+', label: 'Workers Placed' },
  { value: '15+', label: 'Countries' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '10+', label: 'Years Experience' },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-4">Why Choose S.R Job Center?</h1>
          <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
            In a sea of recruitment agencies, here's what makes us different — and why thousands trust us.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted border-y">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our commitment to transparency, integrity, and your success drives everything we do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border shadow-custom-sm transition-all duration-300 hover:shadow-custom-md hover:border-accent/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-style Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-6">Our Commitment</h2>
            <blockquote className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed mb-6">
              "We started S.R Job Center because we saw too many Nepali workers being exploited 
              by unethical agencies. Our mission is simple: provide genuine opportunities with 
              complete transparency. Every worker who trusts us becomes part of our family."
            </blockquote>
            <p className="text-muted-foreground font-medium">— S.R Job Center Team</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Ready to Find Your Opportunity?</h2>
          <p className="text-body-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands who have found genuine employment through S.R Job Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9779800000000?text=Hello,%20I%20want%20to%20apply%20for%20a%20job" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Start Your Application
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
