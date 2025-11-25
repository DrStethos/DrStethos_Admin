import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ForDoctors from "@/components/ForDoctors";
import ForHospitals from "@/components/ForHospitals";
import Testimonials from "@/components/Testimonials";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <HowItWorks />
      <ForDoctors />
      <ForHospitals />

      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
