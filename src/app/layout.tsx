import type { Metadata } from 'next';

import './globals.css';
import { Recursive } from 'next/font/google';
import Header from '@/components/Header';
export const metadata: Metadata = {
  title: 'Ezra | Portfolio',
  description:
    'Ezra Mollena is a full-stack developer with 4 years of experience',
};
const recursive = Recursive({
  subsets: ['latin'],
  weight: '400',

  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${recursive.className} bg-slate-200 text-slate-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#cbf3fa] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#3b8791]  '></div>
        <div className='bg-[#c7ddf9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#1e3a8a]'></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
