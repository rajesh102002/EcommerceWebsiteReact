import React from "react"
import { FaStar } from "react-icons/fa"

export default function ProductCard({product}
){

    return(
        <div className=" bg-white shadow rounded relative border transform transition-transform duration-300 hover:scale-105 justify-center text-center">
            <img src={product.Img} alt="" className="w-full object-contain h-48"/>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <div className=" flex items-center justify-center mt-2 ">
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
            </div>

            <div className="flex justify-center items-center absolute right-2 bottom-4 w-8 h-8 bg-red-600 group rounded-full text-sm hover:w-32 text-white cursor-pointer">
                <span className="group-hover:hidden">+</span>
                <span className="hidden group-hover:block">add to cart</span>
            </div>
        </div>
    )
}