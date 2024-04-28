import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar';

export const MobileSidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className='lg:hidden pr-4'>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-secondary z-[100] w-32 '>
                <Sidebar />
            </SheetContent>
        </Sheet>
     );
}
 
export default MobileSidebar;