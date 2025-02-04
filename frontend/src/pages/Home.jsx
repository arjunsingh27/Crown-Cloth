import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import { useEffect } from 'react'
const Home = () => {
   useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  return (
    <>
    <Hero/>
    <LatestCollection/>
    <BestSeller />
    <OurPolicy/>
    <NewsLetterBox/>
    </>
    
  )
}

export default Home