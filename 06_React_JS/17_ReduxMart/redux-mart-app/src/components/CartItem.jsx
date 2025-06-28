import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../redux/slices/cartSlice";

function CartItem({ item, index }) {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }

  return (
    <>
      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                  <img
                    className="h-20 w-20"
                    src={item.image}
                    alt="product image"
                    loading="lazy"
                  />
                </a>

                <div className="flex items-center justify-between md:order-3 md:justify-end">
                  <div className="text-center md:order-4 md:w-32">
                    <p className="text-base font-bold text-gray-900">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="w-full flex-1 space-y-4 md:order-2">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:underline"
                  >
                    {item.title}
                  </a>

                  <p className="text-sm text-slate-600">{item.description}</p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center justify-center mt-3">
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
                        {item.rating.rate}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center text-sm font-medium text-red-600 hover:underline cursor-pointer"
                      onClick={removeFromCart}
                    >
                      <svg
                        className="m-1 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18 17.94 6M18 18 6.06 6"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
