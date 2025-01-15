import React, { useContext, useEffect, useState } from 'react';  
import { ShopContext } from '../context/ShopContext';  
import { assets } from '../assets/frontend_assets/assets';  
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setsearch, showSearch, setshowSearch } = useContext(ShopContext);
    const [Visible,setVisible]=useState(false);
    const location = useLocation();
    
    useEffect(()=>{
      
        if(location.pathname.includes('collection') || location.pathname.includes('mens')  || location.pathname.includes('kids') || location.pathname.includes('accessories') ){
            setVisible(true);

           }else{
            setVisible(false);
           }

    },[location]);
    //When Removing Visible in Accessories Search Bar is Working 
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
                    src={assets.search_icon}  
                    className='w-4'
                    alt="Search Icon"
                />
            </div>
            <img
                onClick={() => setshowSearch(false)}  
                src={assets.cross_icon}  
                alt="Close"
                className="inline w-3 cursor-pointer"
            />
        </div>
    ) : null;
};

export default SearchBar;
