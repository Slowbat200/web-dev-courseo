import { MobileHeader } from '@/components/mobile-header';
import { Sidebar } from '@/components/sidebar';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='h-full relative'>
      <div>
        <Sidebar className='hidden lg:flex'/>
      <MobileHeader />
      </div>
    <main className='md:pl-72 lg:pt-0 pt-20 bg-black'>
      {children}
    </main>
  </div>
  );
};

export default MainLayout;
