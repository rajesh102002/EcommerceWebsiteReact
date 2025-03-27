 import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
 import { Link } from "react-router";

export default function Footer(){

    return(
        <footer className="text-white bg-gray-800 py-4 px-4 md:px-16 lg:px-24">

            <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto gap-8">
                <div>
                    <h3 className=" text-xl font-semibold">e-shop</h3>
                    <p className="mt-3">your one-step for all your needs.shop with use and experience the best omline 
                        shoping experiences
                    </p>
                </div>
                <div className="flex flex-col md:items-center">
                    <h4 className=" text-lg font-semibold">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link to={'/'} className="hover:underline">Home</Link></li>
                        <li><Link to={'/shop'} className="hover:underline">Shop</Link></li>
                        <li><Link className="hover:underline">Contact</Link></li>
                        <li><Link className="hover:underline">About</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Follow us</h4>
                    <div className=" flex py-3 space-x-2  mt-4">
                        <a href="" className="hover:text-gray-400"><FaFacebook/></a>
                        <a href="" className="hover:text-gray-400"><FaTwitter/></a>
                        <a href="" className="hover:text-gray-400"><FaGithub/></a>
                        <a href="" className="hover:text-gray-400"><FaLinkedin/></a>
                    </div>
                    <form className="pt-6 space-x-3 flex justify-center items-center ">
                        <input type="text" placeholder="email" className="px-2 w-full rounded-1-lg bg-gray-800 border border-gray-600"/>
                        <button className=" hover:bg-sky-500 border rounded-md px-3">subscribe</button>
                        
                    
                    </form>
                </div>
            </div>
        </footer>
    )
}