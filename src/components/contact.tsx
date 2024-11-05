'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import useSectionInView from '@/hooks/useSectionInView';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import SubmitBtn from './submit-button';

const Contact = () => {
  const { ref } = useSectionInView('Contact', 1);
  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading label='contact' />
      <p className='text-slate-700 -mt-6 dark:text-slate-300/80'>
        Please contact me directly at
        <a href='mailto:mollenaezra@gmail.com' className='underline mx-2'>
          mollenaezra@gmail.com
        </a>
        or through this form.
      </p>
      <form
        className='mt-10 flex flex-col dark:text-slate-950'
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
          }
          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 rounded-lg borderSlate px-4 dark:bg-slate-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          type='email'
          name='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          placeholder='Your message'
          name='message'
          required
          maxLength={500}
          className='borderSlate h-52 my-3 rounded-lg p-4 dark:bg-slate-50 dark:bg-opacity-80 dark:focus:bg-opacity-100
           transition-all dark:outline-none'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
