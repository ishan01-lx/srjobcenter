import { Link } from 'react-router-dom';
import { Shield, FileCheck, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import JobCard from '@/components/JobCard';
import TrustBadge from '@/components/TrustBadge';
import { jobs } from '@/data/jobs';

const Index = () => {
  const featuredJobs = jobs.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">कानुनी रूपमा दर्ता भएको रोजगार एजेन्सी</span>
            </div>
            
            <h1 className="heading-hero mb-6 leading-normal">
             काठमाडौं उपत्यकामा भरपर्दो रोजगारी—सिधै तपाईंको लागि!
            </h1>
            
            <p className="text-body-lg text-primary-foreground/80 mb-8">
             तपाईंको योग्यताको रोजगारी काठमाडौं उपत्यकामा!
सिधा, भरोसायोग्य र इमानदार अवसरहरू, कुनै लुकेको शुल्क वा फेक जागिर छैन।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/9779861804767?text=Hello,%20I%20am%20looking%20for%20job%20opportunities" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  सिधै WhatsApp मा जानकारी लिनुहोस्
                </Button>
              </a>
              <Link to="/jobs">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  उपलब्ध रोजगारीहरू हेर्नुहोस्
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">S.R Job Center किन भरपर्दो छ?</h2>
            <p className="text-body max-w-2xl mx-auto">
              हामी तपाईंको रोजगारी खोज्ने यात्राको हरेक चरणमा पारदर्शिता र इमानदारी कायम राख्ने प्रतिवद्ध छौं। ✅
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge
              icon={Shield}
              title="सरकारी अनुमतिप्राप्त"
              description="नेपाल सरकारका नियम अनुसार पूर्ण रूपमा दर्ता र लाइसेन्स प्राप्त रोजगारी एजेन्सी।"
            />
            <TrustBadge
              icon={FileCheck}
              title="भरपर्दो रोजगारीदाता"
              description="प्रत्येक रोजगारीको सुची सिधै काम दिने संस्थासँग सत्यापित गरिएको हुन्छ। कुनै नक्कली अवसर छैन।"
            />
            <TrustBadge
              icon={Users}
              title="२०००+ सफल नियुक्तिहरू"
              description="२००० भन्दा बढी व्यक्तिहरूलाई वास्तविक रोजगारी पाउन सफलतापूर्वक सहयोग गरिसकेका छौं।"
            />
            <TrustBadge
              icon={Globe}
              title="मजबूत स्थानीय नेटवर्क"
              description="हामी काठमाडौं उपत्यकाका सत्यापित काम दिने संस्था र संगठनहरूसँग नजिकबाट काम गरी वास्तविक रोजगारीका अवसरहरू प्रदान गर्छौं।"
            />
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="heading-section text-foreground mb-2">भर्खरका रोजगारी अवसरहरू</h2>
              <p className="text-body">यस हप्ताका भरपर्दो नयाँ अवसरहरू</p>
            </div>
            <Link to="/jobs">
              <Button variant="outline" size="lg">
                उपलब्ध रोजगारीहरू हेर्नुहोस्
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section mb-6">तपाईंप्रति हाम्रो वाचा</h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">
             S.R Job Center मा हामी बुझ्छौं कि नेपालमा सही रोजगारी पाउनु जीवनको महत्वपूर्ण निर्णय हो। त्यसैले हामी पूर्ण पारदर्शिता र इमानदारीका साथ काम गर्छौं।
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2 text-left max-w-2xl mx-auto">
              {[
                "कुनै लुकेको शुल्क वा अप्रत्याशित शुल्क छैन",  
"सत्यापित संस्थासँग सिधा सम्पर्क",  
"तलब र सम्झौताको स्पष्ट विवरण पहिले नै",  
"रोजगारी आवेदन प्रक्रियामा पूर्ण समर्थन",  
"रोजगारीका आवश्यकताहरूको इमानदार सल्लाह",  
"कुनै झुठा वाचा वा नक्कली सूची छैन",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="https://wa.me/9779861804767?text=Hello,%20I%20want%20to%20learn%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  आजै सम्पर्क गर्नुहोस्
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-2xl bg-accent/10 border border-accent/20 p-8 md:p-12 text-center">
            <h2 className="heading-section text-foreground mb-4">आजै अवसर खोज्नुहोस्!</h2>
            <p className="text-body max-w-2xl mx-auto mb-8">
              नेपालमै तपाईँको पहिलो रोजगारी होस् वा करियरको अर्को कदम, इमानदार र भरपर्दो रोजगारीका अवसरतर्फ हामी तपाईँलाई मार्गदर्शन गर्छौं।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button variant="default" size="lg">
                  सबै रोजगारी हेर्नुहोस् 
                </Button>
              </Link>
              <a href="https://wa.me/9779861804767" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  तत्काल सहायता पाउनुहोस्!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
