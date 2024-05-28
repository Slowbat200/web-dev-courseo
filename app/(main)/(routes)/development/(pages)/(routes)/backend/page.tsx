'use client';

import { useRouter } from 'next/navigation';

const Backend = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full '>
      <div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none pl-5 text-center'>
          Backend development
        </h1>
      </div>
      <div className='mt-5 mx-3'>
        <p className='text-muted-foreground text-sm mt-3 px-2 text-justify'>
          Backend is web visualization on server-side. Backend, focuses on
          building the server-side logic and infrastucture that powers web
          aplplication.While front-end development deals with what users see and
          interact with on the client side, backend development manages the
          behind-the-scenes processes that enable the functionality, data
          storage, and communication between the client and server.{' '}
        </p>
      </div>
      <div className='mt-3 mx-2 flex flex-row'>
        <p className='text-sm text-muted-foreground mt-3 px-2 text-justify'>
          Imagine you are creating your virtual character. Every bone the
          character has, so in the Backend we use the{' '}
          <button
            onClick={() => router.push('/html')}
            className='font-bold text-white'
          >
            HTML
          </button>{' '}
          for that, you can choose the color of your character,{' '}
          <button
            onClick={() => router.push('/css')}
            className='font-bold text-white'
          >
            CSS
          </button>{' '}
          takes care of that and of course you can move your character and
          that&apos;s{' '}
          <button
            onClick={() => router.push('/javascript')}
            className='font-bold text-white'
          >
            JavaScript
          </button>
          .
        </p>
      </div>
    </div>
  );
};

export default Backend;
