// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";  // Corrected import
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { setSearchTerm } from "../redux/ProductSlice";
import { useDispatch } from "react-redux";



export default function Navbar() {

 
  const[search,setSearch]=useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch =(e) =>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }
  return (
    <nav className="bg-white shadow-md py-5">
      <div className="container px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div>
          <Link to={'/'}>E-shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="search product" className="w-full border-black border px-4 py-2" onChange={(e)=>setSearch(e.target.value)} />
            <CiSearch className="absolute top-3 right-3 text-red-500 cursor-pointer" />
          </form>
        </div>
        <div className="flex items-center gap-4">
          <Link to={'/cart'}>
            <IoCart className="text-2xl" />
          </Link>
          <Link to={'/login'}><button >login </button></Link>|  <Link to={'/register'}><button>Register</button></Link>
          <button className="black md:hidden"><FaUser /></button>
        </div>
      </div>
      <div className="flex justify-center py-3 font-bold space-x-10 text-sm">
        <Link to='/' className="hover:underline">home</Link>
        <Link to='/shop' className="hover:underline">shop</Link>
        <Link to='/contact' className="hover:underline">contact</Link>
        <Link to='/about' className="hover:underline">about</Link>
      </div>
      
      
      
    </nav>
  );
}
