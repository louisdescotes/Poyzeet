import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import Sources from '@/components/sources'

export default function page() {
  return (
    <section className=' image h-screen w-full'>
      <Carousel />
      <Sources />
      <Footer />
    </section>
  )
}
