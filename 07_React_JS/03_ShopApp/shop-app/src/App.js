import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

function App() {
  const products = [
    {
      id: "p" + Math.round(Math.random() * 4 + 1),
      title: "coke",
      amount: 40,
      date: new Date(2025, 6, 1),
    },
    {
      id: "p" + Math.round(Math.random() * 4 + 1),
      title: "pepsi",
      amount: 35,
      date: new Date(2025, 5, 4),
    },
    {
      id: "p" + Math.round(Math.random() * 4 + 1),
      title: "fanta",
      amount: 45,
      date: new Date(2025, 6, 24),
    },
    {
      id: "p" + Math.round(Math.random() * 4 + 1),
      title: "sprite",
      amount: 30,
      date: new Date(2025, 6, 19),
    },
  ];

  function printNewProduct(productData) {
    const newProductdata = {
      id: "p" + Math.round(Math.random() * 4 + 1),
      title: productData.title,
      amount: productData.price,
      date: new Date(productData.date),
    };
    console.log(newProductdata);
  }

  return (
    <>
      <NewProduct printNewProduct={printNewProduct} />
      <Products items={products} />
    </>
  );
}

export default App;
