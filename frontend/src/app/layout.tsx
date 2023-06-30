import { DM_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';

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
        {children}
      </body>
    </html>
  );
};
