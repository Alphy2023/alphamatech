"use client"

import React, {useState,useEffect} from 'react'
import { MainBottomNavbar } from '@/components/common/main-bottom-navbar';
import { MainTopNavbar } from '@/components/common/main-top-navbar';

export const MainNavbar = () => {
  const [showTopNavbar, setShowTopNavbar] = useState<boolean>(true);
  const [showBottomNavbar, setShowBottomNavbar] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  
  const handleScroll = (): void => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowTopNavbar(false);
      setTimeout(() => setShowBottomNavbar(true), 200); // Delay bottom navbar appearance
    } else {
      // Scrolling up
      if (currentScrollY <= 100) {
        // Show both navbars when near top (hero section)
        setShowTopNavbar(true);
        setShowBottomNavbar(false);
      } else {
        setShowBottomNavbar(true); // Keep bottom navbar visible
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  
  return (
    <>
    <MainTopNavbar/>

    <MainBottomNavbar/>


    {/* <>
      <div
        className={`transition-transform duration-300 ${
          showTopNavbar ? 'translate-y-0' : '-translate-y-full'
        } fixed top-0 left-0 w-full z-50`}
      >
        <MainTopNavbar />
      </div>
      <div
        className={`transition-transform duration-300 ${
          showBottomNavbar ? 'translate-y-0' : 'translate-y-full'
        } fixed bottom-0 left-0 w-full z-50`}
      >
        <MainBottomNavbar />
      </div>
    </> */}

    </>
  )
}
