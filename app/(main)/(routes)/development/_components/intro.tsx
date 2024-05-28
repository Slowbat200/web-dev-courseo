'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Intro() {
  const router = useRouter();
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
            Welcome to our beginner web development journey. In this lesson,
            we&apos;ll explore what web development is all about and the various
            roles involved in creating websites and web applications so what is
            web development?
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
            and more.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
            Types of Web Development?
          </h3>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
            Web development refers to the process of creating websites and web
            applications. This includes everything from building simple static
            pages to complex web-based applications, social network services,
            and more. As a web developer, you will encounter three types of web
            development namely Front-end development, Back-end development and
            Full-stack development. In this section I&apos;tell you just basic
            information about each type of web development, and under this
            section there are three tabs: Front-end development, Back-end
            development and Full-stack development. When you click on the button,
            you will be redirected to a page where you can learn more about these
            types of web development.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 lg:pr-8 px-5 lg:px-0 py-5'>
          <Card>
            <CardHeader>
              <CardTitle>Front-end development</CardTitle>
            </CardHeader>
            <Separator orientation='horizontal' className='mb-5' />
            <CardContent>
              <p>
                Front-end development is the development of the user interface
                and user experience of a website or web application. It is the
                part of the website that is visible to the user.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant='outline'>
                <Link href='/development/frontend'>Read more</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Back-end development</CardTitle>
            </CardHeader>
            <Separator orientation='horizontal' className='mb-5' />
            <CardContent>
              <p>
                Back-end development is the development of the server-side of a
                website or web application. It is the part of the website that
                is not visible to the user.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant='outline'>
                <Link href='/development/backend'>Read more</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Full-stack development</CardTitle>
            </CardHeader>
            <Separator orientation='horizontal' className='mb-5' />
            <CardContent>
              <p>
                Full-stack development is the development of both the front-end
                and back-end of a website or web application. It is the part of
                the website that is both visible to the user and not visible to
                the user.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant='outline'>
                <Link href='/development/fullstack'>Read more</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
