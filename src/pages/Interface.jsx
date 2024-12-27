import React from 'react'
import Nav from '../components/nav'
import Landing from '../components/landing'
import Carousel from '../components/carousel'

export default function Interface() {
  return (
    <section className="container bgLanding is--full">
      <Nav />
      <Landing />
      <Carousel />
        <h1 className='font-euclid font-bold tracking-euclid'>POYZEET</h1>
        <h2 className='font-satoshi font-bold tracking-satoshi'>POYZEET</h2>
        <h3>POYZEET</h3>
        <h4>POYZEET</h4>
        <h5>POYZEET</h5>
        <p>POYZEET</p>
    </section>
  )
}
