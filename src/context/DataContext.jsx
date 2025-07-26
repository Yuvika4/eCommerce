import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext=createContext(null);

export const DataProvider =({children})=>{
    const [data,setData]=useState();

const fetchProducts=async()=>{
try{
 const response=await axios.get(`https://fakestoreapi.in/api/products`);
 const productsData=response.data.products;
 setData(productsData)
}
catch(e){
    console.log(e);
}
}

  const getUniqueCategory=(data,property)=>{
        let newVal= data?.map((curElem)=>{
            return curElem[property]
        })
        newVal=["All",...new Set(newVal)]
        return newVal;
    }

    const categoryOnlyData = getUniqueCategory(data,"category");
    const brandOnlyData=getUniqueCategory(data,"brand")

    return <DataContext.Provider value={{data, setData,fetchProducts,categoryOnlyData,brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData=()=>useContext(DataContext);