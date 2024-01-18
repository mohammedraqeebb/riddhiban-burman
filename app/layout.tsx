import type { Metadata } from 'next';

import localFont from 'next/font/local';

import './globals.css';
import Header from '@/ui/components/header/header';
import { gilroySrc } from '@/assets/fonts/gilroy';
import Footer from '@/ui/components/footer/footer';

// const gilroy = localFont({ src: '../assets/fonts/Gilroy-Regular.ttf' });

export const metadata: Metadata = {
  title: 'Riddhiban Burman',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col mx-auto justify-center">
          <Header />
          <div className="w-screen flex-1 mx-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
