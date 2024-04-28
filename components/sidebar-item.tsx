'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Props = {
  label: string;
  href: string;
  iconSrc: IconType;
};

export const SidebarItem = ({ label, iconSrc: Icon, href }: Props) => {
  const pathName = usePathname();
  const active = pathName === href;
  return (
    <Button
      variant={active? 'outline' : 'secondary'}
      className='justify-start h-[52px] w-[100%]'
      asChild
    >
      <Link href={href}>
        <Icon className='mr-5' width={32} height={32} />
        {label}
      </Link>
    </Button>
  );
};