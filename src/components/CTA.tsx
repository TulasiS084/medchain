import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="relative overflow-hidden bg-gradient-to-r from-medical-blue to-medical-teal p-12 text-center text-white">
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Medical Future?
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of patients who trust MedChain to keep their medical history 
              secure, accessible, and ready for any healthcare situation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-medical-blue hover:bg-white/90 font-semibold"
              >
                Start Your Medical Wallet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center space-x-8 text-sm opacity-80">
              <div className="text-center">
                <div className="font-bold text-2xl">256-bit</div>
                <div>Encryption</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">24/7</div>
                <div>Access</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">100%</div>
                <div>Private</div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;