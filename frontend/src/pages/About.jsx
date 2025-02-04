import React from 'react'
import NewsletterBox from '../components/NewsLetterBox.jsx'
import Title from '../components/Title.jsx'
import {assets} from '../assets/frontend_assets/assets.js'
import { useEffect } from 'react'

const About = () => {
   useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="Store showcase" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We are a curated marketplace bringing together the best of local artisans and trending Instagram sellers. Our platform showcases unique footwear and accessories, carefully selected from trusted vendors who share our commitment to quality and style.</p>
          <p>By partnering with both established local craftsmen and emerging social media brands, we offer our customers exclusive access to both traditional expertise and contemporary trends. Each product in our collection represents the perfect blend of authenticity and modern style.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We aim to bridge the gap between talented local vendors, innovative online creators, and style-conscious consumers. Our goal is to provide a seamless shopping experience while supporting small businesses and independent designers, ensuring that every purchase tells a unique story of craftsmanship and creativity.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>Every product undergoes rigorous quality checks before listing. We personally verify our vendors' credentials and product quality, ensuring you receive authentic items that meet our high standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Shop the best of local and Instagram sellers in one place. Our curated collection saves you time while offering a diverse range of footwear and accessories from trusted sources.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Our dedicated team ensures smooth communication between vendors and customers. We handle all aspects of your shopping experience, from product inquiries to delivery tracking.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About