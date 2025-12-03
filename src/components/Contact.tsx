import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-space-gradient relative">
      {/* Gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build
            <br />
            <span className="text-primary">Something Great?</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Whether you have a specific project in mind or want to explore 
            possibilities, we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" asChild>
              <a href="mailto:info@spacesquare.dev">
                <Mail className="w-5 h-5" />
                info@spacesquare.dev
              </a>
            </Button>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="p-6 rounded-2xl bg-card-gradient border border-border">
              <Mail className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:info@spacesquare.dev" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                info@spacesquare.dev
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-card-gradient border border-border">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-semibold text-foreground mb-1">Based In</h3>
              <p className="text-muted-foreground text-sm">
                Remote-first, Global
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
