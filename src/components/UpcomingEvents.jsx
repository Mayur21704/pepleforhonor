import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/events/read.php`);

            if (response.ok) {
                const data = await response.json();

                if (data.success && data.data && data.data.length > 0) {
                    // Format dates for display
                    const formattedEvents = data.data.map(event => ({
                        ...event,
                        displayDate: formatDate(event.date),
                        displayTime: event.time || ''
                    }));
                    setEvents(formattedEvents);
                }
            }
        } catch (error) {
            console.error('Failed to fetch events:', error);
            // Events remain empty if API fails
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-heading text-foreground mb-3">Upcoming Events</h2>
                    <p className="text-subheading text-muted-foreground">
                        Join us at our next events and be part of a supportive community.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">Loading events...</p>
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {events.map((e) => (
                            <Card key={e.id} className="bg-gradient-card border-0 shadow-medium h-full">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg">{e.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-3 mt-2">
                                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            {e.displayDate || formatDate(e.date)}
                                            {e.displayTime || e.time ? ` • ${e.displayTime || e.time}` : ''}
                                        </span>
                                        {e.location && (
                                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <MapPin className="h-4 w-4" /> {e.location}
                                            </span>
                                        )}
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
                                        <Button asChild className={`w-full bg-gradient-primary hover:bg-primary-hover ${!e.href ? 'sm:col-span-2' : ''}`}>
                                            <Link to="/join">Join Us</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEvents;
