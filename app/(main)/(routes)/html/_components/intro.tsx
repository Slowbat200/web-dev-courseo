'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import BegginerPage from '../(pages)/(routes)/beginner/page';

export default function Intro() {
  const router = useRouter();
  const onClick = () => {
    const section = document.getElementById('section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='pr-5'>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center'>
        Introduction to HTML
      </h1>
      <article>
        <p className='text-md pt-5 lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed pl-5 lg:px-0 text-justify'>
          Welcome to the HTML course. I hope you liked the previouse course. So
          before we start let&apos;s have a quick overview of what this course
          is all about.
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
                  <p>What is HTML and how does it work?</p>
                </li>
                <li className='list-decimal'>
                  <p>History and Evolution of HTML?</p>
                </li>
                <li className='list-decimal'>
                  <p>Overview of HTML5?</p>
                </li>
                <li className='list-decimal'>
                  <p>Basic HTML structure?</p>
                </li>
                <li className='list-decimal'>
                  <p>Introduction to HTML tags and so much more.</p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5 lg:pl-0 pl-8 pt-5 lg:pt-0'>
              <p>Then I&apos;ll tell you something more advanced.</p>
              <ul className='pl-5 leading-relaxed'>
                <li className='list-decimal'>
                  <p>HTML5 Semantic Elements.</p>
                </li>
                <li className='list-decimal'>
                  <p>HTML5 Form Elements and Validation.</p>
                </li>
                <li className='list-decimal'>
                  <p>HTML5 Multimedia and Embedding.</p>
                </li>
                <li className='list-decimal'>
                  <p>HTML5 APIs.</p>
                </li>
                <li className='list-decimal'>
                  <p>
                    Responsive design and SEO Best Practices and so much more.
                  </p>
                </li>
              </ul>
            </span>
            <span className='flex flex-col gap-y-5 lg:pl-0 lg:pt-0 pl-8 pt-5'>
              <p>
                And finally I&apos;ll show you some things for total experts.
                Such as:
              </p>
              <ul className='pl-5'>
                <li className='list-decimal leading-8'>
                  <p>Progressive Web Apps (PWAs).</p>
                </li>
                <li className='list-decimal'>
                  <p>Advanced HTML5 APIs.</p>
                </li>
                <li className='list-decimal'>
                  <p>Custom Elements and Shadow DOM.</p>
                </li>
                <li className='list-decimal'>
                  <p>HTML and JavaScript Integration.</p>
                </li>
                <li className='list-decimal'>
                  <p>Performance Optimization and so much more.</p>
                </li>
              </ul>
            </span>
          </article>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10 pt-5'>
        <Button variant={'outline'} onClick={onClick}>
          Lets Begin
        </Button>
      </div>
      <div className='pt-16'>
        <BegginerPage />
      </div>
    </div>
  );
}
