import { Target, Heart, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
  <div className="container-custom text-center">
    <h1 className="heading-hero mb-4">S.R Job Center बारेमा</h1>
    <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
      स्थापना देखि नै साँचो र भरपर्दा रोजगारीका अवसरहरू मार्फत विश्वास निर्माण गर्दै।
      हरेक रोजगारी खोज्ने व्यक्तिले इमानदारी पाउनुपर्छ भन्ने हाम्रो विश्वास हो।
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
        <h2 className="heading-section text-foreground mb-4">हाम्रो लक्ष्य</h2>
        <p className="text-body">
          मेहनती नेपाली नागरिकहरूलाई साँचो र प्रमाणित रोजगारीका अवसरहरूसँग जोड्नु हाम्रो मुख्य लक्ष्य हो।
          रोजगारी क्षेत्रमा व्याप्त ठगी र शोषणको अन्त्य गर्दै, हरेक उम्मेदवारलाई इमानदार जानकारी,
          न्यायोचित व्यवहार र वास्तविक रोजगारी सुनिश्चित गर्न हामी प्रतिबद्ध छौं।
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-card border shadow-custom-md">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-6">
          <Heart className="h-7 w-7 text-accent" />
        </div>
        <h2 className="heading-section text-foreground mb-4">हाम्रो दृष्टि</h2>
        <p className="text-body">
          इमानदारी, पारदर्शिता र सफल रोजगारीको पहिचानसहित नेपालको सबैभन्दा
          विश्वासिलो रोजगारी संस्था बन्ने हाम्रो दृष्टि हो।
          हामी यस्तो भविष्यको कल्पना गर्छौं जहाँ प्रत्येक नेपाली कामदारले
          सम्मानका साथ व्यवहार पाओस् र उसलाई दिइएको वाचा पूरा होस्।
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
      <h2 className="heading-section text-foreground mb-4">हाम्रो पारदर्शिता प्रतिबद्धता</h2>
      <p className="text-body">
        कुनै पनि निर्णय लिनु अघि तपाईंले सबै कुरा स्पष्ट रूपमा थाहा पाउनुपर्छ भन्ने हाम्रो विश्वास हो।
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      {[
        {
          title: 'स्पष्ट शुल्क संरचना',
          description: 'सबै खर्चहरू सुरुमा नै स्पष्ट गरिन्छ। कुनै लुकेका शुल्क हुँदैनन्, पछि कुनै आश्चर्य हुँदैन।',
        },
        {
          title: 'प्रमाणित रोजगारदाता',
          description: 'हामीले काम गर्ने प्रत्येक कम्पनी प्रमाणित हुन्छ। सूचीकरण गर्नु अघि हामी आफैं रोजगारी विवरण पुष्टि गर्छौं।',
        },
        {
          title: 'इमानदार रोजगारी विवरण',
          description: 'तलब, कामको अवस्था, बसोबास — बढाइचढाइ होइन, तपाईंले वास्तविक जानकारी पाउनुहुन्छ।',
        },
        {
          title: 'सम्झौता पारदर्शिता',
          description: 'रोजगारी सम्झौताका प्रत्येक बुँदा तपाईंले बुझ्ने सरल भाषामा व्याख्या गरिन्छ।',
        },
        {
          title: 'निरन्तर सहयोग',
          description: 'हाम्रो सम्बन्ध रोजगारी पाएपछि अन्त्य हुँदैन। रोजगारी अवधिभर हामी तपाईंको साथमा रहन्छौं।',
        },
        {
          title: 'रकम फिर्ता ग्यारेन्टी',
          description: 'रोजगारदाताको कारणले काम अगाडि नबढेमा, हामी विकल्प खोज्छौं वा शुल्क फिर्ता गर्छौं।',
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
          <h2 className="text-xl font-bold text-foreground mb-3">
            महत्वपूर्ण सूचना: नक्कली रोजगारी हुँदैन
          </h2>
          <p className="text-body mb-4">
            असम्भव तलब र अस्तित्वमै नभएका सपनाका रोजगारीको झुटो आश्वासन दिने
            ठगी संस्थाहरूको बारेमा हामी सचेत छौं। S.R Job Center मा हामी यसविरुद्ध
            कडा अडान लिन्छौं:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-destructive font-bold">•</span>
              रोजगारदातासँग व्यक्तिगत रूपमा पुष्टि नगरेका रोजगारी हामी कहिल्यै प्रकाशित गर्दैनौं
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-destructive font-bold">•</span>
              पदअनुसार अवास्तविक तलबको कहिल्यै वाचा गर्दैनौं
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-destructive font-bold">•</span>
              अस्तित्वमै नभएका रोजगारीका लागि हामी शुल्क लिँदैनौं
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-destructive font-bold">•</span>
              सरकारी निकायमार्फत हाम्रो दर्ता तथा प्रमाणिकरण जाँच गर्न हामी तपाईंलाई प्रोत्साहित गर्छौं
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
    <h2 className="heading-section mb-4">केही जिज्ञासा छन्? हामीसँग कुरा गरौं</h2>
    <p className="text-body-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
      हाम्रो सेवा, प्रक्रिया वा उपलब्ध रोजगारीका अवसरहरूबारे तपाईंका सबै प्रश्नहरूको
      जवाफ दिन हामी सधैं तयार छौं।
    </p>
    <a
      href="https://wa.me/9779861804767?text=Hello,%20I%20have%20some%20questions%20about%20SR%20Job%20Centre"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="hero" size="xl">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp मा सम्पर्क गर्नुहोस्
      </Button>
    </a>
  </div>
</section>

    </Layout>
  );
};

export default About;
