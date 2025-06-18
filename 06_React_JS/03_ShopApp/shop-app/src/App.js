import { useState } from "react";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

function App() {
  const base = Date.now();
  const [products, setProducts] = useState([
    {
      id: "p" + (base + 0),
      title: "coke",
      amount: 40,
      date: new Date(2025, 6, 1),
    },
    {
      id: "p" + (base + 1),
      title: "pepsi",
      amount: 35,
      date: new Date(2025, 5, 4),
    },
    {
      id: "p" + (base + 2),
      title: "fanta",
      amount: 45,
      date: new Date(2025, 6, 24),
    },
    {
      id: "p" + (base + 3),
      title: "sprite",
      amount: 30,
      date: new Date(2025, 6, 19),
    },
  ]);

  function printNewProduct(productData) {
    const newProductdata = {
      id: "p" + Date.now(),
      title: productData.title,
      amount: productData.price,
      date: new Date(productData.date),
    };
    setProducts((prevProducts) => [newProductdata, ...prevProducts]);
  }

  return (
    <>
      <NewProduct printNewProduct={printNewProduct} />
      <Products items={products} />
    </>
  );
}

export default App;
