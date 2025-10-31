import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeCta from "@/components/HomeCta";
import GetInvolved from "@/components/GetInvolved";
import NewsletterCta from "@/components/NewsletterCta";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <GetInvolved />
                <HomeCta />
                <About />
                <Contact />
                <NewsletterCta />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
