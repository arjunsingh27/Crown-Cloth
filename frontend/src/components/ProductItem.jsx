import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const 
ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext);
  

  return (
    <div className=''>
    <Link className="text-gray-700 cursor-pointer " to={`/product/${id}`}>
    <div className="overflow-hidden bg-gray-100 rounded-xl ">
    <img 
  src={image[0]} 
  alt="img" 
  // All Collection Product Image
  className=" w-[390px]    h-[200px] lg:h-[300px]  hover:scale-110 transition object-cover " 
/>

    </div>

    <p className='pt-3 pb-1 text-sm '>{name}</p> 
    <p className='text-sm'>{currency}{price}</p>
    </Link>
    </div>
     
  
  )

}

export default ProductItem