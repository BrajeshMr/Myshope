import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useCart } from "../Context/CartContext";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const { items, totalItems, totalAmount } = useCart();

  const itemsArray = items ? Object.values(items) : [];

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[320px] max-h-[80vh] overflow-auto">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-semibold">Order Now</h1>
                  <div className="text-sm text-gray-500">{totalItems} item(s) · ${totalAmount.toFixed(2)}</div>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>

              {/* cart items list */}
              <div className="mt-4">
                {itemsArray.length === 0 ? (
                  <div className="text-center text-gray-500 py-6">Your cart is empty.</div>
                ) : (
                  <ul className="space-y-3">
                    {itemsArray.map((it) => (
                      <li key={it.product.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={it.product.img} alt={it.product.title} className="w-12 h-12 object-contain rounded-sm bg-gray-100" />
                          <div>
                            <div className="font-medium text-sm">{it.product.title}</div>
                            <div className="text-xs text-gray-500">Qty: {it.quantity}</div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold">${(it.product.price * it.quantity).toFixed(2)}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-3"
                />
                <div className="flex justify-center">
                  <button
                    disabled={totalItems === 0}
                    className={`bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ${totalItems === 0 ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    Order Now • ${totalAmount.toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
