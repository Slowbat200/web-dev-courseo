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
import { Label } from '@/components/ui/label';

interface SignUpCardProps {
  setState: (state: SignFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();

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
    <div className='flex h-screen w-screen '>
      {/* Left side */}
      <div className='w-1/2 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center p-8'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
          Welcome User
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400'>
          Sign up to your account to start learning.
        </p>
      </div>
      {/* Right side */}
      <div className='w-1/2 bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-8'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
            Sign Up
          </h2>
          <p className='text-sm text-gray-600 dark:text-gray-400 mb-6'>
            Use your email or other service to continue.
          </p>
          {!!error && (
            <div className='bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-600 mb-6'>
              <TriangleAlert className='w-5 h-5' />
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={onPasswordSignUp} className='space-y-4'>
            <div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id='fullname'
                placeholder='John Doe'
                type='text'
                disabled={pending}
                required
              />
            </div>
            <div>
              <Label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 pb-3'
              >
                Email
              </Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                placeholder='johndoe@gmail.com'
                type='email'
                disabled={pending}
                required
              />
              <div>
                <Label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 pt-5 pb-3'
                >
                  Password
                </Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  placeholder='••••••••'
                  type='password'
                  disabled={pending}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 pt-5 pb-3'
                >
                  Confirm Password
                </Label>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id='password'
                  placeholder='••••••••'
                  type='password'
                  disabled={pending}
                  required
                />
              </div>
              <Button
                type='submit'
                className='w-full mt-10'
                size='lg'
                disabled={pending}
              >
                Continue
              </Button>
            </div>
          </form>
          <Separator className='my-6' />
          <div className='flex flex-row gap-x-4'>
            <Button
              disabled={pending}
              onClick={() => handleProviderSignUp('google')}
              variant='outline'
              size='lg'
              className='w-fit relative'
            >
              <FcGoogle className='w-7 h-7' />
            </Button>
            <Button
              disabled={pending}
              onClick={() => handleProviderSignUp('github')}
              variant='outline'
              size='lg'
              className='w-fit relative'
            >
              <FaGithub className='w-7 h-7 rounded-full' />
            </Button>
            <BottomGradient />
          </div>
          <p className='text-xs text-gray-600 dark:text-gray-300 mt-4'>
            Already have an account?{' '}
            <span
              onClick={() => setState('signIn')}
              className='text-sky-700 dark:text-sky-300 hover:underline cursor-pointer'
            >
              Sign in here
            </span>
            .
          </p>
        </div>
      </div>
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
