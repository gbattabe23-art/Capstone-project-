import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import Features from "../../components/Features";
import Workflow from "../../components/Workflow";
import About from "../../components/About";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

function Landing() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Features */}
      <section id="features">
        <Features />
      </section>

      {/* Workflow */}
      <section id="workflow">
        <Workflow />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
