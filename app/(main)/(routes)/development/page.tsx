'use client'

import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Intro from './(pages)/(routes)/intro';

const Development = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  const onClick = () => {
    const section = document.getElementById('section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section>
    <div className='container'>
      <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center py-5 font-bold'>
        Introduction to Development
      </h1>
      <p className='text-md pt-5 lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed lg:pr-5 pr-0 text-justify'>
        Hello {user.fullName || user.username} welcome to the development
        section, where you can learn how websites works, what is the
        difference between frontend and backend, which protocols are important
        for web development, and more.
      </p>
    </div>
    <div className='flex justify-center items-center'>
      <div className=' w-full'>
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center pt-5 mt-10'>
          What you find here?
        </h1>
        <article className='grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 pt-10'>
          <span className='flex flex-col gap-y-5 px-5 lg:px-0'>
            <p>
              In the beginning you will learn some basic information about Web
              development such as:
            </p>
            <ul className='pl-5 leading-relaxed'>
              <li className='list-decimal'>
                <p>Introduction to Web Development?</p>
              </li>
              <li className='list-decimal'>
                <p>
                  What is Frontend, Backend and <br /> Fullstack development?
                </p>
              </li>
              <li className='list-decimal'>
                <p>Which Web Development Tools you should use?</p>
              </li>
              <li className='list-decimal'>
                <p>Basic Frontend Frameworks.</p>
              </li>
              <li className='list-decimal'>
                <p>Version Control with Git and so much more.</p>
              </li>
            </ul>
          </span>
          <span className='flex flex-col gap-y-5 px-5 pt-5 lg:px-0 lg:pt-0'>
            <p>Then I&apos;ll tell you something more advanced.</p>
            <ul className='pl-5 leading-relaxed '>
              <li className='list-decimal'>
                <p>Front-End Frameworks.</p>
              </li>
              <li className='list-decimal'>
                <p>Backend Development.</p>
              </li>
              <li className='list-decimal'>
                <p>Build Tools and Package Managers.</p>
              </li>
              <li className='list-decimal'>
                <p>APIs.</p>
              </li>
              <li className='list-decimal'>
                <p>Responsive Design and Accessibility.</p>
              </li>
            </ul>
          </span>
          <span className='flex flex-col gap-y-5 px-5 pt-5 lg:px-0 lg:pt-0 lg:pr-2 pr-0'>
            <p>
              And finally I&apos;ll show you some things for total experts.
              Such as:
            </p>
            <ul className='pl-5'>
              <li className='list-decimal leading-8'>
                <p>Advanced Backend Development.</p>
              </li>
              <li className='list-decimal'>
                <p>DevOps and Deployment.</p>
              </li>
              <li className='list-decimal'>
                <p>Performance Optimization.</p>
              </li>
              <li className='list-decimal'>
                <p>Progressive Web Apps (PWAs).</p>
              </li>
              <li className='list-decimal'>
                <p>Testing and Quality Assurance and so much more.</p>
              </li>
            </ul>
          </span>
        </article>
      </div>
    </div>
    <div className='flex justify-center items-center mt-10 pb-5'>
      <Button
      
        variant='outline'
        onClick={onClick}
      >
        Lets roll
      </Button>
    </div>
    <div className='pt-5'>
      <Intro />
    </div>
  </section>
  );
};

export default Development;
