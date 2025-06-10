import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

function App() {
  const products = [
    {
      id: "p1",
      title: "coke",
      amount: 40,
      date: new Date(2025, 6, 1),
    },
    {
      id: "p2",
      title: "pepsi",
      amount: 35,
      date: new Date(2025, 5, 4),
    },
    {
      id: "p3",
      title: "fanta",
      amount: 45,
      date: new Date(2025, 6, 24),
    },
    {
      id: "p4",
      title: "sprite",
      amount: 30,
      date: new Date(2025, 6, 19),
    },
  ];
  return (
    <>
      <NewProduct/>
      <Products items={products}></Products>
    </>
  );
}

export default App;
