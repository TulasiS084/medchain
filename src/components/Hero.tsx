import { Shield, QrCode, FileText, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">Secure & Encrypted</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Complete 
                <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent"> Medical History</span> in One Secure Wallet
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Store, manage, and share your medical records securely. Access your complete health history anytime, anywhere, with blockchain-powered security.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-medical-blue to-medical-teal hover:opacity-90 text-white shadow-lg">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 text-center hover:shadow-md transition-all">
                <FileText className="h-8 w-8 mx-auto mb-2 text-medical-blue" />
                <p className="font-semibold">Digital Records</p>
                <p className="text-sm text-muted-foreground">Store all medical documents</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-all">
                <QrCode className="h-8 w-8 mx-auto mb-2 text-medical-teal" />
                <p className="font-semibold">Emergency Access</p>
                <p className="text-sm text-muted-foreground">Quick QR code sharing</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-md transition-all">
                <Heart className="h-8 w-8 mx-auto mb-2 text-emergency-red" />
                <p className="font-semibold">Life Saving</p>
                <p className="text-sm text-muted-foreground">Critical info access</p>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Medical Dashboard" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/20 to-medical-teal/20 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;