'use client';

import { Button } from '@/components/ui/button';
import DevTypes from './dev-types';


export default function Intro() {
  const onClick = () => {
    const section = document.getElementById('devTypes');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id='section' className='pt-10 h-full'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center'>
            Introduction to Web Development
          </h1>
          <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center'>
            Lesson 1: Overview of Web Development
          </h2>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
            Welcome to the exciting world of web development! In today&apos;s
            digital age, the internet has become an indispensable part of our
            lives, serving as a platform for communication, commerce,
            entertainment, and much more. At the heart of this digital ecosystem
            lies web development, the process of creating and maintaining
            websites and web applications. So what is web development?
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
            What is Web Development?
          </h3>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
            Web development refers to the process of creating websites and web
            applications. This includes everything from building simple static
            pages to complex web-based applications, social network services,
            e-commerce sites, and more. From HTML and CSS for structuring and
            styling web pages, to JavaScript and its numerous libraries and
            frameworks for adding interactivity and functionality, there&apos;s
            no shortage of tools and technologies to explore in the world of web
            development. So, whether you&apos;re a seasoned pro or just starting
            out, join us as we dive into the exciting journey of web
            development!
          </p>
        </div>
        <Button variant={'link'} onClick={onClick}>Next Lesson</Button>
      </div>
      <div className='pt-5'>
        <DevTypes />
      </div>
    </section>
  );
}
