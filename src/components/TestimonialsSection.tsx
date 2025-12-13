import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The FBI's rapid response and professional handling of my case was exceptional. Within weeks, they recovered funds I thought were lost forever.",
    author: "Michael R.",
    role: "Fraud Victim",
    recovered: "$45,000"
  },
  {
    quote: "I was skeptical at first, but the FBI team proved their dedication. They worked tirelessly to bring the perpetrators to justice.",
    author: "Sarah L.",
    role: "Identity Theft Victim",
    recovered: "$120,000"
  },
  {
    quote: "Filing my case was simple and the support team kept me informed every step of the way. Justice was served.",
    author: "David K.",
    role: "Investment Fraud Victim",
    recovered: "$280,000"
  },
  {
    quote: "The professionalism and expertise of the FBI agents handling my case gave me hope when I had none. They truly care about victims.",
    author: "Jennifer M.",
    role: "Romance Scam Victim",
    recovered: "$67,000"
  },
  {
    quote: "From the first call to the resolution, the FBI demonstrated why they are the world's premier law enforcement agency.",
    author: "Robert T.",
    role: "Business Email Compromise Victim",
    recovered: "$350,000"
  },
  {
    quote: "I never believed I would see my money again. The FBI proved me wrong and restored my faith in the justice system.",
    author: "Patricia W.",
    role: "Elder Fraud Victim",
    recovered: "$89,000"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real testimonials from victims who trusted the FBI to fight for justice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary font-semibold mt-1">
                  Recovered: {testimonial.recovered}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
