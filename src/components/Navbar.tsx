import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center glow-border group-hover:glow-primary transition-all duration-300">
            <span className="text-primary font-display font-bold text-sm">S²</span>
          </div>
          <span className="font-display font-semibold text-lg text-foreground">
            Space Square
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Contact
          </a>
        </div>

        <Button variant="outline" size="sm" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
