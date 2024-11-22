'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn('fixed top-12 inset-x-0 max-w-2xl mx-auto z-50 hidden md:flex', className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item='Web Development'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/courses/web-dev'>Introduction</HoveredLink>
            <HoveredLink href='/courses/web-dev/frontend-and-backend'>Front-end and Back-end</HoveredLink>
            <HoveredLink href='/courses/web-dev/protocols'>Protocols</HoveredLink>
            <HoveredLink href='/courses/web-dev/ide'>Integrated development enviroment</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='HTML'>
          <div className='text-sm grid grid-cols-2 gap-10 p-4'>
            <HoveredLink href='/courses/html'>Introduction</HoveredLink>
            <HoveredLink href='/courses/html/history'>History</HoveredLink>
            <HoveredLink href='/courses/html/tags'>Tags</HoveredLink>
            <HoveredLink href='/courses/html/advanced'>Advanced</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='CSS'>
          <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <HoveredLink href='/courses/css'>Introduction</HoveredLink>
            <HoveredLink href='/courses/css/history'>History</HoveredLink>
            <HoveredLink href='/courses/css/preprocessor'>Preprocessor</HoveredLink>
            <HoveredLink href='/courses/css/frameworks'>Frameworks</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='JavaScript'>
          <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <HoveredLink href='/courses/js'>Introduction</HoveredLink>
            <HoveredLink href='/courses/js/history'>History</HoveredLink>
            <HoveredLink href='/courses/js/libraries'>Libraries</HoveredLink>
            <HoveredLink href='/courses/js/frameworks'>Frameworks</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='TailwindCSS'>
          <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <HoveredLink onClick={() => {}} href='/courses/tailwind'>Introduction</HoveredLink>
            <HoveredLink onClick={() => {}} href='/courses/tailwind/instalation'>Instalation</HoveredLink>
            <HoveredLink onClick={() => {}} href='/courses/tailwind/'>Team</HoveredLink>
            <HoveredLink onClick={() => {}} href='/courses/tailwind/'>Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='React'>
          <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <HoveredLink onClick={() => {}} href='/courses/react'>Introduction</HoveredLink>
            <HoveredLink onClick={() => {}} href='/courses/react/history'>History</HoveredLink>
            <HoveredLink onClick={() => {}} href='/courses/react/frameworks'>Frameworks</HoveredLink>
            <HoveredLink onClick={() => {}} href='/courses/react/code-samples'>Code Samples</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
