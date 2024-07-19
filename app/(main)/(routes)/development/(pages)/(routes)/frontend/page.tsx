'use client';

import { useRouter } from 'next/navigation';

export default function Frontend() {
  return (
    <div className='w-full h-[100vh] '>
      <div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none lg:pl-5 text-center py-5'>
          Chapter 2: <br /> Front-end development
        </h1>
        <h2 className='text-xl pt-5 lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center'>
          Lesson 1: <br /> What is Front-end Development
        </h2>
      </div>
      <div className='mt-5 mx-3'>
        <p className='text-muted-foreground dark:text-white text-sm mt-3 px-2 text-justify'>
          Front-end is web visualization on client-side that means every change
          we made in code it will display to client. Front-end focuses on
          creating the user interface and user experience of a website or web
          application.{' '}
        </p>
      </div>
      <div className='mt-3 mx-2'>
        <p className='text-sm text-muted-foreground dark:text-white mt-3 px-2 text-justify'>
          Imagine you are creating your virtual character. Every bone the
          character has, so in the Front-end we use the HTML (Hypertext Markup
          Language) which is used for structuring and organizing content on the
          web. It is the backbone of a website, providing the structure and
          content that the web browser renders to the user.
        </p>
        <br />
        <p className='text-sm text-muted-foreground dark:text-white px-2 text-justify'>
          CSS (Cascading Style Sheets) is used for styling and layout. It is
          responsible for the visual aspects of a website, including colors,
          fonts, and layout.
        </p>
        <br />
        <p className='text-sm text-muted-foreground dark:text-white px-2 text-justify'>
          JavaScript is a programming language used for adding interactivity to
          a website. It allows developers to create dynamic effects, animate
          images, and respond to user interactions.
        </p>
      </div>
    </div>
  );
}
