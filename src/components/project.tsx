'use client';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  appUrl,
}: ProjectProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.a
      href={appUrl}
      target='_blank'
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className=' bg-slate-100 max-w-[42rem] borderSlate overflow-hidden sm:pr-8 relative h-[20rem] group-even:flex group-even:justify-end hover:bg-slate-200 transition rounded-lg dark:bg-slate-50/10 dark:hover:bg-slate-50/20 dark:text-slate-50'>
        <div className='py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-slate-700 dark:text-slate-50/70'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-slate-950/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-slate-50 rounded-full dark:text-slate-50/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={'Personal Project'}
          width={800}
          height={800}
          quality={95}
          className='absolute hidden sm:block bottom-10 -right-40 w-[28.25rem] rounded-lg shadow-2xl 

        group-even:right-[initial] 
        group-even:-left-40 

        transition

        group-hover:scale-[1.04]
        group-hover:-translate-x-3 group-hover:translate-y-3 
        group-hover:-rotate-2

        group-hover:group-even:translate-x-3
        group-hover:group-even:rotate-2'
        />
      </section>
    </motion.a>
  );
};
export default Project;
