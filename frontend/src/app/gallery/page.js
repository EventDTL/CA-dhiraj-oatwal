import React from 'react';
import Image from 'next/image';

const images = [
  "/newgallery1.jpg",
  "/newgallery2.jpg",
  "/newgallery3.jpg",
  "/newgallery4.jpg",
  "/newgallery7.jpg",
  "/newgallery8.jpg",
  "/newgallery12.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
];

const Gallery = () => {
  return (
    
    <div className="mx-auto mt-20 mb-14">
      <h1 className="text-center text-xl font-bold text-[#E86130] md:text-3xl">Gallery</h1>
      <div className="grid grid-cols-3 gap-y-4 gap-x-11 mt-7 mx-auto w-[90%] sm:grid-cols-2 ag:gap-y-4 ag:grid-cols-1 sm:gap-y-[22px]  ">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative rounded-[30px] 
            h-[432px] ag:h-[375px] sm:h-[432px]"
          >
            <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-[30px] " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

 

