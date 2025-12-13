import { FileText, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import fbiSeal from "@/assets/fbi-seal.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* FBI Seal */}
          <div className="mb-8 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={fbiSeal} 
                alt="FBI Official Seal" 
                className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2 opacity-0 animate-fade-in">
            FBI Official
          </h1>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-gold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Support Portal
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Secure, encrypted platform for FBI agents, analysts, and authorized partners to access critical resources and support services.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="file" size="xl" className="gap-3">
              <FileText className="w-5 h-5" />
              File Report
            </Button>
          </div>

          {/* Security badges */}
          <div className="flex items-center gap-6 mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm">Secure Connection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
