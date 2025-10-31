import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, DollarSign, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import UpcomingEvents from "@/components/UpcomingEvents";

const JoinUs = () => {
    const ways = [
        {
            icon: Heart,
            title: "Volunteer",
            description: "It takes a village, and we'd love for you to be part of ours. Join us as a volunteer and help build the community you want to see.",
            action: "Become a Volunteer",
            link: "#volunteer-form"
        },
        {
            icon: DollarSign,
            title: "Donate",
            description: "Your donations help us to keep making an impact in our community. Through your donations, we can support more immigrants to navigate their life in Canada.",
            action: "Make a Donation",
            link: "#donate"
        },
        {
            icon: Users,
            title: "Partner with Us",
            description: "Are you an organization that shares our values? Let's work together to create meaningful change in our community.",
            action: "Explore Partnership",
            link: "#partner-form"
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
                                Join Our Mission
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Be part of a community that believes in the potential of every immigrant.
                                Together, we can create lasting change and build a more inclusive Canada.
                            </p>
                            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                                Get Involved Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            {/* Live site tagline */}
                            <div className="mt-6 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                                <p className="text-base md:text-lg">
                                    We are a non-profit ORG Empowering you to discover your inner eagle 🦅, Coaching you to soar 🌟,
                                    and Mentoring you to stay focused 🎯. Join us to empower others or be empowered! 💪✨
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <Button size="lg" variant="outline" asChild>
                                    <a href="https://chat.whatsapp.com/HSUmX0TTqpxDEIkJWZXRMv" target="_blank" rel="noopener noreferrer" aria-label="Join us on WhatsApp">
                                        Join us on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ways to Join */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-heading text-foreground mb-4">Ways to Get Involved</h2>
                            <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                                There are many ways to support our mission and make a difference in the lives of newcomers to Canada.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {ways.map((way, index) => {
                                const Icon = way.icon;
                                return (
                                    <Card key={index} id={way.link ? way.link.replace('#', '') : undefined} className="text-center p-6 hover:shadow-strong transition-shadow duration-300">
                                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-8 w-8 text-primary-foreground" />
                                        </div>
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl mb-2">{way.title}</CardTitle>
                                            <CardDescription className="text-base leading-relaxed">
                                                {way.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button className="w-full bg-gradient-primary hover:bg-primary-hover">
                                                {way.action}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Upcoming Events on Join Us */}
                <UpcomingEvents />

                {/* Newsletter Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">
                                        Join the Transformational Journey!
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Stay connected with our community and be the first to know about new programs, events, and opportunities to make a difference.
                                    </p>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            className="w-full"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Your full name"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="interests">How would you like to get involved?</Label>
                                        <Textarea
                                            id="interests"
                                            placeholder="Tell us about your interests and how you'd like to contribute..."
                                            className="w-full"
                                            rows={4}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary-hover">
                                        Join Our Community
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>

                                    <p className="text-xs text-muted-foreground text-center mt-4">
                                        <em>Contribute to the prosperity of people!</em>
                                    </p>
                                </form>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-heading text-foreground mb-4">Get in Touch</h2>
                                <p className="text-subheading text-muted-foreground">
                                    Have questions about getting involved? We'd love to hear from you.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                                    <p className="text-muted-foreground">647 459 5384</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                                    <p className="text-muted-foreground">info@peopleforhonor.com</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                                    <p className="text-muted-foreground text-sm">
                                        1505 laperrieve Ave Suite 506<br />
                                        Ottawa, ON, K127T1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default JoinUs;
