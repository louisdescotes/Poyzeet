import Landing from '@/components/landing'
import Footer from '@/components/nav/Footer'
import Header from '@/components/nav/Header'
import Test from '@/components/test'

export default function page() {

  return (
    <section className=' image h-screen w-full'>
      <Header />
      <Landing />
      <Test />
      <Footer/>
    </section>
  )
}
