import BlackArrows from '@/components/arrows/blackArrows'
import WhiteArrows from '@/components/arrows/whiteArrows'
import BlackButton from '@/components/buttons/blackButton'
import WhiteButton from '@/components/buttons/whiteButton'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className=''>Les tests</h1>
      <WhiteButton text="Button#1" />
      <BlackButton text="Button#2"/>
      <BlackArrows />
      <WhiteArrows />
      <Image src={"./blackLogo.svg"} alt='photodelogo' width={100} height={100} />
      <Image src={"./whiteLogo.svg"} alt='photodelogo' width={100} height={100} />
      <Image src={"./simpleBlackLogo.svg"} alt='photodelogo' width={25} height={25} />
      <Image src={"./simpleWhiteLogo.svg"} alt='photodelogo' width={25} height={25} />
    </div>
  )
}
