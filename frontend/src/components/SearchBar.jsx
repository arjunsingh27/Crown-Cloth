import React, { useContext, useEffect, useState } from 'react'; // Import `useContext`
import { ShopContext } from '../context/ShopContext'; // Import context
import { assets } from '../assets/frontend_assets/assets'; // Import assets
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setsearch, showSearch, setshowSearch } = useContext(ShopContext);
    const [Visible,setVisible]=useState(false);
    const location = useLocation();
    
    useEffect(()=>{
      
        if(location.pathname.includes('collection') || location.pathname.includes('mens')  || location.pathname.includes('kids')){
            setVisible(true);

           }else{
            setVisible(false);
           }

    },[location]);

    return showSearch && Visible ? (
        <div className='  text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-3/2'>
                <input
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    type="text"
                    className="flex-1 outline-none bg-inherit text-sm"
                    placeholder="Search..."
                />
                <img
                    src={assets.search_icon} // Ensure this path points to the correct file
                    className='w-4'
                    alt="Search Icon"
                />
            </div>
            <img
                onClick={() => setshowSearch(false)} // Corrected function to hide search bar
                src={assets.cross_icon} // Add `close_icon` to assets or provide a fallback
                alt="Close"
                className="inline w-3 cursor-pointer"
            />
        </div>
    ) : null;
};

export default SearchBar;
