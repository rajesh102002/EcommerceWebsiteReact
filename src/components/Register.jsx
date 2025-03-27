export default function Register(){

    return(
        <div className="px-28 pb-20 mt-12">
        <h2 className="text-2xl font-bold mb-4">Sing up</h2>
        <form>
        <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="email" value="" className="w-full px-3 py-2 border" placeholder="enter your name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">email</label>
                <input type="email" value="" className="w-full px-3 py-2 border" placeholder="enter your email" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">password</label>
                <input type="password" className="w-full px-3 py-2 border" placeholder="enter password"></input>
            </div>
            
            <div className="mb-4">
                <button className="w-full bg-red-600 text-white py-2">Sign up</button>
            </div>
        </form>
        <div className="text-center">
        <span className="text-gray-700"> already have an account?</span>
        <button className=" text-red-800" > Login</button>
        </div>
    </div>
    )
}
