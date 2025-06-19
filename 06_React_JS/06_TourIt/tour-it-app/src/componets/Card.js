import { useState } from "react";

function Card({ id, name, info, image, price, removeTour, addTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 100)}...`;
  const readmoreToggle = () => setReadmore(!readmore);

  return (
    <div className="card">
    <div className="imgDiv">
      <img src={image} className="image" alt={name + "-img"} loading="lazy" />
    </div>

      <div className="tour_info">
        <div className="tour_details">
          <h4 className="tour_name">{name}</h4>
          <h4 className="tour_price">₹ {price}</h4>
        </div>

        <div className="tour_description">
          {description}
          <span className="readmore" onClick={readmoreToggle}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>

      <div className="buttons">
        <button className="btnRed" onClick={() => removeTour(id)}>
          Not Interested
        </button>
        <button className="btnGreen" onClick={() => addTour(id)}>
          Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
