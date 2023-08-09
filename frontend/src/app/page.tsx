import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Repository from '@/components/Repository';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Repository />
      <Contact />
    </main>
  )
}
