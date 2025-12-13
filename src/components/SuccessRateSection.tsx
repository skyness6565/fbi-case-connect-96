import { TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "94.7%",
    label: "Case Resolution Rate",
    description: "Successfully resolved cases in 2024",
  },
  {
    icon: Users,
    value: "2.3M+",
    label: "Cases Processed",
    description: "Reports handled since inception",
  },
  {
    icon: Clock,
    value: "48hrs",
    label: "Average Response Time",
    description: "Initial response to filed reports",
  },
  {
    icon: CheckCircle2,
    value: "$4.2B",
    label: "Assets Recovered",
    description: "Funds returned to victims",
  },
];

const SuccessRateSection = () => {
  return (
    <section id="success" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Proven Track Record of{" "}
            <span className="text-gradient-gold">Success</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of agents and analysts work around the clock to investigate 
            and resolve cases with the highest standards of professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_74%_47%/0.1)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessRateSection;
