import Card from "./Card";

function Tours({tours, removeTour, addTour}) {
  return (
    <div className="appContainer">
      <div>
        <h1 className="title">TourIt</h1>
      </div>

      <div className="cards_container">
        {tours.map((tour) => {
          return (<Card key={tour.id} {...tour} removeTour={removeTour} addTour={addTour}></Card>);
        })}
      </div>
    </div>
  );
}

export default Tours;