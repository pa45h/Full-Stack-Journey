import RandomGif from "./components/RandomGif";
import SearchedGif from "./components/SearchedGif";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-950 flex flex-col gap-5 justify-center">
      <div className="flex justify-center text-center">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
          Random Gifs
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Random Gifs
        </h1>
      </div>

      <div className="flex justify-evenly items-center flex-wrap gap-5">
        <RandomGif />
        <SearchedGif />
      </div>
    </div>
  );
}

export default App;
