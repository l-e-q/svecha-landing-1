import Header from "@/components/header";
import Hero from "@/components/hero";
import Problems from "@/components/problems";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MemoryCare - Professional Grave Maintenance Services</title>
        <meta name="description" content="Professional grave maintenance and digital memorial services for those who can't regularly visit their loved ones' resting places" />
        <meta property="og:title" content="MemoryCare - Professional Grave Maintenance Services" />
        <meta property="og:description" content="Professional grave maintenance and digital memorial services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
