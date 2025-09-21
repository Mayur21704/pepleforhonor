import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, Heart, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Employment Support Program",
      description: "Comprehensive support to help you navigate the Canadian job market with confidence.",
      duration: "8 weeks",
      schedule: "Tuesdays & Thursdays, 6:00 PM - 8:00 PM",
      location: "1505 Laperriere Ave Suite 506, Ottawa",
      icon: Briefcase,
      highlights: [
        "Resume writing workshops",
        "Interview preparation sessions",
        "Job search strategies",
        "Networking opportunities",
        "Mock interviews",
        "Professional development"
      ],
      nextStart: "March 15, 2024"
    },
    {
      id: 2,
      title: "Mentorship Program",
      description: "Connect with experienced professionals who understand your journey and can guide your success.",
      duration: "6 months",
      schedule: "Flexible scheduling with mentor",
      location: "Virtual & In-person options",
      icon: Users,
      highlights: [
        "One-on-one mentoring",
        "Cultural integration support",
        "Career guidance",
        "Professional networking",
        "Personal development",
        "Goal setting & tracking"
      ],
      nextStart: "Rolling admission"
    },
    {
      id: 3,
      title: "Leadership & Coaching Program",
      description: "Build confidence, clarity, and emotional resilience through group sessions and individual coaching.",
      duration: "12 weeks",
      schedule: "Saturdays, 10:00 AM - 12:00 PM",
      location: "Community Center, Ottawa",
      icon: Target,
      highlights: [
        "Group empowerment sessions",
        "Individual coaching",
        "Confidence building exercises",
        "Emotional resilience training",
        "Leadership skill development",
        "Personal growth planning"
      ],
      nextStart: "April 8, 2024"
    },
    {
      id: 4,
      title: "Culture & Community Program",
      description: "Join cultural events and community activities that celebrate diversity and build connections.",
      duration: "Ongoing",
      schedule: "Various events throughout the month",
      location: "Multiple locations in Ottawa",
      icon: Heart,
      highlights: [
        "Cultural celebrations",
        "Community gatherings",
        "Dance & music events",
        "Cooking workshops",
        "Social activities",
        "Peer support networks"
      ],
      nextStart: "Next event: Feb 25, 2024"
    }
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
                Our Programs
              </h1>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                Comprehensive programs designed to support your journey in Canada. 
                From employment support to cultural integration, we're here to help you thrive.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                Find Your Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <Card key={program.id} className="p-6 hover:shadow-strong transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{program.title}</CardTitle>
                          <div className="text-sm text-primary font-medium">
                            {program.nextStart}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Program Details */}
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span><strong>Duration:</strong> {program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span><strong>Schedule:</strong> {program.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span><strong>Location:</strong> {program.location}</span>
                        </div>
                      </div>

                      {/* Program Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Program Highlights:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-primary hover:bg-primary-hover">
                        Apply for Program
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                <h2 className="text-heading text-foreground mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our programs are designed to meet you where you are and help you get to where you want to be. 
                  Take the first step towards building your future in Canada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                    Schedule a Consultation
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Program Guide
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;