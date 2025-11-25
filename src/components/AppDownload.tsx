import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="py-20 gradient-medical">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
              <Smartphone className="h-10 w-10" strokeWidth={2} />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold">
            Download Our Mobile App
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Take your medical career on the go. Manage shifts, respond to opportunities, and stay connected—anywhere, anytime.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform gap-2"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform gap-2"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              Google Play
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm pt-4">
            <Download className="h-4 w-4" />
            <span>Over 50,000+ downloads • 4.8★ rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
