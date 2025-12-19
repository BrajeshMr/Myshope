import React from 'react';
import Iphone17 from "../../assets/Product/iphone-17.webp";
import Image1 from "../../assets/Product/women.png";
import Clock from "../../assets/Product/clock.webp";
import Ear from "../../assets/Product/ear.webp";
import Toy from "../../assets/Product/toy.jpg";
import Shoes from "../../assets/Product/shoes.webp";
import Watch from "../../assets/Product/smart.webp";
import Laptop from "../../assets/Product/laptop.webp";
const Products = () => {
  const productData = [
    {
      id: 1,
      title: "iPhone 17 Pro",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 5.0,
      color: "white",
      img: Iphone17,
    },
    {
      id: 2,
      title: "woman",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 5.0,
      color: "white",
      img: Image1,
    },
    { id: 3, 
      title: "Wall Watch",
      price: 130,
      oldPrice: 150,
      discount: "-40%",
      rating: 4.8,
      color: "white",
      img: Clock,
    },
    {
      id: 4, 
      title: "Earbuds",
      price: 130,
      oldPrice: 150,
      discount: "-40%",
      rating: 4.8,
      color: "white",
      img: Ear,
    },
    {
      id: 5, 
      title: "Toy's",
      price: 130,
      oldPrice: 150,
      discount: "-40%",
      rating: 4.8,
      color: "white",
      img: Toy,
    },
    {
      id: 6, 
      title: "Sparx SM-171 Running Shoes For Men",
      price: 130,
      oldPrice: 150,
      discount: "-40%",
      rating: 4.8,
      color: "white",
      img: Shoes,
    },
    {
      id: 7, 
      title: "Cipzi Digital Black Clock",
      price: 130,
      oldPrice: 150,
      discount: "-40%",
      rating: 4.8,
      color: "white",
      img: Watch,
    },
    {
      id: 8,
      title: "Thomson NEO Core Series Intel Core i5 12th Gen 1235U",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 5.0,
      color: "white",
      img: Laptop,
    }
  ];

  return (
    <section className="my-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {productData.map((product) => (
          <div key={product.id} className="group relative">
            
            {/* Image Wrapper */}
            <div className="relative h-[250px] bg-gray-100 rounded-sm flex justify-center items-center overflow-hidden">
              
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-[4px]">
                {product.discount}
              </div>

              {/* Action Buttons (Wishlist/View) */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition">
                  <ion-icon name="heart-outline" className="text-xl"></ion-icon>
                </div>
                <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition">
                  <ion-icon name="eye-outline" className="text-xl"></ion-icon>
                </div>
              </div>

              
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-[170px] object-contain transition-transform duration-300 group-hover:scale-105" 
              />

              
              <div className="absolute bottom-0 w-full bg-black text-white py-2 text-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Add To Cart
              </div>
            </div>

            
            <div className="mt-4 space-y-1">
              <h3 className="font-semibold text-base">{product.title}</h3>
              
              <div className="flex gap-3 text-red-500 font-medium">
                ${product.price} <span className="text-gray-500 line-through font-normal">${product.oldPrice}</span>
              </div>

              
              <div className="flex items-center gap-2"> 
                <div className="flex text-yellow-500 text-lg">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half-outline"></ion-icon>
                </div>
                <span className="text-gray-400 text-sm font-semibold">({product.rating})</span>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Products;