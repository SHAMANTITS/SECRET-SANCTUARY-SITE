import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MiniGallery from "@/components/MiniGallery";
import TheSanctuary from "@/components/TheSanctuary";
import WhatWeOffer from "@/components/WhatWeOffer";
import Shrine from "@/components/Shrine";
import ADayHere from "@/components/ADayHere";
import WhyUs from "@/components/WhyUs";
import BookYourStay from "@/components/BookYourStay";
import MeetCyril from "@/components/MeetCyril";
import Inspiration from "@/components/Inspiration";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MusicSection from "@/components/MusicSection";
import SanctuaryJournal from "@/components/SanctuaryJournal";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MusicSection />
        <MiniGallery />
        <TheSanctuary />
        <WhatWeOffer />
        <Shrine />
        <ADayHere />
        <WhyUs />
        <BookYourStay />
        <MeetCyril />
        <Inspiration />
        <Testimonials />
        <FAQ />
        <SanctuaryJournal />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
