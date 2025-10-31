import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
    const programCards = [
        {
            id: 1,
            title: "Empowerment",
            icon: Briefcase,
            href: "/programs/empowerment#empowerment",
            description:
                "We provide hands-on workshops, resume support, job search guidance, and relevant resources to help you understand the job market, & build confidence in interviews.",
        },
        {
            id: 2,
            title: "Mentorship",
            icon: Users,
            href: "/programs/mentorship#mentorship",
            description:
                "We connect newcomers with mentors who guide them through the unspoken rules of Canadian life; career development, professional culture, leadership skills, and personal growth.",
        },
        {
            id: 3,
            title: "Coaching",
            icon: Target,
            href: "/programs/coaching#coaching",
            description:
                "We facilitate empowerment-focused group sessions and individual coaching that help participants build clarity, confidence, and emotional resilience.",
        },
        {
            id: 4,
            title: "Culture & Community",
            icon: Heart,
            href: "/service/culture-and-community-ottawa-program",
            description:
                "We host activities that bring people together because healing doesn’t always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a meal with people who understands your story.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Programs</h1>
                            <p className="text-xl leading-relaxed opacity-90">
                                Our Programs
                            </p>
                        </div>
                    </div>
                </section>

                {/* Programs Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-semibold text-foreground mb-2">Our Programs</h3>
                            <p className="text-muted-foreground">We Have Supported over 1000 Immigrants in Canada</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {programCards.map((program) => {
                                const Icon = program.icon;
                                return (
                                    <Card key={program.id} className="p-6 hover:shadow-strong transition-shadow duration-300">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                                                    <Icon className="h-6 w-6 text-primary-foreground" />
                                                </div>
                                                <CardTitle className="text-xl">{program.title}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base leading-relaxed mb-4">
                                                {program.description}
                                            </CardDescription>
                                            <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                                <Link to={program.href}>
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Programs;
