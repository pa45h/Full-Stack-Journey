import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function Home() {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(url);
      const products = await res.json();
      setProducts(products);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-300">
      {loading ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))
      )}
    </div>
  );
}

export default Home;
