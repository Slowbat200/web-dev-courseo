'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Highlight } from '@/components/ui/hero-highlight';
import { Modal } from '@/components/ui/modal';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
        <div className='px-5 pt-10 flex flex-col gap-y-5'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>What can I learn here?</AccordionTrigger>
              <AccordionContent>
                In my courses you will find information about the language,
                information about the history of web languages, lots of code
                samples and explanations of how the code works. There will also
                be a sandbox where you can try out what you have learned during
                the course.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Can I get certificate here?</AccordionTrigger>
              <AccordionContent>
                Yes. In the final update, certificates will be added for all courses.  
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default LearnPage;
