// Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/ProductSlice";
import Hero from '../assets/Image/8197639.jpg';
import Bold from '../assets/Image/5227219.jpg';
import InfoContent from "../components/InfoContent";
import CategorySection from "../components/CategorySection";
import { Categories, MockData } from "../assets/mockData";  // Correct import
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import { Carousel } from "flowbite-react";


export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(MockData)); // Dispatching the mock data
  }, [dispatch]);

  return (
    <>
      <div className="container py-4 flex flex-col md:flex-row px-4">
        <div className="w-full md:w-3/12">
          <div className="bg-red-500 text-white text-xs font-bold py-2.5 px-2">
            SHOP BY CATEGORY
          </div>
          <ul className="bg-gray-500 py-2 text-white border space-y-4 h-48 px-3">
            {Categories.map((category, index) => ( // Using Categories here
              <li key={category + index} className="flex item-center text-sm font-medium">
                <div>{category}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full md:w-full">
       
          <img src={Hero} className="h-full w-full mx-0 md:mx-3 " />
         
          {/* <div className="absolute left-8 top-8 md:top-20 ">
            <p className=" mb-4">Code with your self</p>
            <h2 className="text-3xl mt-2.5 font-bold ">Welcome To E-Shop</h2>
            <p className="text-xl mt-2.5 font-bold ">Million+Product</p>
            <button className="bg-red-500 text-white mt-5 hover:bg-red-700 px-3 duration-700 hover:scale-110">
              SHOP NOW
            </button>
          </div> */}
           
        </div>
      </div>

      <InfoContent />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="font-bold text-2xl mb-5 text-center">Top products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.products.slice(0, 5).map((product) => (
            <ProductCard product={product}/>// Displaying products
          ))}
        </div>
        
      </div>
      <Shop/>
    </>
  );
}
