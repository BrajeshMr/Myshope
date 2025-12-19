import React from 'react';

const Categories = () => {
  const categoryData = [
    { 
      id: 1, 
      name: "Phone",
       icon: "phone-portrait-outline"
     },
    {
       id: 2, 
       name: "Watch", 
       icon: "watch-outline"
   },
    { 
      id: 3,
       name: "Camera",
        icon: "camera-reverse-outline"
   },
    { 
      id: 4, 
      name: "Headset", 
      icon: "headset-outline" 
    },
    { 
      id: 5, name: 
      "Gaming", icon: 
      "game-controller-outline" 
    },
    { 
      id: 6, 
      name: "TV", 
      icon: "tv-outline" },
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
            <ion-icon 
              name={item.icon} 
              className="text-4xl md:text-6xl group-hover:text-white"
            ></ion-icon>
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