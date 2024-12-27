import React from 'react'
import Landing from '../components/landing'
import Carousel from '../components/carousel'
import Video from '../components/video'

export default function Interface() {
  return (
    <section className="w-screen h-full bgLanding ">
      <Landing />
      <Video />
      <div className='h-screen' />
      <div className='h-screen' />
      <Carousel />
      <div className='h-screen bg-50' />
      <div className='h-screen bg-950' />
    </section>
  )
}
