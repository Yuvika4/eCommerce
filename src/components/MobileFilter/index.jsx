import React from "react";
import { FaFilter } from "react-icons/fa";
import { getData } from "../../context/DataContext";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  const toggleFilter=()=>{
    setOpenFilter(!openFilter)
  }
  return (
    <>
      <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5">
        <h1 className="font-senibold text-xl">Filters</h1>
        <FaFilter
          onClick={toggleFilter}
          className="text-gray-800"
        />
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="bg-white p-2  mb-3 rounded-md border-gray-400 border-2 w-full"
          />
          <div className="flex flex-col gap-2 mt-3">
            {categoryOnlyData?.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={item}
                    checked={category === item}
                    value={item}
                    onChange={handleCategoryChange}
                  ></input>
                  <button className="cursor-pointer uppercase">{item}</button>
                </div>
              );
            })}
          </div>

          <h1 className="mt-5 font-semibold text-xl">Brand</h1>
          <select
            className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
            value={brand}
            onChange={handleBrandChange}
          >
            {brandOnlyData?.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item.toUpperCase()}
                </option>
              );
            })}
          </select>
          <h1 className="mt-5 font-semibold text-xl"> Price Range</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Price Range:${priceRange[0]}-${priceRange[1]}
            </label>
            <input
              type="range"
              min={0}
              max={5000}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              value={priceRange[1]}
              className="transition-all w-[200px]"
            ></input>
          </div>
          <button
            className="bg-orange-400 text-white rounded-md p-1 mt-5 cursor-pointer"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setBrand("All");
              setPriceRange([0, 5000]);
              setOpenFilter(false)
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
