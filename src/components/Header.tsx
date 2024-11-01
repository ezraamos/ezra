'use client';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const activeSection = 'Home';
  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full flex justify-center'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <nav className='flex h-12 py-2  sm:h-[initial] sm:py-0'>
          <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map((link) => (
              <motion.li
                className='h-3/4 flex items-center justify-center relative'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                    {
                      'text-gray-950 dark:text-gray-200':
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  // onClick={() => {
                  //   setActiveSection(link.name);
                  //   setTimeOfLastClick(Date.now());
                  // }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className='bg-slate-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
