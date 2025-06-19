import { useState } from "react";
import Tours from "./componets/Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  };

  const addTour = (id) => {
    const newTours = tours.filter((tours) => tours.id === id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="refreshBtn" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour} addTour={addTour}></Tours>
    </div>
  );
}

export default App;
