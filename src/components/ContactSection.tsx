import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Need <span className="text-gradient-gold">Assistance?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our support team is available 24/7 to assist with your inquiries. 
              Use the live chat or contact us through the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">24/7 Hotline</h3>
                <p className="text-primary font-mono text-lg">1-800-CALL-FBI</p>
                <p className="text-sm text-muted-foreground mt-1">For urgent matters</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                <p className="text-primary">support@fbi.gov</p>
                <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Headquarters</h3>
                <p className="text-foreground">935 Pennsylvania Avenue NW</p>
                <p className="text-sm text-muted-foreground mt-1">Washington, D.C. 20535</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Live Chat Support</h3>
                <p className="text-foreground">Available 24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Click the chat icon below</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl">
              Start Live Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
