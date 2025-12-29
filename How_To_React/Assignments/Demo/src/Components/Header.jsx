import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

function Header() {
    return (
        <div className="bg-amber-100 text-black flex justify-between p-5">
            <h1 className="flex justify-center items-center text-4xl font-bold gap-2 px-5">ShopKart</h1>
            <div className="p-3 flex gap-5 px-5 items-center text-xl">
                <Link to="/" className='text-decoration-none flex justify-center items-center'><FaHome />
                    Home</Link>
                <Link to="/product" className='text-decoration-none flex justify-center items-center'><IoMdCart />
Products</Link>
                <Link to="/contact" className='text-decoration-none flex justify-center items-center'><MdPhoneCallback />Contact</Link>
                <Link to="/about" className='text-decoration-none flex justify-center items-center'>About</Link>
                <Link to="/signup" className='text-decoration-none border p-2 rounded-xl flex justify-center items-center'>SignUp</Link>
                <Link to="/login" className='text-decoration-none border p-2 rounded-xl flex justify-center items-center'>Login</Link>
            </div>
        </div>
    )
}

export default Header
