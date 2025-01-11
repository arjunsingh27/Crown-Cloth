import React, { useEffect, useState }  from "react";
import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const Hero = () => {
  
  const location = useLocation();
  const [image,setImage]=useState(assets.hero_img)
  useEffect(()=>{
       if(location.pathname=="/"){
        setImage(assets.women_cover_hero);
       }else{
        setImage(assets.hero_img)
       }
  },[location]);
  console.log(location.pathname);
  return (
    <div className={` flex flex-col sm:flex-row border border-gray-400  `}>
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-full md:w-11 h-[2px] bg-[#414141] "></p>
            <p className="font-medium text-sm md:text-base ">OUR BEST SELLER</p>
          </div>
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            {" "}
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base"> Shop NN</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img src={image} alt="" className="w-full lg:w-1/2 "/>
    </div>
  );
};

export default Hero;
