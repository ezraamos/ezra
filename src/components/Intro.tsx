'use client';
import { motion } from 'framer-motion';
import { Download, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from './github-icon';
import LinkedinIcon from './linkedin-icon';
import useSectionInView from '@/hooks/useSectionInView';
import { useActiveSectionStore } from '@/store/active-section.store';

const Intro = () => {
  const { ref } = useSectionInView('Home');
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );
  const setTimeOfLastClick = useActiveSectionStore(
    (state) => state.setTimeOfLastClick
  );

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/avatar.jpg'
              alt='ezra portrait'
              width={300} // Set appropriate width
              height={300} // Set appropriate height
              priority={true}
              className='h-24 w-24 overflow-hidden rounded-full border-[0.35rem] border-slate-50 shadow-xl object-cover '
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              className='absolute bottom-0 right-0 text-3xl'
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hey there! I'm Ezra</span> —a seasoned{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>4 years</span> in the game, crafting sleek{' '}
        <span className='italic'>websites and apps</span>. Breathing life into
        projects, especially with the power of{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row gap-2 justify-center items-center px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          href='#contact'
          className='group flex bg-slate-900 text-slate-50 px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition'
        >
          Contact me here
          <MoveRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          className='group flex bg-slate-50 text-slate-900 px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-100 active:scale-105 transition borderSlate dark:bg-slate-50/10 dark:text-slate-50/60'
          href='/Ezra Mollena.pdf'
          download
        >
          Download CV
          <Download className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='flex bg-slate-50 text-slate-800 p-4 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  hover:bg-slate-100  hover:text-slate-950 active:scale-105 transition borderSlate dark:bg-slate-50/10 dark:text-slate-50/60'
          href='https://github.com/ezraamos'
          target='_blank'
        >
          <GithubIcon />
        </a>

        <a
          className='flex bg-slate-50 text-slate-800 p-4 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-100 hover:text-slate-950 active:scale-105 transition borderSlate dark:bg-slate-50/10 dark:text-slate-50/60'
          href='https://www.linkedin.com/in/ezra-mollena-8375081b9'
          target='_blank'
        >
          <LinkedinIcon />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
