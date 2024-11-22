'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Loader, LogOut } from 'lucide-react';
import { useCurrentUser } from '../api/get-current-user';
import { useAuthActions } from '@convex-dev/auth/react';

export const UserButton = () => {
  const { signOut } = useAuthActions();
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className='size-4 animate-spin text-muted-foreground' />;
  }

  if (!data) {
    return null;
  }

  const { name, image } = data;
  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='outline-none relative'>
        <Avatar className='size-10 hover:opacity-75 transition'>
          <AvatarImage alt={name} src={image} />
          <AvatarFallback className='text-white bg-sky-500 text-xl'>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-60' side='right' align='center'>
        <DropdownMenuItem
          className='h-10 cursor-pointer'
          onClick={() => signOut()}
        >
          <LogOut className='size-4 mr-2' />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
