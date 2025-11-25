import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Hospital, Users, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 2px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.25) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-6 md:pt-8 lg:pt-12 pb-0 relative z-10">
        <div className="flex flex-col items-center justify-center -space-y-8">

          {/* Centered Content */}
          <div className="space-y-5 animate-fade-in text-center max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm border border-white/30">
              <Stethoscope className="w-4 h-4" />
              DrStethos Medical Platform
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg px-4">
              Smart Hiring for Hospitals and Doctors
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
              DrStethos is your solution for professional, safe, and rapid medical services, connecting doctors with hospitals seamlessly across India.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button
                size="lg"
                className="text-base px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-white text-blue-700 hover:bg-gray-50"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Animated Images Section */}
          <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-center">
            {/* Left Image - Animates from behind center to left */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[350px] lg:w-[450px] animate-slide-left"
              style={{ 
                animationDelay: '0.8s',
                animationFillMode: 'both'
              }}
            >
              <img
                src="/assets/left.png"
                alt="Left Device"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Image - Animates from behind center to right */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[350px] lg:w-[450px] animate-slide-right"
              style={{ 
                animationDelay: '0.8s',
                animationFillMode: 'both'
              }}
            >
              <img
                src="/assets/right.png"
                alt="Right Device"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Center Image - Animates from bottom to top, overlaps others */}
            <div 
              className="relative z-10 w-[280px] md:w-[380px] lg:w-[500px] animate-slide-up"
              style={{ 
                animationDelay: '0.3s',
                animationFillMode: 'both'
              }}
            >
              <img
                src="/assets/center.png"
                alt="Center Device"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Stats Cards */}
            {/* Total Hospitals - Left Side */}
            <div 
              className="hidden md:block absolute top-[3%] left-2 md:left-18 lg:-left-12 xl:-left-20 animate-float z-20"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl border border-white/30">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white">1000+</div>
                    <div className="text-xs md:text-sm text-white/80">Hospitals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Doctors - Right Side */}
            <div 
              className="hidden md:block absolute top-[20%] -right-12 md:-right-20 lg:-right-32 xl:-right-40 animate-float z-20"
              style={{ animationDelay: '1.4s' }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl border border-white/30">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white">5000+</div>
                    <div className="text-xs md:text-sm text-white/80">Doctors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Jobs - Left Side */}
            <div 
              className="hidden md:block absolute top-[70%] -left-20 md:-left-32 lg:-left-44 xl:-left-56 animate-float z-20"
              style={{ animationDelay: '1.6s' }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl border border-white/30">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white">500+</div>
                    <div className="text-xs md:text-sm text-white/80">Active Jobs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Successful Placements - Right Side */}
            <div 
              className="hidden md:block absolute top-[55%] -right-12 md:-right-24 lg:-right-36 xl:-right-48 animate-float z-20"
              style={{ animationDelay: '1.8s' }}
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl border border-white/30">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Hospital className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white">2000+</div>
                    <div className="text-xs md:text-sm text-white/80">Placements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
