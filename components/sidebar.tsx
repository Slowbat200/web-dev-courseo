'use client'

import { cn } from '@/lib/utils';
import { SidebarItem } from './sidebar-item';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { ThemeToggle } from './theme-toggle';
import { UserButton } from '@clerk/nextjs';
import {schoolIcon, htmlIcon, cssIcon, jsIcon, devIcon} from './icon-wrapper'; // Adjust the import path accordingly

type Props = {
  className?: string;
};

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export const Sidebar = ({ className }: Props) => {
  return (
    <div
    className={cn(
      'dark:bg-black bg-white-80 h-full w-fit lg:w-[256px] lg:fixed flex flex-col gap-y-5 left-0 top-0 px-4 border-r-2 pt-10',
          className
        )}
        >
        <Link href='/learn'>
          <h1
            className={cn(
              //primary className
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              //dynamic className
              font.className
            )}
          >
            Slowbat
          </h1>
        </Link>
        <SidebarItem label='Learn' href='/learn' iconSrc={schoolIcon} />
        <SidebarItem label='development' href='/development' iconSrc={devIcon}/>
        <SidebarItem label='Html' href='/html' iconSrc={htmlIcon}/>
        <SidebarItem label='Css' href='/css' iconSrc={cssIcon}/>
        <SidebarItem label='JavaScript' href='/js' iconSrc={jsIcon} />
      <div className='flex flex-row relative bottom-0 right-0 flex-1 gap-x-3'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};
