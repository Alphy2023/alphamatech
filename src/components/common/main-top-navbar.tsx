import React from 'react'
import { MapPin, Clock,Facebook,Linkedin   } from 'lucide-react';

export const MainTopNavbar = () => {
  return (
    <div className='bg-gradient-to-r
    from-blueLeft to-blueRight text-white 
    p-1 flex items-center flex-wrapp
     gap-4 justify-between'>
       <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
           <MapPin size={18}/>
           <p className="font-medium text-[12px]">
               Block 3, Kimathi street,
               Nairobi, Kenya
           </p>
         </div>
          <div className='hidden items-center gap-1 md:flex'>
           <Clock size={18}/>
           <p className="font-medium text-[12px]">
               Monday - Friday: 8am - 5pm
           </p>
         </div>
         
       </div>
       
       <div className="hidden items-center gap-3 xs:flex">
           <a href="#" target="_blank">
               <Facebook size={16}/>

           </a>
           <a href="#" target="_blank">
               <Linkedin size={16}/>

           </a>
       </div>
   </div>
  )
}
