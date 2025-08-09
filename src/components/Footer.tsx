import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flower2, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="warm-gradient border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-6 w-6 text-primary" />
              <span className="font-semibold">Prakriti Wellness</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover your unique Ayurvedic constitution and embrace a balanced lifestyle.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-wellness">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-wellness">
                Contact
              </Link>
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-wellness">
                Privacy Policy
              </Link>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-medium">Follow Us</h3>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary transition-wellness">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary transition-wellness">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-primary transition-wellness">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-medium">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get wellness tips and Ayurvedic insights.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="h-9 text-sm border-input focus:ring-primary"
              />
              <Button size="sm" className="wellness-gradient text-primary-foreground shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Prakriti Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;