import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Specialisations from '@/components/Specialisations';
import Packages from '@/components/Packages';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Specialisations />
        <Packages />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
