 
import React, { useContext,useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {

    const [visible,setVisible] = useState(false);
    const {setshowSearch,getCartCount}=useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5  font-medium ">
       <Link to="/">
      <img src={assets.logo} className=" w-[200px]" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/mens" className="flex flex-col items-center gap-1 ">
          <p>Men</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/womens" className="flex flex-col items-center gap-1">
          <p>Women</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/kids" className="flex flex-col items-center gap-1">
          <p>Kids</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
       
        <img onClick={()=>setshowSearch(true)} src={assets.search_icon} alt="search_icon" className="w-5  cursor-pointer" />
      

        <div className="group relative">
           <Link to="login"> <img src={assets.profile_icon} alt="profile_icon" className="w-5 cursor-pointer" /></Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
                 <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                    <p className="cursor-pointer hover:text-black "> My Profile</p>
                    <p className="cursor-pointer hover:text-black "> Orders</p>
                    <p className="cursor-pointer hover:text-black "> Logout</p>
                 </div>
            </div>
        </div>
        <Link to="./cart" className="relative">
        <img src={assets.cart_icon} alt="cart_icons" className="w-5 min-w-5"/>
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu_icons" className="w-5 cursor-pointer sm:hidden " />
      </div>
      {/* Side bar Menu for Smaller Screen  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
                <img src={assets.dropdown_icon} alt="drop_down_menu " className="h-4 rotate-180"  />
                <Link to="./"><p>Back</p></Link>
            </div>
             <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
             <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
            
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
