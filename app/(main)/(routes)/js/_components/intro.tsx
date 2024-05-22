'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Intro() {
  const router = useRouter();
  return (
    <div className='pr-5'>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-5'>
        Introduction to JavaScript
      </h1>
      <article>
        <p className='text-md pt-5 lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed pl-5 lg:pl-0 text-justify'>
          Welcome to the JavaScript course. I hope you liked the previouse
          course. So before we start let&apos;s have a quick overview of what
          this course is all about.
        </p>
      </article>
      <div className='flex justify-center items-center'>
        <div className=' w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center pt-5 mt-10'>
            What you find here?
          </h1>
          <article className='grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 pt-10'>
            <span className='flex flex-col gap-y-5 lg:pl-0 pl-8'>
              <p>
                In the beginning you will learn some basic information about
                HTML such as:
              </p>
              <ul className='pl-5 leading-relaxed'>
                <li className='list-decimal'>
                  <p>What is JavaScript and how to set up the environment?</p>
                </li>
                <li className='list-decimal'>
                  <p>History and Evolution of JavaScript?</p>
                </li>
                <li className='list-decimal'>
                  <p>Basic syntax and fundamentals?</p>
                </li>
                <li className='list-decimal'>
                  <p>Basic DOM manipulation?</p>
                </li>
                <li className='list-decimal'>
                  <p>Functions, arrays and so much more.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5 lg:pl-0 pl-8 pt-5 lg:pt-0'>
              <p>Then I&apos;ll tell you something more advanced.</p>
              <ul className='pl-5 leading-relaxed'>
                <li className='list-decimal'>
                  <p>Advanced Functions.</p>
                </li>
                <li className='list-decimal'>
                  <p>Object-Oriented Programming.</p>
                </li>
                <li className='list-decimal'>
                  <p>Asynchronous JavaScript.</p>
                </li>
                <li className='list-decimal'>
                  <p>Web APIs.</p>
                </li>
                <li className='list-decimal'>
                  <p>Error Handling and Debugging and so much more.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5 lg:pl-0 pl-8 pt-5 lg:pt-0'>
              <p>
                And finally I&apos;ll show you some things for total experts.
                Such as:
              </p>
              <ul className='pl-5'>
                <li className='list-decimal leading-8'>
                  <p>Advanced Object-Oriented Programming.</p>
                </li>
                <li className='list-decimal'>
                  <p>Advanced Asynchronous Programming.</p>
                </li>
                <li className='list-decimal'>
                  <p>Advanced Web APIs.</p>
                </li>
                <li className='list-decimal'>
                  <p>JavaScript in Modern Libraries and Frameworks.</p>
                </li>
                <li className='list-decimal'>
                  <p> Security, Testing, Best Practices and so much more.</p>
                </li>
              </ul>
            </span>
          </article>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10 py-5'>
        <Button disabled variant={'outline'} onClick={() => router.push('section')}>
          Lets jump into it
        </Button>
      </div>
    </div>
  );
}
