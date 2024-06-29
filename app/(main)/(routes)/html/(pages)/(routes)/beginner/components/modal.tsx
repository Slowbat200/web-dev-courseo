'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

interface HtmlModalProps {
  title: string;
  description: string;
  trigger: string;
}

export const HtmlModal = ({ title, description, trigger }: HtmlModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex justify-end items-end mr-10'>
          <Button variant='explanation' size='lg' className='ml-10'>
            {trigger}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
