'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';

import { motion } from 'framer-motion';
import useSectionInView from '@/hooks/useSectionInView';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading label='my skills' />
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-slate-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-slate-50 borderSlate rounded-xl px-5 py-3 dark:bg-slate-50/10 dark:text-slate-50/80 '
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
