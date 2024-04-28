'use client';

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
import { Separator } from '@/components/ui/separator';
import CssIcon from '@mui/icons-material/Css';
import SchoolIcon from '@mui/icons-material/School';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';

export default function Home() {
  return (
    <main className='h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative'>
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
      <div className=' max-w-[1500px] mx-auto w-full flex flex-col lg:flex-row flex-1 items-center gap-y-10 gap-x-10'>
        <div className='lg:w-[900px] w-full flex flex-col gap-y-10'>
          <div className='flex flex-col gap-y-2 mx-[3em]'>
            <h1 className='text-[22px] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
              {' '}
              Here you will find:
            </h1>
            <p className='px-2 lg:text-lg leading-7 text-justify [&:not(:first-child)]:mt-6 '>
              Theory about what is web development and how to create simple or
              modern websites. How to create websites yourself or using websites
              builders. How does the website work, what languages are used here
              and what frameworks are associated with languages.
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-8'>
            {/* Displays the main heading of the page */}
            <h1 className='text-xl lg:text-3xl font-bold text-neutral-200 max-w-[480px] text-center'>
              Learn, practice, and master new technologies.
            </h1>
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
                  <Button
                    size='lg'
                    variant='landing'
                    className='w-full'
                    asChild
                  >
                    <Link href='/learn'>Continue learning</Link>
                  </Button>
                </SignedIn>
              </ClerkLoaded>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-5  pr-0 sm:pr-[3em]'>
          {/** Creating box with introducing into Theory */}
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <SchoolIcon sx={{ fontSize: 40 }} className='text-[#0f0]' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              What is Front-end and Backend, protocols for communication with
              web, development environment for developers and much more.
            </p>
          </div>

          {/** Creating box with introducing into HTML */}

          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <HtmlIcon sx={{ fontSize: 50 }} className='text-orange-600' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              What is HTML, types of tags, HTML history and so much examples and
              code samples.
            </p>
          </div>

          {/** Creating box with introducing into CSS */}
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <CssIcon sx={{ fontSize: 50 }} className='text-blue-500' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              Why use Css, history of Css, information about preprocessor, Css
              usage in practice and many examples and code samples.
            </p>
          </div>

          {/** Creating box with introducing into JS */}
          <div className='flex gap-x-5 flex-row px-2 ml-0 sm:ml-[5em] py-3 w-[90%]'>
            <JavascriptIcon sx={{ fontSize: 50 }} className='text-yellow-500' />
            <p className='text-muted-foreground leading-7 [&:not(:first-child)]:mt-6'>
              How JavaScript works, what frameworks have been built and many
              more examples and code samples.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
