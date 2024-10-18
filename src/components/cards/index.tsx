import Image from 'next/image'

interface Props {
 title: string;
 desc: string;
 image: string;
}

export default function Card({ title, desc, image} : Props) {
  return (
    <aside className='flex flex-col gap-4 max-w-72'>
     <Image src={`/${image}`} alt='image de vinyls' width={285} height={385}/>
     <article className='flex flex-col gap-1.25'>
      <h4 className='title4 text-950'>{title}</h4>
      <p className='text2 text-950'>{desc}</p>
     </article>
    </aside>
  )
}
