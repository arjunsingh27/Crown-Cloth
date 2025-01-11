import React from 'react'
import NewsletterBox from '../components/NewsLetterBox.jsx'
import Title from '../components/Title.jsx'
import {assets} from '../assets/frontend_assets/assets.js'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum totam libero temporibus nemo error repellat omnis nihil earum reprehenderit? Consequatur, beatae. Magnam aperiam praesentium suscipit accusantium ratione optio, vel ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, sunt. Explicabo blanditiis nobis tempore, cum sint libero sequi a molestias aperiam similique id ex quisquam quae dolore atque, minima qui.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit ab eos ullam, distinctio porro similique optio laboriosam quisquam hic molestias facere, ut, nostrum impedit vero ea repellendus dolore? Recusandae!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance :</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quaerat at, maiores quisquam, lamsse illum velit. In!</p>

      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convinience :</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quaerat at, maiores quisquam, lamsse illum velit. In!</p>
        
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service :</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quaerat at, maiores quisquam, lamsse illum velit. In!</p>
        
      </div>
    </div>
     <NewsletterBox/>
     
    </div>
  )
}

export default About