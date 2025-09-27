import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Download, Share2, AlertTriangle, Heart, Pill, Activity } from "lucide-react";

const MedicalWallet = () => {
  const recentRecords = [
    {
      id: 1,
      type: "Blood Test",
      date: "2024-01-15",
      hospital: "City General Hospital",
      status: "Normal",
      urgent: false
    },
    {
      id: 2,
      type: "X-Ray Chest",
      date: "2024-01-10",
      hospital: "Apollo Clinic",
      status: "Review Required",
      urgent: true
    },
    {
      id: 3,
      type: "Prescription",
      date: "2024-01-08",
      hospital: "Family Care Clinic",
      status: "Active",
      urgent: false
    }
  ];

  const criticalInfo = {
    bloodGroup: "O+",
    allergies: ["Penicillin", "Shellfish"],
    conditions: ["Hypertension", "Diabetes Type 2"],
    emergencyContact: "+91 98765 43210"
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Medical Wallet</h2>
          <p className="text-muted-foreground">Complete overview of your health records and critical information</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Critical Info Card */}
          <Card className="lg:col-span-1 border-l-4 border-l-emergency-red">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-emergency-red" />
                <span>Emergency Info</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Blood Group</span>
                <Badge variant="outline" className="bg-emergency-red/10 text-emergency-red border-emergency-red/20">
                  {criticalInfo.bloodGroup}
                </Badge>
              </div>
              
              <div>
                <span className="text-sm text-muted-foreground block mb-2">Allergies</span>
                <div className="flex flex-wrap gap-1">
                  {criticalInfo.allergies.map((allergy) => (
                    <Badge key={allergy} variant="secondary" className="text-xs">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm text-muted-foreground block mb-2">Conditions</span>
                <div className="space-y-1">
                  {criticalInfo.conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Heart className="h-3 w-3 text-emergency-red" />
                      <span className="text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-emergency-red text-emergency-red hover:bg-emergency-red hover:text-white">
                Generate Emergency QR
              </Button>
            </CardContent>
          </Card>
          
          {/* Recent Records */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-medical-blue" />
                <span>Recent Medical Records</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRecords.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-medical-blue/10">
                        {record.type.includes('Test') && <Activity className="h-4 w-4 text-medical-blue" />}
                        {record.type.includes('X-Ray') && <FileText className="h-4 w-4 text-medical-blue" />}
                        {record.type.includes('Prescription') && <Pill className="h-4 w-4 text-medical-blue" />}
                      </div>
                      <div>
                        <h4 className="font-semibold">{record.type}</h4>
                        <p className="text-sm text-muted-foreground">{record.hospital}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{record.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={record.urgent ? "destructive" : "secondary"}
                        className={record.urgent ? "bg-emergency-red/10 text-emergency-red border-emergency-red/20" : ""}
                      >
                        {record.status}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  View All Records
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MedicalWallet;