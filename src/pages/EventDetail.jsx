import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const EventDetail = () => {
    const { slug } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEvent();
    }, [slug]);

    const fetchEvent = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/events/read_by_slug.php?slug=${encodeURIComponent(slug)}`);
            const data = await response.json();

            if (response.ok && data.success) {
                setEvent(data.data);
            } else {
                setError(data.message || 'Event not found');
            }
        } catch (err) {
            setError('Failed to load event. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="pt-32 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">Loading event details...</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !event) {
        return (
            <div className="min-h-screen">
                <Header />
                <main className="pt-32 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center py-20">
                            <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
                            <p className="text-muted-foreground mb-8">{error || 'The event you are looking for does not exist.'}</p>
                            <Button asChild>
                                <Link to="/">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
                            {event.description && (
                                <p className="text-lg md:text-xl opacity-90">
                                    {event.description}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Details */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Event Details</CardTitle>
                                    <CardDescription>
                                        Join us for this special community event.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {event.date && (
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Calendar className="h-5 w-5 text-primary" />
                                                <span>
                                                    <strong>Date:</strong> {formatDate(event.date)}
                                                </span>
                                            </div>
                                        )}
                                        {event.time && (
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Clock className="h-5 w-5 text-primary" />
                                                <span>
                                                    <strong>Time:</strong> {event.time}
                                                </span>
                                            </div>
                                        )}
                                        {event.location && (
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="h-5 w-5 text-primary" />
                                                <span>
                                                    <strong>Venue:</strong> {event.location}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                        <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                            <Link to="/contact">
                                                Register Now
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <Link to="/">
                                                <ArrowLeft className="mr-2 h-4 w-4" />
                                                Back to Events
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
                                At People for Honor, we believe in the power of hope to transform lives.
                            </p>
                            <Button asChild className="bg-primary hover:bg-primary-hover">
                                <Link to="/about">Learn More About Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default EventDetail;
