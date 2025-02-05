import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setshowSearch, getCartCount, navigate, token, setToken, cartItems , setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
    toast.success("Logout Success");
    
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-[200px]" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {["mens", "womens", "kids", "accessories", "collection"].map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className="flex flex-col items-center gap-1"
          >
            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setshowSearch(true)}
          src={assets.search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative z-10">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="profile_icon"
            className="w-5 cursor-pointer"
          />

          {/* Dropdown Menu */}

          {token && (
            <div className="hidden group-hover:block absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          )}

        </div>
        
        <Link to="./cart" className="relative">
          <img src={assets.cart_icon} alt="cart_icon" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu_icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar Menu for Smaller Screens */}
      <div
        className={`fixed z-50 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown_menu"
              className="h-4 rotate-180"
            />
            <Link to="/">
              <p>Back</p>
            </Link>
          </div>
          {["mens", "womens", "kids", "accessories", "collection", "about", "contact"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={`/${item}`}
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;