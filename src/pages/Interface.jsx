import React from 'react'
import Nav from '../components/nav'

export default function Interface() {
  return (
    <section className="container bgLanding is--full">
      <Nav />
      <section className='relative  h-screen w-full text-50'>
        <aside className='w-full h-full flex flex-col gap-6 items-center justify-center '>
          <h1 className='font-euclid tracking-euclid font-normal text-center max-w-[785px]'>Découvrez tout les biens faits du bruit blanc</h1>
          <p className='font-satoshi tracking-satoshi font-normal text-center'>Découvrez l'harmonie du bruit blanc avec nos vinyles uniques. <br/> Que ce soit pour vous concentrer, méditer ou mieux dormir</p>
        </aside>
        <p className='absolute bottom-8 font-satoshi tracking-satoshi font-normal flex justify-center w-full'>Scroll</p>
      </section>
        <h1 className='font-euclid font-bold tracking-euclid'>POYZEET</h1>
        <h2 className='font-satoshi font-bold tracking-satoshi'>POYZEET</h2>
        <h3>POYZEET</h3>
        <h4>POYZEET</h4>
        <h5>POYZEET</h5>
        <p>POYZEET</p>
    </section>
  )
}
