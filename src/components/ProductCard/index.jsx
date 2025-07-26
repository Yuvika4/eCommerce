import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const navigate=useNavigate();
    const {addToCart,cartItem}=useCart();
    return (
        <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl
     transition-all p-2 h-max'>
            <img src={product.image} alt={product.brand} className='bg-gray-100 aspect-square' onClick={()=>navigate(`/products/${product.id}`)}></img>
            <h1 className='line-clamp-2 font-semibold p-1'>{product.title}</h1>
            <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>
            <button  onClick={()=>addToCart(product)} className='bg-orange-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex md:gap-2 gap-1 items-center justify-center font-semibold'><IoCartOutline className='w-6 h-6'
            /> Add to cart</button>
        </div>
    )
}

export default ProductCard