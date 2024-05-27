'use client';

export default function Intro() {
  return (
    <section id='section' className='pt-10 h-screen'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center'>
            Introduction to Web Development
          </h1>
          <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center'>
            Lesson 1: Overview of Web Development
          </h2>
          <p className='text-lg'>
            Welcome to our beginner web development journey. In this lesson,
            we'll explore what web development is all about and the various
            roles involved in creating websites and web applications so what is
            web development?
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold'>
            What is Web Development?
          </h3>
          <p className='text-lg'>
            Web development refers to the process of creating websites and web
            applications. This includes everything from building simple static
            pages to complex web-based applications, social network services,
            and more.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold'>
            Types of Web Development?
          </h3>
          <p className='text-lg'>
            Web development refers to the process of creating websites and web
            applications. This includes everything from building simple static
            pages to complex web-based applications, social network services,
            and more.
          </p>
        </div>
      </div>
    </section>
  );
}
