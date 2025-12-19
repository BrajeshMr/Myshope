import React from 'react';
// 1. Import your image correctly
import IphoneImg from "../../assets/hero/Iphone.jpeg"; 

const Banner = () => {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="relative bg-black text-white p-10 md:p-14 w-full h-full flex items-center overflow-hidden">
        
        {/* Right side section */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center pb-10"> 
          
          {/* Text section */}
          <div className="flex flex-col gap-4 z-10">
            <div className="flex items-center gap-3">
              <ion-icon name="logo-apple" className="text-4xl"></ion-icon>
              <span>iPhone 14 Series</span>
            </div>
            <h1 className="text-5xl font-semibold leading-tight">
              Up to 10% <br /> off Voucher
            </h1>
            <button className="flex items-center gap-2 border-b w-fit pb-1 mt-4 hover:text-gray-300">
              Shop Now <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>

          
          <div className="flex justify-center z-10">
            <img 
              src={IphoneImg} 
              className="w-full max-w-[400px] object-contain" 
              alt="iPhone" 
            />
          </div>
          
        </div> 
      </div> 
    </div>
  );
};

export default Banner;