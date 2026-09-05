import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Stats from '@/components/Stats';
import About from '@/components/About';
import PhotoBand from '@/components/PhotoBand';
import Specialisations from '@/components/Specialisations';
import Packages from '@/components/Packages';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import ScrollProgress from '@/components/ScrollProgress';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <PhotoBand
          src="/img/train-boxing.png"
          alt="One-on-one boxing work on the Virgin Active Kimberley floor"
          quote="Everyone starts somewhere. The job is making sure you keep going."
          attribution="Francis Dippenaar · Senior Personal Trainer"
        />
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
