'use client';

import FireLoader from '@/components/loader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function Intro() {
  const [loading, setLoading] = useState(false); // Add loading state

  const loader = (e: any) => {
    e.preventDefault(); // Prevent the default link behavior
    setLoading(true);
    document.body.style.overflow = 'hidden'; // Disable overflow
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = ''; // Re-enable overflow
      window.location.href = e.target.href;
    }, 5000);
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
        {loading && (
          <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]'>
            <FireLoader loading={loading} size={50} />
          </div>
        )}
        <Button variant={'link'}>
          <Link href='/development/types' onClick={(e) => loader(e)}>
            Next lesson
          </Link>
        </Button>
      </div>
    </section>
  );
}
