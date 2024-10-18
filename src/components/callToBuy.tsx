import React from 'react'
import WhiteButton from './buttons/whiteButton'

export default function CallToBuy() {
  return (
    <section className='flex flex-col items-center justify-center gap-9 w-full h-screen calltobuy'>
      <h2 className='title2 text-50 text-center max-w-sm'>Transformez votre quotidien en une oasis de sérénité !</h2>
      <WhiteButton text='Achetez maintenant' />
    </section>
  )
}
