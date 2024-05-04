import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";
import { ThemeToggle } from "./theme-toggle";

export const MobileHeader = () => {
  return (
    <nav className='lg:hidden flex items-center bg-yellow-500 border-b fixed top-0 w-full z-50 px-6 h-[50px]'>
      <MobileSidebar />
      <div className='flex flex-row justify-end flex-1 gap-x-3'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
};
