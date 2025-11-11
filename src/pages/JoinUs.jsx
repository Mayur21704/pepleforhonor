import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, DollarSign, ArrowRight, Mail, Phone, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import UpcomingEvents from "@/components/UpcomingEvents";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const JoinUs = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        interests: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const communityImages = [
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0007.jpg",
            alt: "Community hangout"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0008.jpg",
            alt: "Community gathering"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0010.jpg",
            alt: "Community event"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0009.jpg",
            alt: "Community members"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0011.jpg",
            alt: "Community activity"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0005.jpg",
            alt: "Community support"
        }
    ];

    const openImageModal = (index) => {
        setSelectedImageIndex(index);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImageIndex(null);
    };

    const goToPrevious = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? communityImages.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setSelectedImageIndex((prev) =>
            prev === communityImages.length - 1 ? 0 : prev + 1
        );
    };

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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch(`${API_BASE}/api/join/submit.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setMessage({
                    type: 'success',
                    text: 'Thank you for joining us! We\'ll be in touch soon.'
                });
                setFormData({ email: '', name: '', interests: '' }); // Clear form
            } else {
                setMessage({
                    type: 'error',
                    text: data.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'Unable to submit. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground" asChild>
                                <a href="#join-community">
                                    Get Involved Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            {/* Live site tagline */}
                            <div className="mt-6 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                                <p className="text-base md:text-lg">
                                    We are a non-profit ORG Empowering you to discover your inner eagle 🦅, Coaching you to soar 🌟,
                                    and Mentoring you to stay focused 🎯. Join us to empower others or be empowered! 💪✨
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <Button size="lg" variant="outline" asChild className="bg-white hover:bg-white/90 text-black border-white">
                                    <a href="https://chat.whatsapp.com/HSUmX0TTqpxDEIkJWZXRMv" target="_blank" rel="noopener noreferrer" aria-label="Join us on WhatsApp">
                                        Join us on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events on Join Us */}
                <UpcomingEvents />

                {/* Newsletter Section */}
                <section id="join-community" className="py-20 bg-muted/30">
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

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {message.text && (
                                        <div className={`p-3 rounded-md text-sm ${message.type === 'success'
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                            }`}>
                                            {message.text}
                                        </div>
                                    )}
                                    <div>
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            className="w-full"
                                            value={formData.email}
                                            onChange={handleInputChange}
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
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="interests">How would you like to get involved?</Label>
                                        <Textarea
                                            id="interests"
                                            placeholder="Tell us about your interests and how you'd like to contribute..."
                                            className="w-full"
                                            rows={4}
                                            value={formData.interests}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-primary hover:bg-primary-hover"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Join Our Community'}
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

                {/* Community Hangouts - Image Gallery */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-heading text-foreground mb-4">Community Hangouts</h2>
                            <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                                At People for Honor, we believe in the power of hope to transform lives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {communityImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover rounded-xl shadow-medium hover:shadow-strong transition-shadow duration-300 cursor-pointer"
                                    onClick={() => openImageModal(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Image Modal/Slider */}
                {isImageModalOpen && selectedImageIndex !== null && (
                    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95">
                            <div className="relative">
                                <img
                                    src={communityImages[selectedImageIndex].src}
                                    alt={communityImages[selectedImageIndex].alt}
                                    className="w-full h-[70vh] object-contain"
                                />

                                {/* Navigation Buttons */}
                                <button
                                    onClick={goToPrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-6 w-6 text-white" />
                                </button>

                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-6 w-6 text-white" />
                                </button>

                                {/* Close Button */}
                                <button
                                    onClick={closeImageModal}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5 text-white" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-white text-sm font-medium">
                                        {selectedImageIndex + 1} / {communityImages.length}
                                    </span>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default JoinUs;
