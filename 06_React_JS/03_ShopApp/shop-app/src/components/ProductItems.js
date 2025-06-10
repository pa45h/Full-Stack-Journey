import Card from "./Cards";
import ProductDate from "./ProductDate";
import './ProductItems.css';

const ProductItem = (props) => {
  return (
    <>
      <Card className="product_items">
        <ProductDate date={props.date} />
        <div className="product_item_info">
          <h2>{props.title}</h2>
          <h3>{props.amount}/-</h3>
        </div>
      </Card>
    </>
  );
};

export default ProductItem;
