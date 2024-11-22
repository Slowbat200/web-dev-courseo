'use client';

import { Button } from '@/components/ui/button';
import { AuthScreen } from '@/features/auth/components/auth-screen';
import { useState } from 'react';

const AuthPage = () => {
  const [showAuthScreen, setShowAuthScreen] = useState(false);

  const authButton = () => {
    setShowAuthScreen(true);
  };

  const closeAuthScreen = () => {
    setShowAuthScreen(false); // Close the AuthScreen
  };
  return (
    <main className='h-full lg:h-screen w-full dark:bg-[#08081a] bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative'>
      <div className='flex flex-col items-center justify-between p-16'>
        {/* Radial gradient for the container to give a faded look */}
        <h1 className='relative text-2xl md:text-5xl lg:text-6xl dark:text-[#F0F3FF] text-neutral-800 text-center font-sans font-bold'>
          Master Web Development Skills in Weeks
        </h1>
      </div>
      <div className=' max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row flex-1 items-center justify-center gap-y-10 gap-x-10'>
        <div className='lg:w-[900px] w-full flex flex-col gap-y-10'>
          <div className='flex flex-col gap-y-2 mx-[3em]'>
            <h1
              className='text-[22px] dark:text-[#F0F3FF] text-neutral-800
            md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center'
            >
              {' '}
              Here you will find:
            </h1>
            <p className='px-2 lg:text-lg leading-7 text-justify [&:not(:first-child)]:mt-6 dark:text-[#F0F3FF] text-neutral-800'>
              Theory about what is web development and how to create simple or
              modern websites. How to create websites yourself. How does the
              website work, what languages are used here and what frameworks are
              associated with languages.
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-8'>
            {/* Displays the main heading of the page */}
            <h1 className='text-xl lg:text-3xl font-bold dark:text-[#F0F3FF] text-neutral-800 max-w-[480px] text-center'>
              Learn, practice, and master new technologies.
            </h1>
            <div>
              <Button
                variant='landing'
                size='lg'
                className='w-full'
                onClick={authButton}
              >
                Get Started
              </Button>
            </div>
            {showAuthScreen && (
              <div
                onClick={closeAuthScreen}
                className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 ease-in-out'
              >
                <div className='transform transition-transform duration-300 ease-in-out scale-100 opacity-100' onClick={(e) => e.stopPropagation()}>
                  {' '}
                  <AuthScreen />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
