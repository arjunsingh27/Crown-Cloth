 import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
 
 const BestSeller = () => {

     const {products} = useContext(ShopContext);
     console.log(products);
     const [bestSeller,setBestSeller]=useState([]);

     useEffect(() => {
        const bestProducts = products.filter((item) => item.bestseller);
        setBestSeller(bestProducts.slice(0, 5));
        console.log(bestProducts);
    }, [products]); // Add 'products' here
    

   return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
               
            <Title text1={'BEST'} text2={'SELLER'}/> 
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600"></p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur libero harum non nes 
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-4 '>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    />
                ))
            }

        </div>

    </div>
   )
 }
 
 export default BestSeller