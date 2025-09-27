import { Shield, QrCode, Upload, Video, Bell, Users, Lock, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable audit trail with AES-256 encryption ensures your medical data is completely secure and tamper-proof.",
      color: "text-medical-blue"
    },
    {
      icon: QrCode,
      title: "Emergency Access",
      description: "Generate QR codes for instant access to critical medical information during emergencies.",
      color: "text-emergency-red"
    },
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Upload medical reports, prescriptions, and lab results in PDF or image format with OCR support.",
      color: "text-medical-teal"
    },
    {
      icon: Video,
      title: "Teleconsultation",
      description: "Connect with verified doctors through integrated video calls with access to your complete medical history.",
      color: "text-medical-green"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss medication schedules or follow-up appointments with intelligent notifications.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Doctor Verification",
      description: "Only verified healthcare professionals can access your records through our secure admin panel.",
      color: "text-primary"
    },
    {
      icon: Lock,
      title: "Consent Control",
      description: "You control who sees what. Grant temporary access with specific permissions and time limits.",
      color: "text-medical-blue"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your medical wallet on any device, anywhere, anytime with our responsive web and mobile apps.",
      color: "text-medical-teal"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Healthcare Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your medical history securely and efficiently, 
            designed with patient privacy and emergency access in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-secondary group-hover:scale-110 transition-transform">
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;