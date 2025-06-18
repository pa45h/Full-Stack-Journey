import ProductItem from "./ProductItems";
import Card from "./Cards";
import "./Products.css";

const Products = (props) => {
  return (
    <>
      <Card className="products">
        {props.items.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            amount={product.amount}
            date={product.date}
          ></ProductItem>
        ))}
      </Card>
    </>
  );
};

export default Products;
