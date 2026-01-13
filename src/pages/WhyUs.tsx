import { Shield, FileCheck, Users, Globe, Clock, HeadphonesIcon, BadgeCheck, Handshake, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    icon: Shield,
    title: 'सरकारी इजाजतप्राप्त',
    description: 'हामी वैदेशिक रोजगार विभागद्वारा तोकिएका सबै नियम पालना गर्दै पूर्ण सरकारी इजाजतअन्तर्गत सञ्चालनमा छौं।',
  },
  {
    icon: FileCheck,
    title: '१००% प्रमाणित रोजगारी',
    description: 'हरेक रोजगारी कडाइका साथ प्रमाणिकरण गरिन्छ। प्रकाशित गर्नु अघि रोजगारदातासँग प्रत्यक्ष पुष्टि हुन्छ।',
  },
  {
    icon: Users,
    title: '२०००+ सफल रोजगारी',
    description: 'हाम्रो उपलब्धिले नै प्रमाणित गर्छ—हजारौं नेपाली कामदारलाई साँचो रोजगारी दिलाइसकेका छौं।',
  },
  {
    icon: Globe,
    title: 'विश्वसनीय रोजगारदाता सञ्जाल',
    description: 'गल्फ देशहरू, मलेसिया, दक्षिण कोरिया, जापान लगायतका प्रतिष्ठित रोजगारदातासँग प्रत्यक्ष साझेदारी।',
  },
  {
    icon: Clock,
    title: 'छिटो प्रक्रिया',
    description: 'कागजात र प्रक्रिया छरितो। तपाईंको समयको कदर गर्दै ढिलाइ कम गर्न हामी प्रतिबद्ध छौं।',
  },
  {
    icon: HeadphonesIcon,
    title: '२४/७ सहयोग',
    description: 'रोजगारी अघि, दौरान र पछि—हामी सधैं तपाईंको साथमा छौं।',
  },
  {
    icon: BadgeCheck,
    title: 'पारदर्शी शुल्क',
    description: 'सबै शुल्क सुरुमा नै स्पष्ट। कुनै लुकेका शुल्क छैनन्।',
  },
  {
    icon: Handshake,
    title: 'नैतिक अभ्यास',
    description: 'ठगी र झुटो वाचा होइन—इमानदार र नैतिक रोजगारी अभ्यास।',
  },
  {
    icon: Award,
    title: 'प्रस्थानपूर्व तालिम',
    description: 'गन्तव्य देश, संस्कृति, अधिकार र अपेक्षाबारे पूर्ण अभिमुखीकरण।',
  },
];

const stats = [
  { value: '2000+', label: 'रोजगारी पाएका कामदार' },
  { value: '3', label: 'जिल्लाहरु' },
  { value: '98%', label: 'सन्तुष्टि दर' },
  { value: '3+', label: 'वर्षको अनुभव' },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-4">S.R Job Center किन रोज्ने?</h1>
          <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
            रोजगारी संस्थाहरूको भीडमा हामीलाई फरक बनाउने कारण र हजारौंको विश्वास।
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
            <h2 className="heading-section text-foreground mb-4">हामीलाई फरक बनाउने कुरा</h2>
            <p className="text-body max-w-2xl mx-auto">
              पारदर्शिता, इमानदारी र तपाईंको सफलताप्रतिको प्रतिबद्धताले हाम्रो काम निर्देशित गर्छ।
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

      {/* Commitment */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-6">हाम्रो प्रतिबद्धता</h2>
            <blockquote className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed mb-6">
              “धेरै कामदारहरू अनैतिक संस्थाहरूबाट ठगिएका देखेर हामीले S.R Job Center स्थापना गर्‍यौं। हाम्रो उद्देश्य सरल छ—पूर्ण पारदर्शितासहित साँचो रोजगारी प्रदान गर्नु। तपाईं हामीमाथि विश्वास गर्दा, तपाईं हाम्रो परिवारको सदस्य बन्नुहुन्छ।”
            </blockquote>
            <p className="text-muted-foreground font-medium">— S.R Job Center टिम</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">अवसर खोज्न तयार हुनुहुन्छ?</h2>
          <p className="text-body-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            S.R Job Center मार्फत साँचो रोजगारी पाएका हजारौंमध्ये तपाईं पनि बन्नुहोस्।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9779800000000?text=Hello,%20I%20want%20to%20apply%20for%20a%20job" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                आवेदन सुरु गर्नुहोस्
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
