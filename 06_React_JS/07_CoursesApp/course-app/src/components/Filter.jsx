import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto p-4 rounded-2xl justify-center">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => filterHandler(data.title)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:opacity-50 hover:cursor-pointer border-2 transition-all duration-300 ${
            category === data.title
              ? "opacity-100 border-white"
              : "opacity-80 border-transparent"
          }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
