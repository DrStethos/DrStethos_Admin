import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative gradient-medical overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting Doctors With Hospitals Seamlessly
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Smart job matching platform for medical professionals. Find shifts, permanent roles, and collaborations with verified hospitals — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-xl hover:scale-105 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-white/10 backdrop-blur-xl shadow-xl flex items-center justify-center animate-float">
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-40 md:w-56 lg:w-64 object-contain drop-shadow-xl rounded-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
