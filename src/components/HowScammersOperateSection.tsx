import agencySecurityImg from "@/assets/agency-security.jpg";
import peopleReportingImg from "@/assets/people-reporting.jpg";
import scammersCaughtImg from "@/assets/scammers-caught.jpg";
import { AlertTriangle, Shield, Users, Lock } from "lucide-react";

const scammerTactics = [
  {
    icon: AlertTriangle,
    title: "Phishing & Social Engineering",
    description: "Scammers impersonate trusted entities through emails, calls, or messages to steal personal information and credentials."
  },
  {
    icon: Users,
    title: "Romance & Relationship Scams",
    description: "Criminals build fake emotional relationships online to manipulate victims into sending money or revealing financial information."
  },
  {
    icon: Shield,
    title: "Investment & Ponzi Schemes",
    description: "Fraudsters promise high returns with little risk, using new investor money to pay earlier investors until the scheme collapses."
  },
  {
    icon: Lock,
    title: "Business Email Compromise",
    description: "Hackers infiltrate business email accounts to redirect payments, steal sensitive data, or impersonate executives."
  }
];

const HowScammersOperateSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Protect You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding how criminals operate helps us stop them. Here's how the FBI combats fraud.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={agencySecurityImg}
              alt="FBI agents and security personnel working together"
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">Elite Agents</h3>
                <p className="text-sm text-muted-foreground">
                  Our highly trained agents work around the clock to investigate fraud cases
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={peopleReportingImg}
              alt="Citizens filing reports at FBI office"
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">Easy Reporting</h3>
                <p className="text-sm text-muted-foreground">
                  Victims can easily file cases and receive support throughout the process
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={scammersCaughtImg}
              alt="FBI agents arresting criminals"
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">Justice Served</h3>
                <p className="text-sm text-muted-foreground">
                  Scammers are caught and brought to justice through our investigations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scammer Tactics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Common Scammer Tactics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scammerTactics.map((tactic, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <tactic.icon className="w-6 h-6 text-destructive" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{tactic.title}</h4>
                  <p className="text-muted-foreground text-sm">{tactic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Warning Signs to Watch For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-destructive font-semibold">🚨 Urgency Pressure</p>
              <p className="text-sm text-muted-foreground">Demands for immediate action or payment</p>
            </div>
            <div className="p-4">
              <p className="text-destructive font-semibold">💰 Upfront Fees</p>
              <p className="text-sm text-muted-foreground">Requests for payment before services</p>
            </div>
            <div className="p-4">
              <p className="text-destructive font-semibold">🔒 Secrecy Demands</p>
              <p className="text-sm text-muted-foreground">Told not to discuss with family</p>
            </div>
            <div className="p-4">
              <p className="text-destructive font-semibold">🎁 Too Good to Be True</p>
              <p className="text-sm text-muted-foreground">Unrealistic promises of returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowScammersOperateSection;
