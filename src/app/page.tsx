
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import About from '@/components/sections/About';
import Programs from '@/components/sections/Programs';
import Packages from '@/components/sections/Packages';
import CTA from '@/components/sections/CTA';
import SocialMedia from '@/components/sections/SocialMedia';
import Contact from '@/components/sections/Contact';

import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <TrustStrip />
      <About />
      <Programs />
      <Packages />
      <CTA />
      <SocialMedia />
      <Contact />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
