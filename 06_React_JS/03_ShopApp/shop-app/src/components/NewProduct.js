import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct(props) {
  return (
    <div className="new_product">
      <ProductForm printNewProduct={props.printNewProduct} />
    </div>
  );
}

export default NewProduct;
