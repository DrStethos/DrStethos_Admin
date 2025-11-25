import { Users, Building2, Target, CheckCircle, Stethoscope, Briefcase } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About DrStethos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between hospitals and healthcare professionals
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  DrStethos is a dedicated medical recruitment platform designed to bridge the gap between hospitals and healthcare professionals. Our mission is to make hiring in the healthcare sector faster, simpler, and more reliable by bringing everything into one seamless digital experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Hospitals</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide hospitals with powerful tools to post jobs, manage applications, shortlist candidates, and schedule in-app interviews, ensuring a smooth and transparent hiring workflow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">For Doctors</h3>
                <p className="text-gray-600 leading-relaxed">
                  Doctors can explore verified job opportunities, view complete role details, and apply with just a tap. We make it easy to find your next career opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/doctor.png"
                alt="Medical Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Registered Doctors</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Verified Hospitals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose DrStethos?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Efficient</h4>
              <p className="text-gray-600">
                Streamlined process that saves time for both hospitals and healthcare professionals
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Trustworthy</h4>
              <p className="text-gray-600">
                All hospitals and doctors are verified, ensuring quality and reliability
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-World Ready</h4>
              <p className="text-gray-600">
                Built for real-world needs with practical features that actually work
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            At DrStethos, we believe that healthcare deserves a recruitment system that is efficient, trustworthy, and built for real-world needs. Whether you're a hospital looking for skilled professionals or a doctor seeking your next opportunity, we're here to make the process effortless.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
