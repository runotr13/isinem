import Contact from "./components/contact";
import Cta from "./components/cta";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import HeroSection from "./components/hero-section";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* CTA Section */}
      <Cta />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;
