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
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ModalProps {
  title: string;
  description: React.ReactNode[];
}

export default function Modal({ title, description }: ModalProps) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLinking = () => {
    const element = document.getElementById('featured');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('#featured');
    }
    closeModal();
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className='flex justify-center items-center'>
          <Button variant='modal' size='lg' onClick={() => setIsOpen(true)}>
            Click here
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className='bg-neutral-800'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-secodary dark:text-muted-foreground'>{description}</DialogDescription>
        <DialogFooter>
          <Button onClick={handleLinking} variant='link' size='lg'>
            Learn more
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
