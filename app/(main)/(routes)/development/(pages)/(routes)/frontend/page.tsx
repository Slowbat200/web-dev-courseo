'use client'; 

import { useRouter } from 'next/navigation';

const Frontend = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full '>
      <div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none pl-5 text-center'>
          Front-end development
        </h1>
      </div>
      <div className='mt-5 mx-3'>
        <p className='text-muted-foreground text-sm mt-3 px-2 text-justify'>
          Front-end is web visualization on client-side that means every change
          we made in code it will display to client. Front-end focuses on
          creating the user interface and user experience of a website or web
          application.{' '}
        </p>
      </div>
      <div className='mt-3 mx-2 flex flex-row'>
        <p className='text-sm text-muted-foreground mt-3 px-2 text-justify'>
          Imagine you are creating your virtual character. Every bone the
          character has, so in the Front-end we use the{' '}
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
export default Frontend;