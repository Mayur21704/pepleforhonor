import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Heart } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "647 459 5384",
      description: "Mon - Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@peopleforhonor.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "1505 Laperriere Ave Suite 506",
      description: "Ottawa, ON, K1Z7T1"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Saturday",
      description: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-heading text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            We're here to help you every step of the way. Reach out to us and let's begin 
            building your bright future in Canada together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-slide-up">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-0 shadow-subtle hover:shadow-medium transition-all duration-300 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {item.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional Info */}
            <Card className="bg-gradient-primary border-0 shadow-medium">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
                <h3 className="font-bold text-primary-foreground mb-2">
                  We're Here for You
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  Your success is our mission. Don't hesitate to reach out - 
                  we're committed to supporting your journey in Canada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-border focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground font-medium">
                      Service Interest
                    </Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary/20 focus:outline-none bg-background text-foreground"
                    >
                      <option value="">Select a service...</option>
                      <option value="empowerment">Employment Support</option>
                      <option value="mentorship">Mentorship Program</option>
                      <option value="coaching">Personal Coaching</option>
                      <option value="community">Culture & Community</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="bg-gradient-secondary border-0 shadow-medium">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
                Join Our Community Today
              </h3>
              <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
                Take the first step towards building your successful life in Canada. 
                We're here to support you every step of the way.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4"
              >
                Schedule a Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;