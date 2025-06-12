import { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const productData = {
      title: title,
      price: price,
      date: date,
    };

    props.printNewProduct(productData);

    setTitle("");
    setPrice("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new_product_title">
        <label>Title : </label>
        <input type="text" value={title} onChange={titleChangeHandler}></input>
      </div>
      <div className="new_product_price">
        <label>Price : </label>
        <input
          type="number"
          value={price}
          min="0"
          onChange={priceChangeHandler}
        ></input>
      </div>
      <div>
        <label className="new_product_date">Date : </label>
        <input
          type="date"
          value={date}
          min="2025-01-01"
          max="2025-12-12"
          onChange={dateChangeHandler}
        ></input>
      </div>
      <button className="new_product_buttom" type="submit">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
