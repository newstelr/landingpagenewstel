import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import BottomCTA from "@/components/sections/BottomCTA";
import { Button } from "@/components/ui/button";
import { Building, Users, Award, Globe } from "lucide-react";
import GlobalTestimonial from "@/components/sections/GlobalTestimonial";

const navigationLinks = [
  { text: "Contact", href: "/contact" },
  { text: "Home", href: "/" },
  { text: "BPO Services", href: "/bpo-service" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar links={navigationLinks} />
      
      {/* Hero Section */}
      <div className="bg-navy">
        <div className="container mx-auto px-4 pt-24 pb-64">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-up opacity-0 [--delay:200ms]">
            About Newstel GmbH
          </h1>
          <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto animate-fade-up opacity-0 [--delay:400ms]">
            A trusted partner in business process outsourcing, delivering excellence and innovation since 2005
          </p>
          <div className="mt-8 flex justify-center animate-fade-up opacity-0 [--delay:600ms]">
            <Button
              className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full text-lg transition-all duration-300"
              onClick={() => {
                const form = document.querySelector('form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Free BPO Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Form - This will be pushed up into the hero section */}
      <ContactForm />
      
      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Our Company Story</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Founded in 2005, Newstel GmbH began with a simple mission: to provide businesses with high-quality outsourcing solutions that combine efficiency with exceptional customer experience. What started as a small operation in Hamburg has grown into an international presence with offices across Europe and partnerships worldwide.
              </p>
              <p>
                Over the years, we've expanded our service offerings from basic call center operations to comprehensive business process outsourcing solutions. Today, we serve clients across diverse industries including technology, healthcare, finance, retail, and manufacturing.
              </p>
              <p>
                Our growth has been driven by our commitment to understanding each client's unique needs and delivering tailored solutions that add measurable value to their operations. We believe in building long-term relationships based on trust, transparency, and consistent results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-16 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-coral" />,
                title: "Excellence",
                description: "We are committed to delivering exceptional quality in everything we do."
              },
              {
                icon: <Users className="h-12 w-12 text-coral" />,
                title: "Partnership",
                description: "We view ourselves as an extension of our clients' teams, not just a service provider."
              },
              {
                icon: <Globe className="h-12 w-12 text-coral" />,
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to enhance our services."
              },
              {
                icon: <Building className="h-12 w-12 text-coral" />,
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical business practices."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-16 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexander Schmidt",
                position: "CEO & Founder",
                bio: "With over 20 years of experience in business operations and customer service, Alexander founded Newstel with a vision to transform how businesses approach outsourcing."
              },
              {
                name: "Sophia Meyer",
                position: "Chief Operations Officer",
                bio: "Sophia oversees all operational aspects of our business, ensuring we deliver consistent quality and efficiency across all client engagements."
              },
              {
                name: "Marcus Weber",
                position: "Chief Technology Officer",
                bio: "Marcus leads our technology initiatives, developing innovative solutions that enable our clients to achieve their business objectives."
              },
              {
                name: "Elena Becker",
                position: "Director of Client Services",
                bio: "Elena works closely with our clients to understand their needs and ensure we deliver solutions that exceed their expectations."
              },
              {
                name: "Thomas Müller",
                position: "Head of Finance & Administration",
                bio: "Thomas manages our financial operations, ensuring we maintain the stability and resources needed to serve our clients effectively."
              },
              {
                name: "Laura König",
                position: "Director of Human Resources",
                bio: "Laura focuses on recruiting and developing the talented professionals who make our service excellence possible."
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-8 hover:border-coral/30 transition-all duration-300 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-coral font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <BottomCTA />
      <GlobalTestimonial />
      <Footer />
    </div>
  );
};

export default AboutUs;
