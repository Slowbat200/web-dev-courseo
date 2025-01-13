'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { SignFlow } from '../types';
import { useAuthActions } from '@convex-dev/auth/react';
import { useState } from 'react';

interface SignInCardProps {
  setState: (state: SignFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const { signIn } = useAuthActions();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);

  const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);
    signIn('password', { email, password, flow: 'signIn' })
      .catch(() => {
        setError('Invalid email or password');
      })
      .finally(() => {
        setPending(false);
      });
  };

  const handleProviderSignIn = (value: 'github' | 'google') => {
    setPending(true);
    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <div className='flex h-screen w-screen'>
      {/* Left side */}
      <div className='w-1/2 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center p-8'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4'>
          Welcome back
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400'>
          Log in to your account and continue learning.
        </p>
      </div>
      {/* Right side */}
      <div className='w-1/2 bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-8'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
            Sign in
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
          <form onSubmit={onPasswordSignIn} className='space-y-4'>
            <div>
              <Label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 pb-3'
              >
                Email
              </Label>
              <Input
                id='email'
                type='email'
                disabled={pending}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
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
                  id='password'
                  type='password'
                  disabled={pending}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
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
          <Separator className="my-6" />
          <div className="flex flex-col gap-y-4">
            <Button
              disabled={pending}
              onClick={() => handleProviderSignIn('google')}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FcGoogle className="w-5 h-5 absolute top-2.5 left-2.5" />
             Continue with Google
            </Button>
            <Button
              disabled={pending}
              onClick={() => handleProviderSignIn('github')}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FaGithub className="w-5 h-5 absolute top-2.5 left-2.5" />
              Continue with Github
            </Button>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
            Dont have an account?{' '}
            <span
              onClick={() => setState('signUp')}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Register here
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
};
