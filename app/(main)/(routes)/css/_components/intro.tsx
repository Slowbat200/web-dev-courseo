'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Intro() {
  const router = useRouter();
  return (
    <div className='pr-5 pt-5'>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center'>
        Introduction to HTML
      </h1>
      <article>
        <p className='text-md pt-5 lg:text-lg xl:text-xl 2xl:text-2xl'>
          Welcome to the CSS course. I see you did well in previous two courses.
          So I hope you are ready for little bit styling. Yes I talking about
          CSS, here in this course I will try to teach you how to style your
          websites. Before we start let&apos;s have a quick overview of what
          this course is all about.
        </p>
      </article>
      <div className='flex justify-center items-center'>
        <div className=' w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center pt-5 mt-10'>
            What you find here?
          </h1>
          <article className='grid grid-cols-3 gap-x-5 gap-y-5 pt-10'>
            <span className='flex flex-col gap-y-5'>
              <p>
                In the beginning you will learn some basic information about
                HTML such as:
              </p>
              <ul className='pl-5 leading-relaxed'>
                <li className='list-decimal'>
                  <p>What is CSS?</p>
                </li>
                <li className='list-decimal'>
                  <p>CSS Syntax and how to link it to HTML.</p>
                </li>
                <li className='list-decimal'>
                  <p>Basic styling.</p>
                </li>
                <li className='list-decimal'>
                  <p>How to use box model?</p>
                </li>
                <li className='list-decimal'>
                  <p>Selectors, Combinators and so much more.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5'>
              <p>Then I&apos;ll tell you something more advanced.</p>
              <ul className='pl-5 leading-relaxed pt-5'>
                <li className='list-decimal'>
                  <p>Advanced Selectors.</p>
                </li>
                <li className='list-decimal'>
                  <p>Advanced Styling.</p>
                </li>
                <li className='list-decimal'>
                  <p>Responsive Design.</p>
                </li>
                <li className='list-decimal'>
                  <p>Flex box and Grid layout.</p>
                </li>
                <li className='list-decimal'>
                  <p>Typography and so much more.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5'>
              <p>
                And finally I&apos;ll show you some things for total experts.
                Such as:
              </p>
              <ul className='pl-5'>
                <li className='list-decimal leading-8'>
                  <p>Advanced Animations and Transitions.</p>
                </li>
                <li className='list-decimal'>
                  <p>CSS Architecture and Methodologies.</p>
                </li>
                <li className='list-decimal'>
                  <p>Preprocessors and frameworks.</p>
                </li>
                <li className='list-decimal'>
                  <p>Performance Optimization.</p>
                </li>
                <li className='list-decimal'>
                  <p>Advanced Responsive Design and so much more.</p>
                </li>
              </ul>
            </span>
          </article>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10 py-5'>
        <Button disabled variant={'outline'} onClick={() => router.push('section')}>
          Learn more
        </Button>
      </div>
    </div>
  );
}
