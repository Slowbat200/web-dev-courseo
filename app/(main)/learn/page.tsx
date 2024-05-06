'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Highlight } from '@/components/ui/hero-highlight';
import { Modal } from '@/components/ui/modal';

import CssIcon from '@mui/icons-material/Css';
import SchoolIcon from '@mui/icons-material/School';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';

const LearnPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <main>
      <section id='header'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='relative text-2xl md:text-5xl lg:text-6xl text-center font-sans font-bold pt-8'
        >
          Welcome {user.username || user.fullName}
        </motion.h1>
        <aside className='px-5 py-10 text-sm md:text-md lg:text-lg xl:text-xl'>
          <p>
            Let me introduce you. I&apos;m <Highlight>Slowbat</Highlight> and I
            will be your guide on this journey.
          </p>
          <p>
            Before we get started, let me tell you a few things to get you
            started.
          </p>
        </aside>

        <Modal
          title='Basic information'
          description='So first things first, there are four free courses. 
          They are Web development, Html, Css and JavaScript. 
          Then there are courses that are paid. They are TailwindCSS, React and Next.js. 
          In each course you can find informations for begginers, intermediates and proffesionals.'
        />
      </section>
      <section id='more-info'>
        <div className='pt-5 px-5'>
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>
            What you can find here
          </h2>
          <p className='text-sm md:text-md lg:text-lg'>
            In the free courses, you&apos;ll find basic information about a
            particular language, sections of code explaining how the code works,
            and some information that others probably won&apos;t tell you.{' '}
          </p>
        </div>
        <div className='flex flex-col gap-y-5 mt-5 mx-5 lg:mr-12'>
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
      </section>
    </main>
  );
};

export default LearnPage;
