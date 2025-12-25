import React from 'react';
import { useCart } from '../Context/CartContext';

import Iphone17 from "../../assets/Product/iphone-17.webp";
import Image1 from "../../assets/Product/women.png";
import Clock from "../../assets/Product/clock.webp";
import Ear from "../../assets/Product/ear.webp";
import Toy from "../../assets/Product/toy.jpg";
import Shoes from "../../assets/Product/shoes.webp";
import Watch from "../../assets/Product/smart.webp";
import Laptop from "../../assets/Product/laptop.webp";


const Products = ({ handleAddToCart }) => {
  const { addItem, items, setQuantity, removeItem } = useCart();
  // localAddToCart will add item to global cart and forward to prop handler
  const localAddToCart = (product) => {
    addItem(product);
    if (typeof handleAddToCart === 'function') handleAddToCart(product);
  };

  const increment = (product) => {
    addItem(product);
  };

  const decrement = (product) => {
    const q = items && items[product.id] ? items[product.id].quantity : 0;
    if (q <= 1) {
      removeItem(product.id);
    } else {
      setQuantity(product.id, q - 1);
    }
  };
  const productData = [
    {
      id: 1,
      title: "iPhone 17 Pro",
      price: 120,
      discount: "-40%",
      rating: 5.0,
      color: "black",
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
              
              {product.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-[4px]">
                  {product.discount}
                </div>
              )}

              <img 
                src={product.img} 
                alt={product.title} 
                className="w-[170px] object-contain transition-transform duration-300 group-hover:scale-105" 
              />

              {/* Quantity badge */}
              {items && items[product.id] && items[product.id].quantity > 0 && (
                <div className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  {items[product.id].quantity}
                </div>
              )}

              {/* Add To Cart + quantity controls */}
              <div className="absolute bottom-0 w-full py-2 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => localAddToCart(product)}
                    className="flex-1 bg-black text-white py-2 text-center cursor-pointer rounded text-sm"
                  >
                    Add To Cart
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(product)}
                      className="bg-white text-black px-3 py-1 rounded border"
                    >
                      -
                    </button>

                    <div className="w-8 text-center font-semibold">
                      {items && items[product.id] ? items[product.id].quantity : 0}
                    </div>

                    <button
                      onClick={() => increment(product)}
                      className="bg-white text-black px-3 py-1 rounded border"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-1">
              <h3 className="font-semibold text-base">{product.title}</h3>
              
              <div className="flex gap-3 text-red-500 font-medium">
                ${product.price} 
                {/* FIX: Only show old price if it exists */}
                {product.oldPrice && (
                    <span className="text-gray-500 line-through font-normal">${product.oldPrice}</span>
                )}
              </div>

              <div className="flex items-center gap-2"> 
                <div className="flex text-yellow-500 text-lg">
                  {/* Dynamic stars logic would go here */}
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