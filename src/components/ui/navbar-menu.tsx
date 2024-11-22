'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 300,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='bg-white dark:bg-[#0b1215] backdrop-blur-xl rounded-2xl overflow-hidden border border-[#FF6EC7] dark:border-[#0096FF] shadow-xl'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='w-max h-full p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='relative rounded-full border border-transparent bg-transparent backdrop-blur-xl dark:border-[#00FFFF]  shadow-input flex justify-center space-x-8 px-8 py-6 '
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className='text-[#333333] dark:text-neutral-200 hover:dark:text-black hover:bg-[#FF6EC7] dark:hover:bg-[#00FFFF] p-[0.5em] rounded-lg transition delay-150 duration-300 ease-out'
    >
      {children}
    </Link>
  );
};
