import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-500 px-2 py-1.5 rounded-3xl">
          <button
            onClick={() => setColor("#9400D3")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#9400D3" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("#4B0082")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#4B0082" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("#0000FF")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#0000FF" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#00FF00")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#00FF00" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#FFFF00")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#FFFF00" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#FF7F00")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#FF7F00" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#FF0000")}
            className="outline-none px-4 rounded-2xl text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: "#FF0000" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
