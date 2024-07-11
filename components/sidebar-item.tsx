'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {RingLoader} from 'react-spinners'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Props = {
  label: string;
  href: string;
  iconSrc: IconType;
  className?: string;
};

export const SidebarItem = ({ label, iconSrc: Icon, href, className }: Props) => {
  const pathName = usePathname();
  const active = pathName === href;
 
  const [loading, setLoading] = useState(false); // Add loading state

  const loader = () => {
    setLoading(true)    
    setTimeout(() =>{
      setLoading(false)
    }, 3000)
  }

  return (
    <Button
      variant={active? 'sidebar_outline' : 'sidebar_button'}
      className={`justify-start h-[52px] w-[100%] ${className}`}
      asChild
    >
      <Link href={href} onClick={loader}>
      {loading &&(
            <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 z-50 flex justify-center items-center'>
              <RingLoader color={'#123abc'} loading={loading} size={150}/>
            </div>
          )}
        <Icon className='mr-8 ' width={32} height={32} />
        {label}
      </Link>
    </Button>
  );
};