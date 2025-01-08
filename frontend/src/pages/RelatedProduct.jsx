import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const RelatedProduct = ({ category, subCategory ,productId }) => {
  console.log(category, subCategory);
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      productsCopy = productsCopy.filter((item) => item._id !== productId);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  useEffect(() => {
    console.log(related);
  }, [related]);

  

  return (
    <div className='my-24'>
      <div className="text-center text-3xl py-2"> 
        <Title text1={'Related'} text2={"Products"}/>
      </div>
<div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
  {related.map((item,index)=>(
    <ProductItem
    key={index}
    id={item._id}
    name={item.name}
    price={item.price}
    image={item.image}
    />
  ))}
</div>
       
    </div>
  );
};

export default RelatedProduct;
