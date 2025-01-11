import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const 
ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext);
  

  return (
    <div className=''>
    <Link className="text-gray-700 cursor-pointer " to={`/product/${id}`}>
    <div className="overflow-hidden ">
    <img 
  src={image[0]} 
  alt="img" 
  // All Collection Product Image
  className=" w-[390px]  h-[450px] hover:scale-110 transition object-contain " 
/>

    </div>

    <p className='pt-3 pb-1 text-sm '>{name}</p> 
    <p className='text-sm'>{currency}{price}</p>
    </Link>
    </div>
     
  
  )

}

export default ProductItem