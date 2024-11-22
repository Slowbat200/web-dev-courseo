'use client';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { Input } from '@/components/ui/aceternity-input';

import { SignFlow } from '../types';
import { useAuthActions } from '@convex-dev/auth/react';

interface SignUpCardProps {
  setState: (state: SignFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const {signIn} = useAuthActions()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setPending(true);
    signIn('password', { name, email, password, flow: 'signUp' })
      .catch(() => {
        setError('Error signing up');
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderSignUp = (value: 'github' | 'google') => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black space-y-2.5'>
      <h2 className='font-bold text-neutral-800 dark:text-neutral-200 text-2xl leading-none tracking-tight'>
        Sign Up to continue
      </h2>
      <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Use your email or another service to continue
      </p>
      {!!error && (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
          <TriangleAlert className='size-4' />
          <p>{error}</p>
        </div>
      )}
      <form className='my-8' onSubmit={onPasswordSignUp}>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <LabelInputContainer>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='fullname'
              placeholder='John Doe'
              type='text'
              disabled={pending}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            placeholder='johndoe@gmail.com'
            type='email'
            disabled={pending}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            placeholder='••••••••'
            type='password'
            disabled={pending}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id='password'
            placeholder='••••••••'
            type='password'
            disabled={pending}
            required
          />
        </LabelInputContainer>
        <Button type='submit' className='w-full' size='lg' disabled={pending}>
          Continue
        </Button>
      </form>
      <Separator />
      <div className='flex flex-col gap-y-2.5'>
        <Button
          type='submit'
          variant='signUp'
          size='lg'
          disabled={pending}
          onClick={() => handleProviderSignUp('google')}
        >
          <FcGoogle className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
          <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
          Continue with Google
          </span>
          <BottomGradient />
        </Button>

        <Button
          type='submit'
          variant='signUp'
          size='lg'
          disabled={pending}
          onClick={() => handleProviderSignUp('github')}
        >
          <FaGithub className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
          <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
            Continue with Github{' '}
          </span>
          <BottomGradient />
        </Button>
      </div>
      <p className='text-xs text-muted-foreground'>
        Already have an account?{' '}
        <span
          onClick={() => setState('signIn')}
          className='text-sky-700 hover:underline cursor-pointer'
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
