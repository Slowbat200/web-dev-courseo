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
import { cn } from '@/utils/cn';

interface DevModalProps {
  title: string;
  description: React.ReactNode[];
  trigger: string;
  children: React.ReactNode;
  className?: string;
}

export const DevModal = ({ title, description, trigger, children, className }: DevModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex justify-end items-end mr-10'>
          <Button variant='explanation' size='lg' className='ml-10'>
            {trigger}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className={cn(className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className='max-w-fit'>{description}</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
};
