import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import React from "react"



export default function FilterData(){
        const filterProducts = useSelector(state => state.product.filteredData)
    return(
         <div className="container mx-auto   py-4 flex-col md:flex-row px-4">
           
               <h2 className="font-bold text-2xl mb-5 text-center justify-center">Shop</h2>
               <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                 {filterProducts.map(((product) => (
                   <ProductCard product={product}/>// Displaying products
                 )))}
               </div>  
               
                
            
         </div>
    )
}