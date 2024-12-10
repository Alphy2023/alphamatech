// "use client";

import React from "react";

type SliderItemProps = {
  backgroundImage: string; // Path to the background image
  text: string; // Floating text on the slide
  key:string;
};

export const SliderItem: React.FC<SliderItemProps> = 
({ backgroundImage, text,key }) => {
  return (
    <div
    key={key}
      className="relative w-full h-[400px]
       flex items-center justify-center
        text-center bg-cover bg-center"
      style={{
        backgroundImage: 
        `url(${backgroundImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0
       bg-gradient-to-l from-black/70
        via-black/20 to-transparent"></div>
      
      {/* Text Content */}
      <div>

      </div>
      <h2 className="relative z-10 
      text-white text-2xl px-4 py-2 rounded-md">
        {text}
      </h2>
    </div>
  );
};
