import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

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

                {/* Our Story */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                                {/* Image 1 */}
                                <img
                                    src="https://peopleforhonor.com/wp-content/uploads/2024/02/Coaching-1.jpg"
                                    alt="People for Honor coaching"
                                    className="w-full h-80 object-cover rounded-xl shadow-medium"
                                />

                                {/* Image 2 */}
                                <img
                                    src="https://peopleforhonor.com/wp-content/uploads/2019/06/post-one.jpg"
                                    alt="People for Honor community"
                                    className="w-full h-80 object-cover rounded-xl shadow-medium"
                                />
                            </div>

                            <Card className="p-8 bg-gradient-card border-0 shadow-medium">
                                <h2 className="text-heading text-foreground mb-4">Our Story</h2>
                                <p className="text-body text-muted-foreground">
                                    At People for Honor we provide Empowerment workshops, coaching and mentoring for Black women, men and youth
                                    (Anglophone and Francophone) as well as one-on-one coaching and mentoring to support mental well-being and
                                    social and economic integration into Canada.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <div className="text-center">
                                    <h2 className="text-heading text-foreground mb-2">Our Mission</h2>
                                    <p className="text-lg font-semibold text-foreground mb-6">Empowering Lives, Restoring Hope</p>
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

                {/* Our Impact (Detailed) */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 bg-gradient-card border-0 shadow-medium">
                                <h2 className="text-heading text-foreground mb-4">Our Impact</h2>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Displaced students who found their career focus.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Incarcerated or recently released individuals who experienced enhanced self-esteem.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Youths seeking clarity of vision about their future.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Individuals struggling with addiction.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Women who have experienced domestic violence.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Individuals dealing with anxiety, depression, and emotional overwhelm.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        Unemployed or underemployed youth.
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Get Involved */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <h2 className="text-heading text-foreground mb-4">Get Involved</h2>
                                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                                    Ready to join us in making a difference? There are many ways to get involved with People for Honour,
                                    from volunteering your time to making a donation or spreading the word about our work. Together,
                                    we can create a brighter, more hopeful future for all.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" asChild>
                                        <a href="/join">Join Our Community</a>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <a href="/programs">Explore Our Programs</a>
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

export default About;
