import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Briefcase, Users, Target, Heart, ArrowRight, CheckCircle } from "lucide-react";
import empowermentImg from "@/assets/empowerment.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import coachingImg from "@/assets/coaching.jpg";
import communityImg from "@/assets/community.jpg";

const Services = () => {
  const services = [
    {
      id: "empowerment",
      title: "Empowerment",
      description: "We provide hands-on workshops, resume support, job search guidance, and relevant resources to help you understand the job market & build confidence in interviews.",
      icon: Briefcase,
      image: empowermentImg,
      features: [
        "Resume writing & optimization",
        "Interview preparation",
        "Job search strategies",
        "Professional networking"
      ]
    },
    {
      id: "mentorship",
      title: "Mentorship",
      description: "We connect newcomers with mentors who guide them through the unspoken rules of Canadian life; career development, professional culture, leadership skills, and personal growth.",
      icon: Users,
      image: mentorshipImg,
      features: [
        "One-on-one mentor matching",
        "Cultural integration support",
        "Professional development",
        "Leadership skills training"
      ]
    },
    {
      id: "coaching",
      title: "Coaching",
      description: "We facilitate empowerment-focused group sessions and individual coaching that help participants build clarity, confidence, and emotional resilience.",
      icon: Target,
      image: coachingImg,
      features: [
        "Individual coaching sessions",
        "Group empowerment workshops",
        "Confidence building",
        "Emotional resilience training"
      ]
    },
    {
      id: "community",
      title: "Culture & Community",
      description: "We host activities that bring people together because healing doesn't always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a meal with people who understand your story.",
      icon: Heart,
      image: communityImg,
      features: [
        "Cultural events & celebrations",
        "Community gatherings",
        "Social activities",
        "Peer support networks"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-heading text-foreground mb-4">
            Comprehensive Support for Your Journey
          </h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            We believe everyone has the potential to thrive. Our integrated approach combines practical 
            skills, mentorship, and community support to help you build a fulfilling life in Canada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover-lift animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="max-h-[80vh]">
                      <DrawerHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <DrawerTitle className="text-2xl">{service.title}</DrawerTitle>
                        </div>
                        <DrawerDescription className="text-left">
                          {service.description}
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="px-4 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-3">What You'll Get:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6">
                              <Button className="w-full bg-gradient-primary hover:bg-primary-hover">
                                Get Started with {service.title}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of immigrants who have found the help and community they needed with People for Honor.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8 py-4"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;