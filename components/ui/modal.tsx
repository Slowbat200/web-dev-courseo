'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './button';
import Link from 'next/link';
import { useState } from 'react';
import FireLoader from '../loader';

interface ModalProps {
  title: string;
  description: React.ReactNode[];
}

export const Modal = ({ title, description }: ModalProps) => {
  const [loading, setLoading] = useState(false);

  const loader = (e: any) => {
    e.preventDefault();
    setLoading(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      window.location.href = e.target.href
    }, 3000)
  };
  return (
    <Dialog>
          {loading && (
            <div
            className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999]"
           >
            <FireLoader loading={loading} size={50}/>
           </div>
          )}
      <DialogTrigger asChild>
        <Button variant='modal' size='lg' className='ml-10'>
          Click here
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        <DialogFooter>
          <Button variant='link' size='lg'>
            <Link href='/development' onClick={(e) =>  loader(e)}>Learn more</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
