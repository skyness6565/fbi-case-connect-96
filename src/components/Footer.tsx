import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Shield className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                FBI Official Support Portal
              </h3>
              <p className="text-xs text-muted-foreground">
                Federal Bureau of Investigation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            <a href="#" className="hover:text-primary transition-colors">FOIA</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Federal Bureau of Investigation. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This is an official U.S. Government website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
