import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import JoinUs from "./pages/JoinUs";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CultureCommunity from "./pages/programs/CultureCommunity";
import EmpowermentMentorship from "./pages/programs/EmpowermentMentorship";
import EventDetail from "./pages/EventDetail";

const queryClient = new QueryClient();

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter future={{ v7_startTransition: true }}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/programs/empowerment" element={<EmpowermentMentorship />} />
                    <Route path="/programs/mentorship" element={<EmpowermentMentorship />} />
                    <Route path="/programs/coaching" element={<EmpowermentMentorship />} />
                    <Route path="/service/culture-and-community-ottawa-program" element={<CultureCommunity />} />
                    <Route path="/programs/culture-community" element={<Navigate to="/service/culture-and-community-ottawa-program" replace />} />
                    {/* Dynamic event detail routes */}
                    <Route path="/:slug" element={<EventDetail />} />
                    <Route path="/events/:slug" element={<EventDetail />} />
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
