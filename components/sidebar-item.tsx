'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

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
  return (
    <Button
      variant={active? 'sidebar_outline' : 'sidebar_button'}
      className={`justify-start h-[52px] w-[100%] ${className}`}
      asChild
    >
      <Link href={href}>
        <Icon className='mr-8 ' width={32} height={32} />
        {label}
      </Link>
    </Button>
  );
};