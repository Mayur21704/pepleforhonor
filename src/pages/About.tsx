import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Inherent Potential",
      description: "We believe everyone has the inherent potential to thrive and live a fulfilled life."
    },
    {
      icon: Users,
      title: "Community Strength",
      description: "Giving back to your community strengthens those around you and helps you flourish personally."
    },
    {
      icon: Target,
      title: "Connected Growth",
      description: "We recognize that we are all connected—sowing seeds today for future generations."
    },
    {
      icon: Award,
      title: "Self Worth",
      description: "Knowing your own worth enables you to better value others and contribute meaningfully."
    }
  ];

  const stats = [
    { number: "40+", label: "Lives Impacted" },
    { number: "50+", label: "Events Done" },
    { number: "15+", label: "Countries Represented" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About People for Honor
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                At People for Honor, we believe every immigrant deserves more than just a fresh start, 
                they deserve to belong. We're building a community in Ottawa where newcomers feel seen, 
                supported, and empowered to thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-heading text-foreground mb-4">Our Values</h2>
              <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                Our values guide our actions and shape our organizational culture. 
                They form the foundation of everything we do at People for Honor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-strong transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                <div className="text-center">
                  <h2 className="text-heading text-foreground mb-6">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    We recognize the strength, purpose, and potential each person carries, and we walk 
                    alongside them as they rebuild, rediscover, and rise into the best version of 
                    themselves with dignity, not just survival.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Assisting in setting goals for your life in Canada</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Working with you to take control of your life</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Connecting you with experienced mentors and coaches</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">Supporting you to live a life of honor in Canada</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-heading text-foreground mb-4">Our Impact</h2>
              <p className="text-subheading text-muted-foreground">
                Join thousands of immigrants who have found needed help and community with People for Honor
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;