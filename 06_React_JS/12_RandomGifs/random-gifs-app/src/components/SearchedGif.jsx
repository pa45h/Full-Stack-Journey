import { useState } from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";

const SearchedGif = () => {
  const [searched, setSearched] = useState("");
  const { gif, loader, fetchData } = useGif(searched);

  return (
    <div className="rounded-2xl shadow-sm bg-gray-900 border-2 border-gray-700 p-5 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Searched Gif
      </h2>
      {loader ? (
        <Loader />
      ) : (
        <img
          className="rounded-2xl border"
          src={gif}
          width="350"
          height="350"
          loading="lazy"
        />
      )}
      <input
        value={searched}
        type="search"
        id="search"
        className="block w-full p-4 ps-10 text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded-2xl"
        placeholder="Search For Gif"
        onChange={(e) => setSearched(e.target.value)}
        required
      />
      <button
        className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 w-[200px] mx-auto cursor-pointer"
        onClick={() => fetchData()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchedGif;
