import { ShieldCheck, Scale, Eye, Gavel, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Federal Protection",
    description: "Your case is handled by federal agents with full authority to investigate across state lines and international borders.",
  },
  {
    icon: Scale,
    title: "Legal Authority",
    description: "The FBI has jurisdiction over 200+ categories of federal crimes, ensuring proper legal channels for prosecution.",
  },
  {
    icon: Eye,
    title: "Advanced Investigation",
    description: "Access to cutting-edge forensic technology, surveillance capabilities, and intelligence resources.",
  },
  {
    icon: Gavel,
    title: "Prosecution Support",
    description: "Cases are prepared in coordination with U.S. Attorneys for maximum prosecutorial impact.",
  },
  {
    icon: Globe,
    title: "International Reach",
    description: "FBI Legal Attachés in over 80 countries facilitate global investigations and asset recovery.",
  },
  {
    icon: Users,
    title: "Victim Advocacy",
    description: "Dedicated Victim Services coordinators provide support throughout the investigation process.",
  },
];

const WhyFileSection = () => {
  return (
    <section id="why-file" className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why File a Case with the{" "}
            <span className="text-gradient-gold">FBI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When you file a report with the FBI, you're accessing one of the world's most 
            powerful law enforcement agencies with unmatched resources and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFileSection;
