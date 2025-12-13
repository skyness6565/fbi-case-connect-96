import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const openJivoChat = () => {
  if (typeof window !== "undefined" && (window as any).jivo_api) {
    (window as any).jivo_api.open();
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Shield className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-lg font-bold tracking-wide text-foreground">
                FBI Official
              </h1>
              <p className="text-xs text-muted-foreground">Support Portal</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#success" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Success Rate
            </a>
            <a href="#why-file" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Why File a Case
            </a>
            <button 
              onClick={openJivoChat}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Start Live Chat
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
