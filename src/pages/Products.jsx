import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
// import Loading from "../assets/Loading"
import ProductCard from "../components/ProductCard";
import FilterSection from "../components/FilterSection";
import { RiAlignItemBottomFill } from "react-icons/ri";
import Pagination from "../components/Pagination";
import noData from "../assets/noData.png"
import MobileFilter from "../components/MobileFilter";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Products = () => {
  const { data, fetchProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter,setOpenFilter]=useState(false);

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
     setOpenFilter(false)

  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false)
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0,0);
  };

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  useEffect(() => {
    fetchProducts();
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
      <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter}   search={search}  brand={brand}
                  setBrand={setBrand}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  category={category}
                  setCategory={setCategory}
                  handleBrandChange={handleBrandChange}
                  handleCategoryChange={handleCategoryChange}
                  setSearch={setSearch}/>
        <div>
          {data?.length > 0 ? (
            <>
              <div className="flex gap-8">
                <FilterSection
                  search={search}
                  setSearch={setSearch}
                  brand={brand}
                  setBrand={setBrand}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  category={category}
                  setCategory={setCategory}
                  handleBrandChange={handleBrandChange}
                  handleCategoryChange={handleCategoryChange}
                />
                {filteredData?.length > 0 ? <div className="flex justify-center items-center flex-col">
 <div className="grid md:grid-cols-4 grid-cols-2 md:gap-7  gap-2 mt-10">
                  {filteredData
                    ?.slice(page * 8 - 8, page * 8)
                    .map((product, index) => {
                      return <ProductCard key={index} product={product} />;
                    })}
                </div>
                  <Pagination
                pageHandler={pageHandler}
                page={page}
                dynamicPage={dynamicPage}
              />
                </div> : <div className="flex justify-center items-center md-h-[500px] md:w-[500px] mt-10 mx-auto">
                  <img src={noData} alt="not found"/>
                </div>}
               
              </div>
            
            </>
          ) : (
            <div className="flex items-center justify-center h-[400px] ">
             <AiOutlineLoading3Quarters className="animate-spin text-5xl text-orange-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
