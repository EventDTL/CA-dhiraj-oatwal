import React from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

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
    
    <div className="mx-auto mt-9 mb-14">
      <h2 className="text-center text-4xl font-bold text-[#E86130] mmd:text-3xl mmd:font-semibold">Gallery</h2>
      <div className="grid grid-cols-3 gap-y-4 gap-x-11 mt-7 mx-auto w-[90%] mmd:grid-cols-2 mmd:gap-y-4 msm:grid-cols-1 msm:gap-y-[22px]  ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.imageContainer} relative rounded-[30px] 
            h-[432px] mmd:h-[375px] msm:h-[432px]`}
          >
            <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-[30px] " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

 

