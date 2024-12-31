import React from 'react'
import Landing from '../components/landing'
import Video from '../components/video'
import Footer from '../footer'
import Carousel from '../components/carousel'
import NewsLetter from '../components/newletter'

export default function Interface() {
  return (
    <section className="w-screen h-full bgLanding ">
      <Landing />
      <Video />
      <div className='h-screen' />
      <Carousel />
      <NewsLetter />
      <Footer />
    </section>
  )
}
