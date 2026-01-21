import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import CoreExpertise from "../components/CoreExpertise";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import FooterCTA from "../components/FooterCTA";
import Careers from "../components/Careers";
import Solutions from "../components/Solutions";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen pt-6 lg:pt-0">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Core Expertise Section */}
      <CoreExpertise />

      {/* Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Careers Section */}
      <section id="careers">
        <Careers />
      </section>

      {/* Solutions Section */}
      <section id="solutions">
        <Solutions />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
};

export default Home;