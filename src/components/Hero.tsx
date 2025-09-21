import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="People for Honor Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-background/30">
            <Heart className="h-4 w-4 text-secondary" />
            <span className="text-white text-sm font-medium">Empowering Lives, Building Futures</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-display text-white mb-6 animate-slide-up">
            Trusted Help for Your
            <span className="block text-secondary">Life in Canada</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            Do more than survive in Canada! We provide empowerment, mentorship, and community 
            support to help newcomers thrive and build meaningful lives.
          </p>

          {/* CTA Buttons */}
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
              className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8 py-4 text-lg"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;