import { UserPlus, Building2, Search, Send, Video, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Hospitals and doctors sign up with secure verification to ensure authenticity and trust."
  },
  {
    icon: Building2,
    title: "Hospitals Post Jobs",
    description: "Hospitals can create detailed job listings by specifying role, experience, location, salary range, and requirements."
  },
  {
    icon: Search,
    title: "Doctors Discover Opportunities",
    description: "Doctors browse verified hospital openings, filter based on specialization, and view complete job details."
  },
  {
    icon: Send,
    title: "Apply or Shortlist",
    description: "Doctors can apply instantly with one tap, while hospitals can manage applicants, shortlist candidates, or request more details."
  },
  {
    icon: Video,
    title: "In-App Interviews",
    description: "Hospitals schedule interviews directly inside the platform, and doctors attend without switching apps."
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Both doctors and hospitals can track applications, interview status, and job updates in real time."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Six simple steps to transform healthcare recruitment
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full">
                    
                    {/* Icon with number inside */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-bold text-sm text-gray-900 shadow-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full"></div>
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
