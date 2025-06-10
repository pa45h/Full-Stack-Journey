import { useState } from "react";
import Card from "./Cards";
import ProductDate from "./ProductDate";
import "./ProductItems.css";

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle(`Added ${title} to cart`); 
  }

  return (
    <>
      <Card className="product_items">
        <ProductDate date={props.date} />
        <div className="product_item_info">
          <h2>{title}</h2>
          <h3>{props.amount}/-</h3>
        </div>
        <button onClick={clickHandler}>Add to Cart</button>
      </Card>
    </>
  );
};

export default ProductItem;
