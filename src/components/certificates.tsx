'use client';
import useSectionInView from '@/hooks/useSectionInView';
import SectionHeading from './section-heading';
import { certificatesData } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Certificates = () => {
  const { ref } = useSectionInView('Certificates');
  return (
    <motion.section
      ref={ref}
      id='certificates'
      className='mb-28 scroll-mt-28  sm:mb-40'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <SectionHeading label='certificates / awards' />
      <ul className='flex flex-col sm:flex-row justify-center gap-8 items-center'>
        {certificatesData.map(({ name, imageUrl, certUrl }, index) => (
          <li key={index}>
            {certUrl ? (
              <a href={certUrl} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={imageUrl}
                  alt='aws saa certificate'
                  height={200}
                  width={200}
                />
              </a>
            ) : (
              <Image
                key={index}
                src={imageUrl}
                alt={name}
                height={200}
                width={300}
                className='shadow-lg rounded-lg'
              />
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Certificates;
