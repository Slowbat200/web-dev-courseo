'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import Modal from '@/components/ui/modal';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import logo from '@/public/assets/logo.svg';

import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdOutlineWeb } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';

import { useRouter } from 'next/navigation';
import { UserButton } from '@/features/auth/components/user-button';
import { ThemeToggle } from '@/components/theme-toggle';
import { FireLoader } from '@/components/loader';
import Link from 'next/link';
import { useWebId } from '@/hooks/use-web-id';

export default function Home() {
  const router = useRouter();
  const webDevId = useWebId()

  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useLayoutEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  if (!mounted) {
    return null;
  }

  return (
    <main>
      {loading && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
          <FireLoader loading={loading} size={50} />
        </div>
      )}
      <div className='flex flex-row justify-end group gap-x-5 py-5 px-5 w-full h-fit bg-[#F8F9FA] dark:bg-[#101720] border-b relative'>
        <button>
          <Link href={'https://slowbat.vercel.app/'}>
            <Image
              src={logo}
              alt='Logo'
              width={50}
              height={50}
              className='relative right-[82em] fill-white'
            />
          </Link>
        </button>
        <UserButton />
        <ThemeToggle />
      </div>
      <section
        className='flex flex-col justify-center items-center bg-[#F8F9FA] dark:bg-[#101720] h-[calc(100vh-100px)]'
        id='header'
      >
        <h1 className='lg:text-6xl text-3xl font-extrabold text-center py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          Welcome to the courses home page
        </h1>
        <div className='flex lg:flex-row flex-col gap-x-5'>
          <article className='px-5 py-10 text-center text-sm md:text-md lg:text-lg xl:text-xl dark:text-[#f0f3ff] text-neutral-800'>
            <p>
              Let me introduce you. I&apos;m Slowbat and I will be your guide on
              this journey.
            </p>
            <p>
              Before we get started, let me tell you a few things to get you
              started.
            </p>
          </article>
          <Modal
            title='Basic information'
            description={[
              'There are Free and Paid courses.',
              'Free courses:',
              '- Web development',
              '- Html',
              '- Css',
              '- JavaScript',
              'Paid courses:',
              '- TailwindCSS',
              '- React',
              'At each course you can find information for all levels of knowledge',
            ].map((text, index) => (
              <p
                className='text-sm md:text-md lg:text-[18px] lg:leading-8 pl-2'
                key={index}
              >
                {text}
              </p>
            ))}
          />
        </div>
      </section>
      <section
        id='featured'
        className='pt-10 max-h-2xl bg-[#F8F9FA] dark:bg-[#101720]'
      >
        <div className='pt-5 px-5'>
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center dark:text-[#F0F3FF] text-neutral-800'>
            What you can find here
          </h2>
          <p className='text-sm md:text-md lg:text-lg dark:text-[#F0F3FF] text-neutral-800 mt-5'>
            In all courses, you&apos;ll find basic information about a
            particular language, sections of code explaining how the code works,
            and some information that others probably won&apos;t tell you.{' '}
          </p>
        </div>
        <div className='grid grid-cols-1 grid-flow-row gap-y-10 gap-x-10 lg:grid-cols-2 xl:grid-cols-3 mt-10 mx-10'>
          <BackgroundGradient className='rounded-[22px] max-w-md min-w-fit lg:h-full p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <MdOutlineWeb size={40} className='text-[#0f0]' />

            <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
              Web development
            </p>

            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              What is Front-end and Backend, protocols for communication with
              web, development environment for developers and much more.
            </p>
            <Button
              onClick={() => router.push(`/courses/web-dev/${webDevId}`)}
              variant='price_button'
            >
              <span>Enroll now </span>
              <span className='bg-[#00d8ff] rounded-full text-[0.75rem] px-3 py-1 text-white dark:bg-[#00dd]'>
                Free
              </span>
            </Button>
          </BackgroundGradient>

          <BackgroundGradient className='rounded-[22px] max-w-md min-w-fit lg:h-full p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <FaHtml5 size={40} className='text-orange-600' />

            <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
              HTML
            </p>

            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Learn the basics of HTML, including tags, attributes, and semantic
              meaning. Learn the history of HTML. Explore advanced topics such
              as multimedia, forms, and tables.
            </p>
            <Button
              onClick={() => router.replace('/courses/html')}
              variant='price_button'
            >
              <span>Enroll now </span>
              <span className='bg-[#00d8ff] rounded-full text-[0.75rem] px-3 py-1 text-white dark:bg-[#00dd]'>
                Free
              </span>
            </Button>
          </BackgroundGradient>

          <BackgroundGradient className='rounded-[22px] max-w-md min-w-fit lg:h-full p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <FaCss3Alt size={40} className='text-blue-600' />
            <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
              CSS
            </p>

            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Why you should use Css, history of Css, information about
              preprocessor, Css usage in practice and many examples and code
              samples.
            </p>
            <Button
              onClick={() => router.replace('/courses/css')}
              variant='price_button'
            >
              <span>Enroll now </span>
              <span className='bg-[#00d8ff] rounded-full text-[0.75rem] px-3 py-1 text-white dark:bg-[#00dd]'>
                Free
              </span>
            </Button>
          </BackgroundGradient>

          <BackgroundGradient className='rounded-[22px] max-w-md min-w-full lg:h-full p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <IoLogoJavascript size={40} className='text-yellow-300' />
            <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
              JavaScript
            </p>

            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              How JavaScript works, what frameworks and libraries have been
              built and many more examples and code samples.
            </p>
            <Button
              onClick={() => router.replace('/courses/js')}
              variant='price_button'
            >
              <span>Enroll now </span>
              <span className='bg-[#00d8ff] rounded-full text-[0.75rem] px-3 py-1 text-white dark:bg-[#00dd]'>
                Free
              </span>
            </Button>
          </BackgroundGradient>

          <BackgroundGradient className='rounded-[22px] max-w-md min-w-full lg:h-full p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <RiTailwindCssFill size={40} className='text-[#38BDF8]' />
            <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
              Tailwind CSS
            </p>

            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Introduction of the modern and popular css framework Tailwindcss
              and how to use it for styling your components.
            </p>
            {/* TODO: add stripe redirection */}
            <Button onClick={() => {}} variant='price_button'>
              <span>Enroll now </span>
              <span className='bg-[#00d8ff] rounded-full text-[0.75rem] px-3 py-1 text-white dark:bg-[#00dd]'>
                $44
              </span>
            </Button>
          </BackgroundGradient>

          <BackgroundGradient className='rounded-[22px] max-w-md min-w-fit lg:h-full p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <FaReact size={40} className='text-sky-300' />
            <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
              React js
            </p>

            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              What is difference between React and Javascript, examples of most
              popular frameworks and many more examples and code samples.
            </p>
            {/* TODO: add stripe redirection */}
            <Button
              onClick={() => router.replace('/courses/react')}
              variant='price_button'
            >
              <span>Enroll now </span>
              <span className='bg-[#00d8ff] rounded-full text-[0.75rem] px-3 py-1 text-white dark:bg-[#00dd]'>
                $44
              </span>
            </Button>
          </BackgroundGradient>
        </div>
      </section>
    </main>
  );
}
