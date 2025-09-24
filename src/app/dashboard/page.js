import React from 'react'
import HeroSection from "../../Components/Hero/HeroSection";
import FruitsSection from '../../Components/fruits/FruitsSection';
const page = () => {
  return (
    <div className="font-sans min-h-screen ">
      <HeroSection/>
        <FruitsSection />
    </div>
  )
}

export default page