import React from 'react'
import Landing from '../components/landing'
import Video from '../components/video'
import Footer from '../footer'
import Carousel from '../components/carousel'
import NewsLetter from '../components/newletter'
import Presentation from '../components/presentation'

export default function Interface() {
  return (
    <section className="w-screen h-full ">
      <Landing />
      <Video />
      <Presentation />
      <div className='h-screen' />
      <div className='h-screen' />
      <Carousel />
      <NewsLetter />
      <Footer />
    </section>
  )
}
