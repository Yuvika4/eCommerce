import React from 'react'
import { getData } from '../../context/DataContext'

const FilterSection = ({ search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory,handleBrandChange,handleCategoryChange }) => {
    const { categoryOnlyData, brandOnlyData } = getData()
    return (
        <div className='bg-gray-100 mt-10 p-4 rounded-md h-max hidden md:block'>
            <input type='text' placeholder='search...' onChange={(e) => setSearch(e.target.value)} 
            value={search} className='bg-white p-2  mb-3 rounded-md border-gray-400 border-2' />
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    categoryOnlyData?.map((item, index) => {
                        return <div key={index} className='flex gap-2'>
                            <input type='checkbox' name={item} checked={category===item} value={item} onChange={handleCategoryChange}></input>
                            <button className='cursor-pointer uppercase'>{item}</button>
                        </div>
                    })
                }
            </div>

            <h1 className='mt-5 font-semibold text-xl'>Brand</h1>
            <select className='bg-white w-full p-2 border-gray-200 border-2 rounded-md' value={brand}
            onChange={handleBrandChange}>
                {brandOnlyData?.map((item, index) => {
                    return <option key={index} value={item}>{item.toUpperCase()}</option>
                })}
            </select>

            <h1 className='mt-5 font-semibold text-xl'> Price Range</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor=''>Price Range:${priceRange[0]}-${priceRange[1]}</label>
                <input type="range" min={0} max={5000} onChange={(e) =>
      setPriceRange([priceRange[0], Number(e.target.value)])
    } value={priceRange[1]}></input>

            </div>
            <button className='bg-orange-400 text-white rounded-md p-1 mt-5 cursor-pointer' onClick={()=>{setSearch('');
            setCategory("All");
            setBrand('All');setPriceRange([0,5000])}}>Reset Filters</button>

        </div>
    )
}

export default FilterSection