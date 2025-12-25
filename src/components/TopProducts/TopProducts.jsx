import React from 'react';
import Mobile from  "../../assets/Product/phone.png";
import Smart from  "../../assets/Product/smartwatch.jpg";
import Photo from  "../../assets/Product/camera.png";
import Ear1 from "../../assets/Product/head.jpg";
import Comgame from "../../assets/Product/gamming.png";
import Movie from "../../assets/Product/tv.jpeg";

const Categories = () => {
  const categoryData = [
    { 
      id: 1, 
      name: "Phone",
       img: Mobile,
     },
    {
       id: 2, 
       name: "Watch", 
       img: Smart,
   },
    { 
      id: 3,
       name: "Camera",
      img: Photo,
   },
    { 
      id: 4, 
      name: "Headset", 
      img: Ear1,
    },
    { 
      id: 5,
       name: "Gaming",
      img: Comgame,
    },
    { 
      id: 6, 
      name: "TV", 
      img: Movie,
     },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Best Selling Categories
      </h1>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categoryData.map((item) => (
          <div 
            key={item.id} 
            className="border border-gray-300 rounded-sm py-6 flex flex-col justify-center items-center gap-4 cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300 group"
          >
            <img src={item.img} alt={item.name} 
              className="text-4xl md:text-6xl group-hover:text-white"
            />
            <p className="text-base md:text-lg font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <hr className="mt-16 border-gray-200" />
    </section>
  );
};

export default Categories;