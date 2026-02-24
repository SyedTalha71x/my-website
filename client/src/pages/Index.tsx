import About from "../components/About";
import AnimatedBackground from "../components/AnimatedBackground";
// import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
// import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import ScrollProgress from "../components/ScrollProgress";
import TechStack from "../components/TechStack";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      {/* <Certifications /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
