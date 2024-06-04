import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className='lg:hidden flex items-center dark:bg-black bg-primary/80 text-white border-b fixed top-0 w-full z-50 px-6 h-[50px]'>
      <MobileSidebar />
      <div className='flex flex-row justify-end flex-1 gap-x-3'>
        <ThemeToggle  />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
};
