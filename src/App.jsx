import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import JoinUs from "./pages/JoinUs";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CultureCommunity from "./pages/programs/CultureCommunity";
import EmpowermentMentorship from "./pages/programs/EmpowermentMentorship";
import CulturalDanceExchange from "./pages/events/CulturalDanceExchange";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/programs/empowerment" element={<EmpowermentMentorship />} />
                    <Route path="/programs/mentorship" element={<EmpowermentMentorship />} />
                    <Route path="/programs/coaching" element={<EmpowermentMentorship />} />
                    <Route path="/service/culture-and-community-ottawa-program" element={<CultureCommunity />} />
                    <Route path="/programs/culture-community" element={<Navigate to="/service/culture-and-community-ottawa-program" replace />} />
                    <Route path="/african-caribbean-cultural-dance-exchange" element={<CulturalDanceExchange />} />
                    <Route path="/events/african-caribbean-cultural-dance-exchange" element={<CulturalDanceExchange />} />
                    <Route path="/join" element={<JoinUs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<ContactPage />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
