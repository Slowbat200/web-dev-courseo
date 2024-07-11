import Image from 'next/image';

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

type CardProps = {
  title: string;
  description: string;
  link: string;
};

export default function DevTypes() {
  return (
    <section id='devTypes'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center py-5'>
          Lesson 2: Types of Web development
        </h2>
        <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
          What is Front-end, Back-end and Full-stack development?
        </h3>
        <article>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify pb-8'>
            Web development refers to the process of creating websites and web
            applications. This includes everything from building simple static
            pages to complex web-based applications, social network services,
            and more. As a web developer, you will encounter three types of web
            development namely Front-end development, Back-end development and
            Full-stack development. But what do these terms actually mean?
          </p>
        </article>
      </div>
      <div>
        <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
          Front-end Development
        </h3>
        <article>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
            Frontend development focuses on the user interface and experience of
            a website or web application. It involves creating the visual
            elements that users interact with, such as buttons, forms, and
            navigation menus, using languages like HTML, CSS, and JavaScript.
          </p>
        </article>
        <Image
          src='/images/frontend.png'
          alt='Front-end Development'
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
          Back-end Development
        </h3>
        <article>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
            On the other hand, backend development deals with the
            behind-the-scenes functionality of a website. This includes managing
            databases, handling user authentication, and processing server
            requests. Backend developers typically work with server-side
            languages like Python, Ruby, or Node.js, along with frameworks such
            as Django, Ruby on Rails, or Express.
          </p>
        </article>
        <Image
          src='/images/backend.png'
          alt='Back-end Development'
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center lg:text-left'>
          Full-stack Development
        </h3>
        <article>
          <p className='text-lg lg:pr-5 px-5 lg:px-0 text-justify'>
            Finally, full-stack development combines both frontend and backend
            skills, allowing developers to work on all aspects of a project from
            start to finish. Full-stack developers have a broad range of
            expertise, enabling them to tackle diverse challenges and build
            robust, end-to-end solutions.
          </p>
        </article>
        <Image
          src='/images/fullstack.png'
          alt='Full-stack Development'
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col lg:flex-row gap-8 lg:pr-8 px-5 lg:px-0 py-5'>
        <IntroCard
          title='Front-end Development'
          description='Front-end development is the development of the user interface and user experience of a website or web application. It is the part of the website that is visible to the user.'
          link='/development/frontend'
        />
        <IntroCard
          title='Back-end Development'
          description='Back-end development is the development of the server-side of awebsite or web application. It is the part of the website thatis not visible to the user.'
          link='/development/backend'
        />
        <IntroCard
          title='Full-stack Development'
          description='Full-stack development is the development of both the front-endand back-end of a website or web application. It is the part ofthe website that is both visible to the user and not visible tothe user.'
          link='/development/fullstack'
        />
      </div>
      <article>
        <p className='text-lg lg:pr-5 px-5 pb-5 lg:px-0 text-justify'>
          Whether you&apos;re drawn to the visual creativity of frontend
          development, the problem-solving of backend development, or the
          versatility of full-stack development, there&apos;s a path in web
          development that&apos;s right for you.
        </p>
      </article>
    </section>
  );
}

export function IntroCard({ title, description, link }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Separator orientation='horizontal' className='mb-5' />
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>
          <Link href={link}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
