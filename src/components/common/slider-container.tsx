"use client";

import React, { useEffect, useState } from "react";
import { SliderItem } from "@/components/common/slider-item";


// const Slide = ({ children }: { children: React.ReactNode }) => (
//   <div className="wow animate__fadeInUp">{children}</div>
// );

export const SliderContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: React.ReactNode[] = [
    <SliderItem 
      // key="1" 
      backgroundImage="/tech-image-5.jpg" 
      text="This is the first slide." 
    />,
    <SliderItem 
      // key="2" 
      backgroundImage="/tech-image-2.jpg" 
      text="This is the second slide." 
    />,
    <SliderItem 
      // key="3" 
      backgroundImage="/tech-image-3.jpg" 
      text="This is the third slide." 
    />,
  ];
  

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides?.length);
    }, 5000); 

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [slides?.length]);



  return (
    <div className="slider-container relative overflow-hidden">
      <div
        className="slider-content flex transition-transform 
        animate-fade duration-700 ease-in"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`, // Slide effect
        }}
      >
         {slides?.map((slide, idx) => (
          <div  key={idx}
          className="slidep w-full flex-shrink-0">
            {slide}
          </div>
        ))}
        {/* {slides?.map((slide, index) => (
          <div key={index} className="slide w-full flex-shrink-0
          animate-fade">
            <Slide>{slide}</Slide>
          </div>
        ))} */}
      </div>
       
    </div>
  );
};