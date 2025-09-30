import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // Make sure this path is correct

const Hero = () => {
  return (
    // Main section now uses flexbox to perfectly center content and adds responsive padding
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 py-16 sm:px-6 lg:px-8"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="People for Honor Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80"></div>
      </div>

      {/* Main Content Container */}
      {/* This container ensures all content inside is text-aligned to the center */}
      <div className="relative z-10 w-full max-w-4xl mt-28 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-6 py-2 mb-1 border border-background/30">
            <Heart className="h-4 w-4 text-secondary" />
            <span className="text-white text-sm font-medium">Empowering Lives, Building Futures</span>
          </div>

          {/* Main Heading with Responsive Font Sizes */}
          <h1 className="text-4xl font-extrabold text-white sm:text-3xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
            Trusted Help for Your
            <span className="block text-secondary">Life in Canada</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up">
            Do more than survive in Canada! We provide empowerment, mentorship, and community 
            support to help newcomers thrive and build meaningful lives.
          </p>

          {/* CTA Buttons (stacks on mobile, row on larger screens) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8 py-4 text-lg hover-glow"
            >
              Find the Support You Need
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30  hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8 py-4 text-lg"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats (stacks on mobile, 3 columns on larger screens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2  animate-fade-in">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Lives Impacted</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80">Years of Service</div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
