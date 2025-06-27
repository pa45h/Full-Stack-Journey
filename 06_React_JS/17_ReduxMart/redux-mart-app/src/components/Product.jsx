import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/slices/cartSlice";

function Product(props) {
  const product = props.product;
  const [added, setAdded] = useState(false);

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(product));
    toast.success("Item Added To Cart");
  }

  function removeFromCart() {
    dispatch(remove(product.id));
    toast.warning("Item Removed From Cart");
  }

  return (
    <div className="w-full max-w-[300px] bg-white border-2 border-gray-400 rounded-lg shadow-md flex flex-col justify-between items-center group transition-all duration-300 hover:shadow-violet-600">
      <img
        className="p-8 rounded-t-lg h-[250px] group-hover:scale-105 transition-all duration-300"
        src={product.image}
        alt="product image"
      />
      <div className="px-5 pb-5 text-center">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900">
          {product.title}
        </h2>
        <div className="flex items-center justify-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-1">
            {product.rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-between gap-16">
          <span className="text-xl font-bold text-[#22C55E]">
            ${product.price}
          </span>
          {cart.some((p) => p.id === product.id) ? (
            <button
              className="text-white bg-[#FF4444] hover:bg-[#FF6666] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center cursor-pointer transition-all duration-200"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-white bg-[#8B5CF6] hover:bg-[#C084FC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center cursor-pointer transition-all duration-200"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
