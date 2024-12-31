import React from 'react'
import Slider from './carousel'
import SliderReverse from './carouselReverse'

export default function Carousel() {
  return (
    <section className='relative flex flex-col justify-center  h-[70svh] w-full bg-[#101010] '>
        <div className='absolute w-full bg-[#101010] h-12 -top-5 -rotate-2'/>
        <div className='absolute w-full bg-[#101010] h-12 -bottom-5 -rotate-2'/>

      <h2 className='w-full pl-2 lg:ml-16 my-10 font-euclid tracking-euclid font-normal text-50'>Ils en parlent pour vous</h2>
      <Slider />
      <div className='py-2'/>
      <SliderReverse />
      <div className='py-2'/>
    </section>
  )
}
