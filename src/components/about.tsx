'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import useSectionInView from '@/hooks/useSectionInView';

const About = () => {
  const { ref } = useSectionInView('About', 0.7);
  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading label='about me' />
      <p className='mb-3 text-slate-900 dark:text-slate-100/80'>
        I graduated in <span className='font-medium'>Marine Engineering</span>{' '}
        and spent three years working overseas before discovering my passion for
        programming. What started as curiosity led me to a coding bootcamp and
        launched my career as a{' '}
        <span className='font-medium'>full-stack developer</span>. I{' '}
        <span className='underline'>love</span> the challenge and delayed
        gratification of debugging and problem-solving — there’s nothing quite
        like finding that fix.
      </p>

      <p className=' text-slate-900 dark:text-slate-100/80'>
        My tech stack includes{' '}
        <span className='font-medium '>
          React, Next.js, Node.js, MongoDB, PostgreSQL, TypeScript, Prisma,
          Drizzle
        </span>
        , along with practical experience using{' '}
        <span className='font-medium'>AWS services</span>.{' '}
        <span className='italic'>When I’m AFK</span>, I'm likely on the tennis
        court, at the chessboard, spending time with my dogs, or trying out new
        recipes in the kitchen.
      </p>
    </motion.section>
  );
};

export default About;
