import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Engineering-first approach to every project",
  "Deep expertise in LLMs, ML, and modern AI",
  "Startup velocity with enterprise reliability",
  "Outcome-driven, not hours-driven",
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              We Build
              <br />
              <span className="text-primary">Real Products</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Space Square is a boutique AI and software consulting studio founded by 
              engineers who've built products at scale. We're not just consultants — 
              we're builders who ship code and deliver results.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're exploring AI for the first time or scaling an existing 
              ML platform, we bring the technical depth and product intuition to 
              make your vision a reality.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-card-gradient border border-border p-8 relative overflow-hidden">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Central logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center glow-primary animate-float">
                  <span className="font-display text-5xl font-bold text-primary">S²</span>
                </div>
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-8 border border-primary/10 rounded-full" />
              <div className="absolute inset-16 border border-primary/20 rounded-full" />
              <div className="absolute inset-24 border border-primary/10 rounded-full" />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
