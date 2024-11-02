'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const About = () => {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading label='about me' />
      <p className='mb-3 text-slate-900'>
        I graduated in <span className='font-medium'>Marine Engineering</span>{' '}
        and spent three years working overseas before discovering my passion for
        programming. What started as curiosity led me to a coding bootcamp and
        launched my career as a{' '}
        <span className='font-medium'>full-stack developer</span>. I{' '}
        <span className='underline'>love</span> the challenge and delayed
        gratification of debugging and problem-solving — there’s nothing quite
        like finding that fix.
      </p>

      <p className=' text-slate-900'>
        My tech stack includes{' '}
        <span className='font-medium '>
          React, Next.js, Node.js, MongoDB, PostgreSQL, TypeScript, Prisma,
          Drizzle
        </span>
        , and I’m skilled with <span className='font-medium'>AWS services</span>
        . <span className='italic'>When I’m not coding</span>, you can find me
        on the chessboard, playing tennis, hanging with my dogs, or
        experimenting in the kitchen.
      </p>
    </motion.section>
  );
};

export default About;
