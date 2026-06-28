import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { SpatialExperience } from '@/components/sections/SpatialExperience';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Solutions } from '@/components/sections/Solutions';
import { Marketplace } from '@/components/sections/Marketplace';
import { ArtificialIntelligence } from '@/components/sections/ArtificialIntelligence';
import { Analytics } from '@/components/sections/Analytics';
import { Manifesto } from '@/components/sections/Manifesto';
import { CallToAction } from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="relative">
        <Hero />
        <Problem />
        <SpatialExperience />
        <HowItWorks />
        <Solutions />
        <Marketplace />
        <ArtificialIntelligence />
        <Analytics />
        <Manifesto />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
