import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/store/theme-context';

export const metadata: Metadata = {
  title: 'Ezra | Portfolio',
  description:
    'Ezra Mollena is a full-stack developer with 4 years of experience',
};
const recursive = Recursive({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${recursive.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}
      >
        <div className='bg-[#cbf3fa] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#264a4e]  '></div>
        <div className='bg-[#c7ddf9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#192b5e]'></div>
        <ThemeContextProvider>
          <Navbar />
          {children}
          <Toaster position='top-right' />
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
