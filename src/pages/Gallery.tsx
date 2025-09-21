import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, MapPin } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Employment Workshop Success",
      category: "workshops",
      type: "image",
      image: "/api/placeholder/400/300",
      description: "Participants celebrating their resume workshop completion",
      date: "March 2024",
      location: "Ottawa Community Center"
    },
    {
      id: 2,
      title: "Cultural Dance Exchange",
      category: "events",
      type: "video",
      image: "/api/placeholder/400/300",
      videoUrl: "https://youtu.be/ZuCfJjYP4KU",
      description: "African/Caribbean Dance Exchange bringing communities together",
      date: "February 2024",
      location: "Ottawa Cultural Center"
    },
    {
      id: 3,
      title: "Mentorship Program Launch",
      category: "programs",
      type: "image",
      image: "/api/placeholder/400/300",
      description: "Connecting newcomers with experienced mentors",
      date: "January 2024",
      location: "People for Honor Office"
    },
    {
      id: 4,
      title: "Community Cooking Session",
      category: "events",
      type: "image",
      image: "/api/placeholder/400/300",
      description: "Sharing traditional recipes and building connections",
      date: "March 2024",
      location: "Community Kitchen"
    },
    {
      id: 5,
      title: "Empowerment Success Stories",
      category: "testimonials",
      type: "video",
      image: "/api/placeholder/400/300",
      videoUrl: "https://youtu.be/MlBTjyV_ado",
      description: "Hear from participants about their transformation journey",
      date: "February 2024",
      location: "Various Locations"
    },
    {
      id: 6,
      title: "Job Fair Preparation",
      category: "workshops",
      type: "image",
      image: "/api/placeholder/400/300",
      description: "Getting ready for success at the Ottawa Job Fair",
      date: "March 2024",
      location: "Business Development Center"
    },
    {
      id: 7,
      title: "Leadership Training Graduation",
      category: "programs",
      type: "image",
      image: "/api/placeholder/400/300",
      description: "Celebrating new leaders in our community",
      date: "February 2024",
      location: "Ottawa Conference Center"
    },
    {
      id: 8,
      title: "Cultural Festival",
      category: "events",
      type: "image",
      image: "/api/placeholder/400/300",
      description: "Celebrating diversity through music, food, and dance",
      date: "January 2024",
      location: "Lansdowne Park"
    }
  ];

  const categories = [
    { id: "all", label: "All", count: galleryItems.length },
    { id: "events", label: "Events", count: galleryItems.filter(item => item.category === "events").length },
    { id: "workshops", label: "Workshops", count: galleryItems.filter(item => item.category === "workshops").length },
    { id: "programs", label: "Programs", count: galleryItems.filter(item => item.category === "programs").length },
    { id: "testimonials", label: "Testimonials", count: galleryItems.filter(item => item.category === "testimonials").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Gallery
              </h1>
              <p className="text-xl leading-relaxed opacity-90">
                See the impact we're making in our community. From workshops and events to 
                success stories and cultural celebrations - every moment tells a story of growth and connection.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? "bg-gradient-primary hover:bg-primary-hover" 
                      : "hover:bg-muted"
                  }`}
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-strong transition-shadow duration-300">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <Play className="h-6 w-6 text-primary-foreground ml-1" />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="aspect-video lg:aspect-square overflow-hidden rounded-lg">
                        {item.type === "video" ? (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <div className="text-center">
                              <Play className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground mb-4">Video Content</p>
                              <Button 
                                className="bg-gradient-primary hover:bg-primary-hover"
                                onClick={() => window.open(item.videoUrl, '_blank')}
                              >
                                Watch on YouTube
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {item.category}
                          </Badge>
                          <h2 className="text-2xl font-bold text-foreground">
                            {item.title}
                          </h2>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        
                        {item.type === "video" && (
                          <Button 
                            className="w-full bg-gradient-primary hover:bg-primary-hover mt-4"
                            onClick={() => window.open(item.videoUrl, '_blank')}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Full Video
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Be Part of Our Story
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every photo and video represents a life transformed, a connection made, 
                  and a step toward a brighter future. Join us and become part of these amazing stories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary hover:bg-primary-hover">
                    Join Our Programs
                  </Button>
                  <Button variant="outline">
                    Volunteer With Us
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

export default Gallery;