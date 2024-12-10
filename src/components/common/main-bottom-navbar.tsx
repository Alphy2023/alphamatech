import { Menu,PhoneCall } from 'lucide-react';

export const MainBottomNavbar = () =>{
    return (
        <nav className="p-3
        text-white flex items-center justify-between shadow-md
         bg-commonBlackDark w-full">
            <div className='text-[14px] font-semibold'>
                APMT
            </div>
            <div>
            </div>
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                    <PhoneCall size={24}/>
                    <div className='text-[12px]'>
                        <p className='font-light'>Need help?</p>
                        <span className="font-semibold 
                        ">(254) 545-589</span>
                    </div>
                </div>
                <div className='cursor-pointer border menu-toggler border-grayColor 
                duration-300 transition-all ease-in rounded-[2px] py-1 px-1
                flex items-center text-center justify-center'>

                <Menu size={24}/>
                </div>
            </div>
        </nav>
    )
}