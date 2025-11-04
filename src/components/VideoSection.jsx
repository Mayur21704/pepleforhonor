import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Extract video ID from YouTube URL
    const videoUrl = "https://youtu.be/5tB9-1W31Bg?si=0G0ii-lAIBWU7X_2";
    const videoId = "5tB9-1W31Bg";

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12 animate-fade-in">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                            See Our Impact in Action
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Watch how we're transforming lives and building a thriving community for immigrants in Canada.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-strong animate-scale-in">
                        <div className="aspect-video bg-muted">
                            {!isPlaying ? (
                                // Thumbnail with Play Button
                                <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
                                    <img
                                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                        alt="People for Honor Video"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                            <Button
                                                size="lg"
                                                className="relative bg-primary hover:bg-primary-hover text-primary-foreground rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
                                            >
                                                <Play className="h-8 w-8 sm:h-10 sm:w-10 ml-1" fill="currentColor" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                                        <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                                            People for Honor - Transforming Lives
                                        </h3>
                                        <p className="text-white/80 text-xs sm:text-sm">
                                            Discover how we empower immigrants to thrive in Canada
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // YouTube Embed
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="People for Honor Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 sm:mt-8 text-center animate-fade-in">
                        <p className="text-sm sm:text-base text-muted-foreground mb-4">
                            Join thousands of immigrants who have found the support they needed
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                <a href="/programs">Explore Our Programs</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="/gallery">View More Videos</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
