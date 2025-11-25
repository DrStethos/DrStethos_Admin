import { Check, X, Star, Crown, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const hospitalPlans = [
  {
    name: "Silver",
    icon: Award,
    color: "from-gray-400 to-gray-500",
    popular: false,
    monthlyPrice: "3,000",
    yearlyPrice: "25,000",
    features: [
      { name: "Doctor Profile Views", value: "75/month", included: true },
      { name: "Job Postings", value: "2/month", included: true },
      { name: "Access to Doctor Preferences", value: "Yes", included: true },
      { name: "Priority Job Listing", value: "No", included: false },
      { name: "In-App Contact", value: "Chat to shortlist", included: true },
      { name: "Interview Scheduling", value: "Up to 10/month", included: true },
      { name: "Support", value: "Email", included: true },
      { name: "Candidate Shortlist Limit", value: "20/month", included: true },
      { name: "Analytics Dashboard", value: "Basic Reports", included: true },
      { name: "API Access/Integration", value: "No", included: false },
      { name: "Custom Branding", value: "No", included: false },
    ],
    target: "Small hospitals/clinics with basic hiring requirements"
  },
  {
    name: "Gold",
    icon: Star,
    color: "from-yellow-400 to-yellow-600",
    popular: true,
    monthlyPrice: "7,500",
    yearlyPrice: "60,000",
    features: [
      { name: "Doctor Profile Views", value: "250/month", included: true },
      { name: "Job Postings", value: "5/month", included: true },
      { name: "Access to Doctor Preferences", value: "Yes", included: true },
      { name: "Priority Job Listing", value: "Yes", included: true },
      { name: "In-App Contact", value: "Video + Chat", included: true },
      { name: "Interview Scheduling", value: "Up to 30/month", included: true },
      { name: "Support", value: "Chat + Email", included: true },
      { name: "Candidate Shortlist Limit", value: "50/month", included: true },
      { name: "Analytics Dashboard", value: "Advanced Reports", included: true },
      { name: "API Access/Integration", value: "No", included: false },
      { name: "Custom Branding", value: "No", included: false },
    ],
    target: "Medium hospitals seeking more visibility and data insights"
  },
  {
    name: "Platinum",
    icon: Crown,
    color: "from-purple-500 to-purple-700",
    popular: false,
    monthlyPrice: "15,000",
    yearlyPrice: "1,25,000",
    features: [
      { name: "Doctor Profile Views", value: "Unlimited", included: true },
      { name: "Job Postings", value: "Unlimited", included: true },
      { name: "Access to Doctor Preferences", value: "Yes", included: true },
      { name: "Priority Job Listing", value: "Featured + Priority", included: true },
      { name: "In-App Contact", value: "Video + Chat", included: true },
      { name: "Interview Scheduling", value: "Unlimited", included: true },
      { name: "Support", value: "Dedicated Manager", included: true },
      { name: "Candidate Shortlist Limit", value: "Unlimited", included: true },
      { name: "Analytics Dashboard", value: "Customizable Reports", included: true },
      { name: "API Access/Integration", value: "Yes", included: true },
      { name: "Custom Branding", value: "Yes", included: true },
    ],
    target: "Large hospitals or hospital chains requiring full-service access"
  }
];

const doctorPlans = [
  {
    name: "Basic",
    icon: Zap,
    color: "from-blue-400 to-blue-600",
    popular: false,
    monthlyPrice: "499",
    yearlyPrice: "2,999",
    features: [
      { name: "Access to Hospital Profiles", value: "Up to 20/month", included: true },
      { name: "Job Search and Alerts", value: "Basic search", included: true },
      { name: "Job Applications", value: "5/month", included: true },
      { name: "Access to Dashboard", value: "Yes", included: true },
      { name: "Direct Messaging", value: "No", included: false },
      { name: "Resume Highlighting", value: "No", included: false },
      { name: "Customer Support", value: "Email", included: true },
      { name: "Profile Visibility", value: "Basic", included: true },
      { name: "In-App Interview", value: "Chat Only", included: true },
    ],
    target: "Perfect for doctors starting their job search"
  },
  {
    name: "Premium",
    icon: Crown,
    color: "from-green-500 to-green-700",
    popular: true,
    monthlyPrice: "999",
    yearlyPrice: "4,999",
    features: [
      { name: "Access to Hospital Profiles", value: "Unlimited", included: true },
      { name: "Job Search and Alerts", value: "Advanced + Alerts", included: true },
      { name: "Job Applications", value: "Unlimited", included: true },
      { name: "Access to Dashboard", value: "Yes", included: true },
      { name: "Direct Messaging", value: "Yes", included: true },
      { name: "Resume Highlighting", value: "Yes", included: true },
      { name: "Customer Support", value: "Priority Chat/Email", included: true },
      { name: "Profile Visibility", value: "Featured Status", included: true },
      { name: "In-App Interview", value: "Chat + Video", included: true },
    ],
    target: "Best for active job seekers and career advancement"
  }
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing designed for hospitals and doctors
          </p>
        </div>

        {/* Tabs for Hospital/Doctor */}
        <Tabs defaultValue="hospitals" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="hospitals" className="text-base">For Hospitals</TabsTrigger>
            <TabsTrigger value="doctors" className="text-base">For Doctors</TabsTrigger>
          </TabsList>

          {/* Hospital Plans */}
          <TabsContent value="hospitals">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {hospitalPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      plan.popular ? 'border-primary scale-105' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Plan Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">₹{plan.monthlyPrice}</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          or ₹{plan.yearlyPrice}/year <span className="text-green-600 font-semibold">(Save more!)</span>
                        </div>
                      </div>

                      {/* Target */}
                      <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                        {plan.target}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="text-sm">
                              <span className="font-medium text-gray-900">{feature.name}:</span>
                              <span className={feature.included ? "text-gray-700 ml-1" : "text-gray-400 ml-1"}>
                                {feature.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-6 rounded-xl font-semibold ${
                          plan.popular
                            ? 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700'
                            : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Additional Benefits</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>7-14 days free trial for new subscribers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>10-15% discount for 2+ year subscriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Add-ons available for extra postings & views</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flexible monthly or annual payment options</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Doctor Plans */}
          <TabsContent value="doctors">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              {doctorPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      plan.popular ? 'border-primary scale-105' : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                          Recommended
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Plan Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">₹{plan.monthlyPrice}</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          or ₹{plan.yearlyPrice}/year <span className="text-green-600 font-semibold">(Best Value!)</span>
                        </div>
                      </div>

                      {/* Target */}
                      <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                        {plan.target}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="text-sm">
                              <span className="font-medium text-gray-900">{feature.name}:</span>
                              <span className={feature.included ? "text-gray-700 ml-1" : "text-gray-400 ml-1"}>
                                {feature.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-6 rounded-xl font-semibold ${
                          plan.popular
                            ? 'bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800'
                            : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Upgrade to Premium?</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>7-day free trial for premium features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited job applications and searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Featured profile status for better visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Direct messaging with hospitals</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
};

export default Pricing;
