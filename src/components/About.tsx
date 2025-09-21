import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Know Your Worth",
      description: "We believe everyone has inherent potential to thrive and live a fulfilled life. Knowing your own worth enables you to better value others."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Giving back to your community not only strengthens those around you but also helps you flourish personally."
    },
    {
      icon: Target,
      title: "Future Focused",
      description: "We are all connected—sowing seeds today so future generations may water the trees, and their descendants may rest in the shade."
    },
    {
      icon: Sparkles,
      title: "Empowerment",
      description: "We facilitate growth through practical support, mentorship, and community connection to help you thrive, not just survive."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">About People for Honor</span>
            </div>
            
            <h2 className="text-heading text-foreground mb-6">
              Our Values Guide Our Actions
            </h2>
            
            <div className="space-y-6 text-body text-muted-foreground">
              <p className="leading-relaxed">
                At People for Honor, our values guide our actions and shape our organizational culture. 
                We believe that everyone has the inherent potential to thrive and live a fulfilled life, 
                and that knowing your own worth enables you to better value others.
              </p>
              
              <p className="leading-relaxed">
                We hold that giving back to your community not only strengthens those around you but 
                also helps you to flourish personally. Above all, we recognize that we are all connected—sowing 
                seeds today so that future generations may water the trees, and their descendants may one day 
                rest in the shade they provide.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-card rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower newcomers to Canada with the tools, connections, and confidence they need 
                to not just survive, but thrive in their new home. We create pathways to success through 
                comprehensive support, meaningful mentorship, and genuine community.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-0 shadow-subtle hover:shadow-medium transition-all duration-300 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Making a Real Impact
          </h3>
          <p className="text-subheading text-muted-foreground mb-12 max-w-3xl mx-auto">
            Every story matters. Every person we help represents a family finding their footing, 
            a dream taking shape, and a community growing stronger.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">People Empowered</div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover-lift">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Mentor Matches</div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover-lift">
              <div className="text-3xl font-bold text-success mb-2">200+</div>
              <div className="text-muted-foreground">Jobs Secured</div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50 hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Community Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;