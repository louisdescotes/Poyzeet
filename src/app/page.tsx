import CallToBuy from '@/components/callToBuy'
import CardContainer from '@/components/cardContainer'
import Carousel from '@/components/carousel'
import Footer from '@/components/footer'
import Landing from '@/components/landing'
import Presentation from '@/components/presentation'
import Preview from '@/components/preview'
import Sources from '@/components/sources'

export default function page() {
  return (
    <section className=' image h-screen w-full'>
      <Landing />
      <Presentation />
      <Preview />
      <CardContainer />
      <Carousel />
      <Sources />
      <CallToBuy />
      <Footer />
    </section>
  )
}
