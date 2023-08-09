import { DM_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import logo from "../../public/images/logo.png"
import Footer from '@/components/Footer';

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
        {children}
        <Footer />
      </body>
    </html>
  );
};
