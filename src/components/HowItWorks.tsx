import { UserPlus, Briefcase, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and build your comprehensive medical professional profile with credentials and specializations."
  },
  {
    icon: Briefcase,
    title: "Hospitals Post Requirements",
    description: "Healthcare facilities post job openings, shift needs, and specific requirements to the platform."
  },
  {
    icon: Sparkles,
    title: "Instant Smart Matching",
    description: "Our intelligent system matches profiles with opportunities and sends instant notifications to both parties."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize healthcare staffing
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <svg className="w-full h-full" viewBox="0 0 100 2">
              <path 
                d="M 0 1 Q 25 1 50 1 T 100 1" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="8 4"
                opacity="0.3"
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center space-y-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full gradient-medical flex items-center justify-center shadow-medical">
                      <Icon className="h-12 w-12 text-white" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
