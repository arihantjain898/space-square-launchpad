const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 border border-primary/50 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xs">S²</span>
            </div>
            <span className="font-display font-medium text-sm text-foreground">
              Space Square
            </span>
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} Space Square. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
