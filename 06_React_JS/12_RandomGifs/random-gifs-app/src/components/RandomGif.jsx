import Loader from "./Loader";
import useGif from "../hooks/useGif";

const RandomGif = () => {
  const { gif, loader, fetchData } = useGif();

  return (
    <div className="rounded-2xl shadow-sm bg-gray-900 border-2 border-gray-700 p-5 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Random Gif
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

      <button
        className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 w-[200px] mx-auto cursor-pointer"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
