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

interface ModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Modal = ({ title, description, children }: ModalProps) => {
  return (
    <Dialog>
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
            <Link href='/development'>Learn more</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
