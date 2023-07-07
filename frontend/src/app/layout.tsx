import { DM_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Repository from '@/components/Repository';
import Contact from '@/components/Contact';

const dmMono = DM_Mono({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Isaac Farias',
  description: 'Portifolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmMono.className}>
        <Navbar />
        <HeroSection />
        <About />
        <Repository />
        <Contact />
        {children}
      </body>
    </html>
  );
};
