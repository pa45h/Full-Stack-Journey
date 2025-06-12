import './ProductDate.css';

const ProductDate = (props) => {
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const month = props.date.toLocaleString("en-us",{month:"long"});
  const year = props.date.getFullYear();

  return (
    <>
      <div className="product_date">
        <div className="product_date_day">{day}</div>
        <div className="product_date_month">{month}</div>
        <div className="product_date_year">{year}</div>
      </div>
    </>
  );
};

export default ProductDate;
