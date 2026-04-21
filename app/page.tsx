import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhoItsFor from "@/components/WhoItsFor";
import WhyUs from "@/components/WhyUs";
import MeetCyril from "@/components/MeetCyril";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeOffer />
        <WhoItsFor />
        <WhyUs />
        <MeetCyril />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
