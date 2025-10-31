import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NewsletterCta = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        // Placeholder: hook up to your email provider later
    };

    return (
        <section className="py-16 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-gradient-card rounded-2xl p-8 sm:p-10 border border-border/50 shadow-medium">
                    <div className="text-center mb-6">
                        <h2 className="text-heading text-foreground mb-3">Join the Transformational Journey!</h2>
                        <p className="text-muted-foreground">
                            Stay connected with our community and be the first to know about new programs, events, and opportunities to make a difference.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" type="text" placeholder="First name" />
                            </div>
                            <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" type="text" placeholder="Last name" />
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary-hover">
                            Join Our Community
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                        We value your privacy. You can unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCta;
