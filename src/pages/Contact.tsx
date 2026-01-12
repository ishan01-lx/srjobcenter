import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-4">Contact Us</h1>
          <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions or ready to start your journey? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* WhatsApp Primary CTA */}
            <div className="p-8 md:p-10 rounded-2xl bg-accent/10 border border-accent/20">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent mb-6">
                <MessageCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="heading-section text-foreground mb-4">Chat on WhatsApp</h2>
              <p className="text-body mb-6">
                The fastest way to reach us. Get instant responses to your questions 
                about jobs, requirements, and the application process.
              </p>
              <a 
                href="https://wa.me/9779800000000?text=Hello,%20I%20want%20to%20inquire%20about%20job%20opportunities" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message Us Now
                </Button>
              </a>
            </div>

            {/* Contact Details */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border shadow-custom-md">
              <h2 className="heading-section text-foreground mb-6">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+9779800000000" className="text-muted-foreground hover:text-accent transition-colors">
                      +977 9800000000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@srjobcentre.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@srjobcentre.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      New Baneshwor, Kathmandu<br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Sunday - Friday: 10:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-4">Common Questions</h2>
            <p className="text-body mb-8">
              Before reaching out, you might find your answer here.
            </p>

            <div className="space-y-4 text-left">
              {[
                {
                  q: 'How do I apply for a job?',
                  a: 'Simply click the WhatsApp button on any job listing to start your application. Our team will guide you through the process.',
                },
                {
                  q: 'What documents do I need?',
                  a: 'Basic documents include passport, citizenship, educational certificates, and experience letters. Specific requirements vary by job.',
                },
                {
                  q: 'How long does the process take?',
                  a: 'The timeline varies by destination country, typically 2-8 weeks from application to departure.',
                },
                {
                  q: 'Is there a fee to apply?',
                  a: 'Initial consultation is free. We\'ll provide a clear breakdown of all costs upfront before you commit.',
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-card border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
