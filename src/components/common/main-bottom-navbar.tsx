"use client"
import { useState, useEffect, useRef } from "react";
import { Menu,PhoneCall } from 'lucide-react';
import { motion,AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

type MenuItemObject = {
    state: string;
    path: string;
    displayName: string;
  }

export const MainBottomNavbar = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();


  
    const menuItems: MenuItemObject[] = [
        { state: "", path: "/", displayName: "Home" },
        { state: "", path: "/about", displayName: "About" },
        { state: "", path: "/services", displayName: "Services" },
        { state: "", path: "/blog", displayName: "Blog" },
        { state: "", path: "/contact", displayName: "Contact" },
    ];
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    const handleNavigation = (path: string) => {
        router.push(path); 
        setIsSidebarOpen(false); 
    };
      // Close the sidebar if click happens outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false); // Close sidebar if clicked outside
      }
    };

    // Adding event listener for outside click
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <>
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
                flex items-center text-center justify-center'
                onClick={()=>toggleSidebar()}
                >

                <Menu size={24}/>
                </div>
            </div>
        </nav>
        <AnimatePresence>
        {isSidebarOpen && (
            <motion.div
            ref={sidebarRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 h-full w-[250px] bg-commonBlackDark
            text-white shadow-lg z-50 p-4"
            >
                
            <div className="flex flex-col gap-4 mt-4">
                {menuItems.map((item, index) => (
                <button
                    key={index}
                    className="text-left p-2 text-[16px] font-medium hover:bg-gray-700 rounded-md"
                    onClick={() => handleNavigation(item.path)}
                >
                    {item.displayName}
                </button>
                ))}
            </div>
            </motion.div>
      )}
        </AnimatePresence>
        </>
    )
}