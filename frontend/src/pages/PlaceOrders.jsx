import React, { useState, useContext } from 'react';
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const { navigate , backendUrl ,token , cartItems , setCartItems , getCartAmount , delivery_fee,products} = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const [fromData, setFromData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFromData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    try {
      let orderItems=[]
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo);
            }
          }
        }
          
      }
      console.log(orderItems);
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[-80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELEVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input 
            onChange={onChangeHandler} 
            name="firstName" 
            value={fromData.firstName} 
            type="text" 
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            placeholder="First Name" 
            required 
          />
          <input 
            onChange={onChangeHandler} 
            name="lastName" 
            value={fromData.lastName} 
            type="text" 
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full" 
            placeholder="Last Name" 
            required 
          />
        </div>
        <input 
          onChange={onChangeHandler} 
          name="email" 
          value={fromData.email} 
          type="email" 
          className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
          placeholder="Email" 
          required 
        />
        <input 
          onChange={onChangeHandler} 
          name="street" 
          value={fromData.street} 
          type="text" 
          className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
          placeholder="Street" 
          required 
        />
        <div className="flex gap-3">
          <input 
            onChange={onChangeHandler} 
            name="city" 
            value={fromData.city} 
            type="text" 
            className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
            placeholder="City" 
            required 
          />
          <input 
            onChange={onChangeHandler} 
            name="state" 
            value={fromData.state} 
            type="text" 
            className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
            placeholder="State" 
            required 
          />
        </div>
        <div className="flex gap-3">
          <input 
            onChange={onChangeHandler} 
            name="zipcode" 
            value={fromData.zipcode} 
            type="number" 
            className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
            placeholder="Zip Code" 
            required 
          />
          <input 
            onChange={onChangeHandler} 
            name="country" 
            value={fromData.country} 
            type="text" 
            className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
            placeholder="Country" 
            required 
          />
        </div>
        <input 
          onChange={onChangeHandler} 
          name="phone" 
          value={fromData.phone} 
          type="number" 
          className="border-gray-300 border rounded py-1.5 px-3.5 w-full" 
          placeholder="Phone Number" 
          required 
        />
      </div>
      {/* ------------------------Right Side------------------------- */}
      <div className="">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>    
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="payment_gateway" />
            </div>
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="razorpay" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div  className="w-full text-end mt-8">
            <button type='submit' className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;


// onClick={() => navigate('/orders')}