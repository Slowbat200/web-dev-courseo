import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar';

export const MobileSidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className='lg:hidden'>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-secondary z-[100] w-32 '>
                <Sidebar />
            </SheetContent>
        </Sheet>
     );
}
 
export default MobileSidebar;