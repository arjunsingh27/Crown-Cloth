import { assets } from "../assets/frontend_assets/assets";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const location = useLocation();
  const [image, setImage] = useState(assets.hero_img);

  useEffect(() => {
    setImage(location.pathname === "/" ? assets.women_cover_hero : assets.hero_img);
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: { 
      scale: 1.2,
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-lg shadow-lg bg-white"
    >
      <div className="flex flex-col sm:flex-row border border-gray-200">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-20 px-6 sm:px-12">
          <div className="text-[#414141] space-y-8">
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 overflow-hidden"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-11 h-[2px] bg-[#414141] origin-left"
              />
              <p className="font-medium text-sm md:text-base tracking-wide">
              OUR EXCLUSIVE SELECTION
              </p>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="prata-regular text-2xl sm:text-5xl lg:text-6xl leading-tight"
            >
              Stay Ahead of the Trends – Explore the Newest in Fashion!
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <p className="font-semibold text-sm md:text-base transform transition-all duration-300 ease-out group-hover:translate-x-2">
              Explore Our Collection
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                className="w-11 h-[1px] bg-[#414141] origin-left transform transition-all duration-300 ease-out group-hover:scale-x-110"
              />
            </motion.div>
          </div>
        </div>

        {/* Hero Right Side */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              <img 
                src={image} 
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;