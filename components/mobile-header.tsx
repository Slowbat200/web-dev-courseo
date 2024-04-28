import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className='lg:hidden flex items-center bg-yellow-500 border-b fixed top-0 w-full z-50 px-6 h-[50px]'>
      <MobileSidebar />
    </nav>
  );
};
