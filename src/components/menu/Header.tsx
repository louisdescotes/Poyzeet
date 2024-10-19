import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

export default function Header() {
  return (
    <nav>
     <Image width={17} height={24} src={"/simpleBlackLogo.svg"} />
      <Menu />
    </nav>
  )
}
