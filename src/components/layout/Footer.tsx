import { Link } from 'react-router-dom';
import { Briefcase, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
         {/* Logo & About */}
<div className="space-y-4">
  <div className="flex items-center gap-2">
    <img
      src="/favicon.png"   // put logo in public folder
      alt="S.R Job Center Logo"
      className="h-12 w-12 rounded-lg object-contain"
    />
    <span className="text-xl font-bold">S.R Job Center</span>
  </div>

  <p className="text-sm text-primary-foreground/80 leading-relaxed">
    काठमाडौं उपत्यका भित्र मात्र साँचो र भरपर्दा रोजगारीका अवसरहरू प्रदान गर्ने तपाईंको विश्वासिलो साझेदार।
हामी दक्ष तथा प्रतिभाशाली व्यक्तिहरूलाई काठमाडौं उपत्यका भित्रका प्रतिष्ठित नियोक्ताहरूसँग जोड्छौं।

  </p>
</div>

          {/* Quick Links */}
         <div>
  <h3 className="text-lg font-semibold mb-4">छिटो लिङ्कहरू</h3>
  <ul className="space-y-2">
    <li>
      <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
        गृहपृष्ठ
      </Link>
    </li>
    <li>
      <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
        हाम्रो बारेमा
      </Link>
    </li>
    <li>
      <Link to="/jobs" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
        रोजगारीका अवसरहरू
      </Link>
    </li>
    <li>
      <Link to="/why-us" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
        हामीलाई किन रोज्ने
      </Link>
    </li>
    <li>
      <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
        सम्पर्क गर्नुहोस्
      </Link>
    </li>
  </ul>
</div>


          {/* Legal */}
          <div>
  <h3 className="text-lg font-semibold mb-4">कानुनी जानकारी</h3>
  <ul className="space-y-2">
    <li>
      <Link
        to="/privacy"
        className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
      >
        गोपनीयता नीति
      </Link>
    </li>
    <li>
      <Link
        to="/terms"
        className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
      >
        नियम तथा सर्तहरू
      </Link>
    </li>
  </ul>
</div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">सम्पर्क गर्नुहोस्</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">+977 9861804767</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">info@srjobcentre.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">काठमाडौं, नेपाल</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} S.R Job Center. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Licensed Recruitment Agency - Government of Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
