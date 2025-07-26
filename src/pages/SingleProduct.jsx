import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const params = useParams();
  const {addToCart}=useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      const product = res.data.product;
      setSingleProduct(product);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const OriginalPrice=Math.round(singleProduct.price + (singleProduct.price * singleProduct.discount/100))
  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl text-xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">
                {singleProduct?.brand.toUpperCase()}/
                {singleProduct.category?.toUpperCase()}/{singleProduct.model}
              </div>
              <p className="text-xl text-orange-500 text-bold">${singleProduct.price} <span className="line-through text-gray-700 ">
                ${OriginalPrice}
              </span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-md mx-3">{singleProduct.discount}% discount</span></p>
              <p className="text-gray-600">{singleProduct.description}</p>
              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">Quantity:</label>
                <input type="number" min={1} value={1} className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"></input>
              </div>
              <div className="flex gap-4 mt-4 ">
                <button onClick={()=>{addToCart(singleProduct)}} className="px-6 py-2 flex gap-2 text-lg bg-orange-500 text-white rounded-md"><IoCartOutline className="h-6 w-6"/> Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{/* loading */}</div>
      )}
    </>
  );
};

export default SingleProduct;
