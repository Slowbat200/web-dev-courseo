'use client';

import { cn } from '@/lib/utils';
import { SidebarItem } from './sidebar-item';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { ThemeToggle } from './theme-toggle';
import { UserButton } from '@clerk/nextjs';
import { schoolIcon, htmlIcon, cssIcon, jsIcon, devIcon } from './icon-wrapper'; // Adjust the import path accordingly
import IconReact from '@/icons/react';
import IconNext from '@/icons/next';
import IcontTailwind from '@/icons/tailwind';
import { useState } from 'react';
import { BattlePass } from './battle-pass';

type Props = {
  className?: string;
};

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

const levels = [
  {
    level: 1,
    pointsRequired: 0,
    freeReward: { title: 'Basic Skin', isPremium: false },
    premiumReward: { title: 'Golden Skin', isPremium: true },
  },
  {
    level: 2,
    pointsRequired: 50,
    freeReward: { title: 'Special Title', isPremium: false },
    premiumReward: { title: 'Unique Badge', isPremium: true },
  },
];

export const Sidebar = ({ className }: Props) => {
  const [showBattlePass, setShowBattlePass] = useState(false)
  return (
    <>
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
      <SidebarItem label='Development' href='/development' iconSrc={devIcon} />
      <SidebarItem label='Html' href='/html' iconSrc={htmlIcon} />
      <SidebarItem label='Css' href='/css' iconSrc={cssIcon} />
      <SidebarItem label='JavaScript' href='/js' iconSrc={jsIcon} />
      <SidebarItem label='React' href='/react' iconSrc={IconReact} />
      <SidebarItem label='TailwindCSS' href='/tailwindcss' iconSrc={IcontTailwind}/>
      <SidebarItem label='Next.js' href='/next' iconSrc={IconNext} />

      <div className='flex items-center space-x-4'>
      </div>
      <div className='lg:flex lg:flex-row hidden relative bottom-0 right-0 flex-1 gap-x-3 pb-5'>
        <button onClick={() => setShowBattlePass(true)} className='p-2 bg-green-500 rounded'>Battle Pass</button>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>

      {showBattlePass && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50'>
          <div className='bg-black p-4 rounded shadow-lg'>
            <button onClick={() => setShowBattlePass(false)} className='absolute top-2 right-2 p-2 bg-red-500 text-white rounded'>Close</button>
            <BattlePass levels={levels}/>
          </div>
        </div>
      )}
    </>
  );
};
