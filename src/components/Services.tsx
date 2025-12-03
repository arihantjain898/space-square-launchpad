import { Brain, Code2, Cpu, Database, LineChart, Rocket } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "We help you identify high-impact AI opportunities and build a roadmap for implementation.",
  },
  {
    icon: Cpu,
    title: "Machine Learning Development",
    description: "Custom ML models designed for your specific data, trained and deployed at scale.",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "End-to-end software development with modern architectures and best practices.",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "Build robust data pipelines and infrastructure that power intelligent applications.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights with custom dashboards and reporting.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description: "From concept to launch, we build AI-powered products that users love.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine deep technical expertise with strategic thinking to deliver 
            AI solutions that create measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:glow-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-500">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
