import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <section className="min-h-screen bg-gray-300 py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shopping Cart
          </h2>

          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-3 mt-20">
              <h1 className="text-center text-3xl text-red-500">Cart Empty!</h1>
              <NavLink to="/">
                <button className="flex items-center justify-center rounded-lg bg-primary-700 px-10 py-3 cursor-pointer text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                  Shop Now
                </button>
              </NavLink>
            </div>
          )}

          {(cart.length > 0) && (
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 mt-10">
                <p className="text-xl font-semibold text-gray-900">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">
                        Total Items
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        {cart.length}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-bold text-gray-900">
                      ${totalAmount}
                    </dd>
                  </dl>
                </div>

                <button className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500">
                    {" "}
                    or{" "}
                  </span>
                  <NavLink to="/">
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline">
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
