import React from 'react'
import {Mail} from "lucide-react"

export const FeatureWrapper = () => {
  return (
    <div className='relative 
    z-1 mt-[-100px]'>
        <div className='container p-3p flexp flex-wrap
        w-full grid grid-cols-1 
        md:grid-cols-2 
        mdl:grid-cols-3 
        lgl:grid-cols-4 xl:grid-cols-4
        items-center gap-2'>
          <FeatureCard/>
          <FeatureCard/>
          <FeatureCard/>
          <FeatureCard/>
          <FeatureCard/>
        </div>
    </div>
  )
}

const FeatureCard = () =>{
    return (
        <div 
        className="w-[250px]p 
        w-fullp md:w-1/2p 
        xl:w-1/4p lg:w-1/4p md:w-1/3p 
        sm:w-1/2p
        wow animate-tgfadeUp"
        data-wow-duration="0.9s"
        data-wow-delay="0.3s"
        style={{ animationDuration: '0.9s', animationDelay: '0.3s', animationName: 'tgfadeUp' }}
        >
            <div className="bg-white rounded-[5px]
             shadow-cardShadow flex flex-col items-center justify-center
              p-[30px_15px] 
            pb-[37px] text-center">
                <div className="mb-4">
                <div className="flex justify-center
                items-centerp h-[60px] 
                rounded-[5px]
                text-center items-center text-[25px] sm:text-[38px]
                text-white bg-gradient-to-r
                from-blueLeft to-blueRight

                w-[60px] leading-[60px] ">
                    <Mail className='text-primaryp text-3xl'
                    size={40}/>
                    {/* <i className="flaticon-015-email text-primary text-3xl"></i> */}
                </div>
                </div>
                <h5 className="text-[1rem] sm:text-lg font-semibold text-gray-800">
                Elevate Your Business DataMasters
                </h5>
            </div>
        </div>

    )
}
