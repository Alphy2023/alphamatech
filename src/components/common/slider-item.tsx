// "use client";

import React from "react";

type SliderItemProps = {
  backgroundImage: string; // Path to the background image
  text: string; // Floating text on the slide
  key:string;
}

export const SliderItem: React.FC<SliderItemProps> = ({ backgroundImage, text,key }) => {
  return (
    <div
    key={key}
      className="w-full h-[400px] flex
      bg-center bg-cover items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <h2 className="text-white text-2xl bg-black bg-opacity-50 px-4 py-2 rounded-md">
        {text}
      </h2>
    </div>
  );
};
