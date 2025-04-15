
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  HeadphonesIcon, 
  Users,
  BarChart
} from "lucide-react";

const CallCenterServices = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Comprehensive Call Center Services
          </h2>
          <p className="text-lg text-gray-600">
            Our complete range of call center solutions designed to provide exceptional customer support while optimizing your operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: PhoneCall,
              title: "Inbound Call Support",
              description: "24/7 customer service, technical support, and order processing with minimal wait times.",
            },
            {
              icon: MessageCircle,
              title: "Live Chat Support",
              description: "Real-time chat assistance for website visitors with quick response times and high satisfaction rates.",
            },
            {
              icon: Mail,
              title: "Email Management",
              description: "Professional email support with guaranteed response times and template-based solutions.",
            },
          ].map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-coral/20 transition-all duration-300">
              <CardHeader className="space-y-1">
                <service.icon className="w-10 h-10 text-coral mb-2" />
                <CardTitle className="text-xl font-semibold text-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: HeadphonesIcon,
              title: "Technical Support",
              description: "Specialized technical support teams for product troubleshooting and customer guidance.",
            },
            {
              icon: Users,
              title: "Customer Success",
              description: "Proactive customer engagement and relationship management to boost retention.",
            },
            {
              icon: BarChart,
              title: "Quality Monitoring",
              description: "Continuous quality assessment and performance optimization for better results.",
            },
          ].map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-coral/20 transition-all duration-300">
              <CardHeader className="space-y-1">
                <service.icon className="w-10 h-10 text-coral mb-2" />
                <CardTitle className="text-xl font-semibold text-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Free Call Center Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallCenterServices;
