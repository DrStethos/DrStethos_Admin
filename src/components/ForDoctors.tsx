import { Calendar, Clock, Award, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Calendar,
    title: "Shift Discovery",
    description: "Browse available shifts that match your schedule and location preferences."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Choose full-time, part-time, or per-diem opportunities based on your lifestyle."
  },
  {
    icon: Award,
    title: "Profile Credibility",
    description: "Verified badge system builds trust and credibility with healthcare facilities."
  },
  {
    icon: Upload,
    title: "Easy Credential Upload",
    description: "Securely store and share your medical licenses and certifications digitally."
  }
];

const ForDoctors = () => {
  return (
    <section className="py-20 gradient-medical text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium mb-4">
              For Medical Professionals
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Take Control of Your Medical Career
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Whether you're seeking permanent positions, temporary shifts, or consulting opportunities—find your perfect fit with our intelligent matching system.
            </p>
          </div>

          {/* Right Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-white mb-4" strokeWidth={2} />
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDoctors;
