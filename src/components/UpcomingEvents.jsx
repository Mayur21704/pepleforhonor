import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
    {
        id: 0,
        title: "African Caribbean Cultural Dance Exchange",
        date: "Sep 06, 2025",
        location: "33 Quill Street, Ottawa",
        description:
            "Monthly community dance exchange celebrating culture, joy, and connectedness.",
        href: "/african-caribbean-cultural-dance-exchange",
    },
    {
        id: 1,
        title: "Employment Workshop: Resume & Interview Skills",
        date: "Nov 15, 2025",
        location: "Ottawa Community Center",
        description:
            "Hands-on workshop to strengthen your resume and prepare for Canadian-style interviews.",
    },
    {
        id: 2,
        title: "Cultural & Community Night",
        date: "Nov 22, 2025",
        location: "Lansdowne Park",
        description:
            "An evening of music, food, and connection for newcomers and community members.",
    },
    {
        id: 3,
        title: "Mentorship Info Session",
        date: "Dec 03, 2025",
        location: "People for Honor Office",
        description:
            "Learn how our mentorship program connects newcomers with experienced professionals.",
    },
];

const UpcomingEvents = () => {
    return (
        <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-heading text-foreground mb-3">Upcoming Events</h2>
                    <p className="text-subheading text-muted-foreground">
                        Join us at our next events and be part of a supportive community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {events.map((e) => (
                        <Card key={e.id} className="bg-gradient-card border-0 shadow-medium h-full">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">{e.title}</CardTitle>
                                <CardDescription className="flex items-center gap-3 mt-2">
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" /> {e.date}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4" /> {e.location}
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <p className="text-sm text-muted-foreground">{e.description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {e.href && (
                                        <Button asChild variant="outline" className="w-full">
                                            <Link to={e.href}>Learn More</Link>
                                        </Button>
                                    )}
                                    <Button asChild className="w-full bg-gradient-primary hover:bg-primary-hover">
                                        <Link to="/join">Join Us</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
