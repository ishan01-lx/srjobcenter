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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Briefcase className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">SR Job Centre</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for genuine job opportunities in Nepal and abroad. 
              We connect talented individuals with reputable employers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/jobs" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Job Vacancies</Link></li>
              <li><Link to="/why-us" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">+977 9800000000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">info@srjobcentre.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} SR Job Centre. All rights reserved.
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
