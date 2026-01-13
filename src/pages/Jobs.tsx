import { Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data/jobs';
import { Button } from '@/components/ui/button';

const Jobs = () => {
  return (
    <Layout>
      {/* Hero */}
     <section className="gradient-hero text-primary-foreground section-padding">
  <div className="container-custom text-center">
    <h1 className="heading-hero mb-4">रोजगारीका अवसरहरू</h1>
    <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
      काठमाडौं उपत्यका भित्रका नवीनतम प्रमाणित रोजगारीका अवसरहरू।
      प्रत्येक रोजगारी रोजगारदातासँग प्रत्यक्ष रूपमा पुष्टि गरिएको हुन्छ।
    </p>
  </div>
</section>



      {/* Jobs Grid */}
      <section className="section-padding">
  <div className="container-custom">
    {/* Search Info */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 p-6 rounded-xl bg-muted border">
      <div className="flex items-center gap-3">
        <Search className="h-5 w-5 text-accent" />
        <span className="text-foreground font-medium">
          {jobs.length} वटा प्रमाणित रोजगारी उपलब्ध छन्
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        आवेदन दिन कुनै पनि रोजगारीमा क्लिक गरी WhatsApp मार्फत सम्पर्क गर्नुहोस्
      </p>
    </div>

    {/* Jobs Grid */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>

    {/* More Jobs CTA */}
    <div className="mt-12 text-center p-8 rounded-2xl bg-accent/10 border border-accent/20">
      <h3 className="heading-card text-foreground mb-3">
        तपाईंले खोजेको रोजगारी भेटिएन?
      </h3>
      <p className="text-body mb-6 max-w-xl mx-auto">
        हामीलाई नियमित रूपमा नयाँ रोजगारीका अवसरहरू प्राप्त भइरहेका हुन्छन्।
        तपाईंको रुचि दर्ता गर्न हामीसँग सम्पर्क गर्नुहोस् र
        मिल्दो रोजगारी उपलब्ध हुँदा जानकारी प्राप्त गर्नुहोस्।
      </p>
      <a
        href="https://wa.me/9779800000000?text=Hello,%20I%20am%20looking%20for%20a%20specific%20type%20of%20job.%20Can%20you%20help?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="whatsapp" size="lg">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          रुचि दर्ता गर्नुहोस्
        </Button>
      </a>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Jobs;
