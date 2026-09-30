import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import Services from "../sections/Services";
import AboutStack from "../sections/AboutStack";
import HowItWorks from "../sections/HowItWorks";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import CTABanner from "../components/CTABanner";


const Home = () => {

  return (
    <>

      <Hero />

      <ClientLogos />

      <Services />

      <AboutStack />

      <HowItWorks />

      <Projects />

      <Testimonials />

      <FAQ />

      <CTABanner/>

    </>
  );

};


export default Home;