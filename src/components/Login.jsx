import React from "react";

export default function Login (){

    return(
        <div className="px-28  pb-20 mt-12 ">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">email</label>
                    <input type="text" value="" className="w-full px-3 py-2 border" placeholder="enter your email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">password</label>
                    <input type="password" className="w-full px-3 py-2 border" placeholder="enter password"/>
                </div>
                <div className="mb-4 flex items-center  justify-between">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox"></input>
                        <span className="ml-2 text-gray-700">Remember me</span>
                    </label>
                    <a className="text-red-800"> forgot password</a>
                </div>
                <div className="mb-4">
                    <button className="w-full bg-red-600 text-white py-2" >Login</button>
                </div>
            </form>
            <div className="text-center m">
            <span className="text-gray-700"> dont have an account?</span>
            <button className=" text-red-800" > sign up</button>
            </div>
        </div>
    )
}