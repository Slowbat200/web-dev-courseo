'use client';

import FireLoader from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const loader = (e: any) => {
    e.preventDefault()
    setLoading(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      window.location.href = e.target.href;
    }, 3000);
  };

  return (
    <main className='h-fill lg:h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative'>
      <div className='flex flex-col items-center justify-between p-16'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]'></div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='relative text-2xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold'
        >
          Web Development Course
        </motion.h1>
      </div>
      <div className=' max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row flex-1 items-center justify-center gap-y-10 gap-x-10'>
        <div className='lg:w-[900px] w-full flex flex-col gap-y-10'>
          <div className='flex flex-col gap-y-2 mx-[3em]'>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className='text-[22px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center'
            >
              {' '}
              Here you will find:
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                easeIn: [0, 0.83, 0.2, 1.01],
              }}
              className='px-2 lg:text-lg leading-7 text-justify [&:not(:first-child)]:mt-6 '
            >
              Theory about what is web development and how to create simple or
              modern websites. How to create websites yourself or using websites
              builders. How does the website work, what languages are used here
              and what frameworks are associated with languages.
            </motion.p>
          </div>
          <div className='flex flex-col items-center gap-y-8'>
            {/* Displays the main heading of the page */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                easeInOut: 'easeInOut',
              }}
              className='text-xl lg:text-3xl font-bold dark:text-neutral-200 text-neutral-800 max-w-[480px] text-center'
            >
              Learn, practice, and master new technologies.
            </motion.h1>
            {/* Displays a loader while Clerk is loading */}
            <div className='flex flex-col items-center gap-y-3 max-w-[330px] w-full'>
              <ClerkLoading>
                <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
              </ClerkLoading>
              {/* Displays the sign-in/sign-up form or a button to continue learning if the user is already signed in */}
              <ClerkLoaded>
                <SignedOut>
                  {/* Sign-up button with a modal and redirection to /learn after sign-up */}
                  <SignUpButton
                    mode='modal'
                    afterSignInUrl='/learn'
                    afterSignUpUrl='/learn'
                  >
                    <Button size='lg' variant='secondary' className='w-full'>
                      Get Started
                    </Button>
                  </SignUpButton>
                  {/* Sign-in button with a modal and redirection to /learn after sign-in */}
                  <SignInButton
                    mode='modal'
                    afterSignInUrl='/learn'
                    afterSignUpUrl='/learn'
                  >
                    <Button size='lg' variant='secondary' className='w-full'>
                      I already have an account
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  {/* Button to continue learning if the user is already signed in */}
                  {loading && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
                      <FireLoader loading={loading} size={50} />
                    </div>
                  )}
                  <Button
                    size='lg'
                    variant='landing'
                    className='w-full'
                    asChild
                  >
                    <Link href='/learn' onClick={(e) => loader(e)}>
                      Continue learning
                    </Link>
                  </Button>
                </SignedIn>
              </ClerkLoaded>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
