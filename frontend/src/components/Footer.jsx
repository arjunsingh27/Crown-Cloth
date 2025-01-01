import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32 ' />
                <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5"> Company</p>
                <ul className="flex flex-col text-gray-600 gap-1 ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Company</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5"> Get in Touch</p>
                <ul className='flex flex-col text-gray-600 gap-1'>
                    <li>+123456789</li>
                    <li>+123456789</li>
                </ul>
            </div>
           
        </div>
        <div>
                <hr />
                <p className="py-5 text-center text-sm"> Copyright 2023@ foreever All right Reserved</p>
            </div>
        </>
    )
}

export default Footer