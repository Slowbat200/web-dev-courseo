'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Highlight } from '@/components/ui/hero-highlight';
import { Modal } from '@/components/ui/modal';
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
          description='So first things first, there are four free courses. They are Web development, Html, Css and JavaScript. Then there are courses that are paid. They are TailwindCSS, React and Next.js.'
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
        <div className='px-5 pt-10 bg-blue-500 flex flex-col gap-y-5'>
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            In HTML you can find:
          </h2>
          <div className='bg-red-500'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At est
              ipsa ullam vel voluptatum alias neque veniam incidunt eum amet
              suscipit deserunt quas consequatur tempora, totam ratione nisi?
              Tempore, nam?
            </p>
          </div>
          <div className='bg-green-500'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At est
              ipsa ullam vel voluptatum alias neque veniam incidunt eum amet
              suscipit deserunt quas consequatur tempora, totam ratione nisi?
              Tempore, nam?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearnPage;
