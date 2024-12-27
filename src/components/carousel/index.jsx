import Cards from "../cards"

export default function Carousel() {
  return (
    <section className="relative flex flex-col items-center gap-10 py-10 bg-[#101010] text-50 bgBlackPadding">
      <h3>Ils en parlent pour vous</h3>
      <aside className="relative overflow-hidden w-full flex flex-col gap-6">
      <div className="bg-[#101010] absolute -left-20 top-0 h-full blur-xl w-40 z-10"/>
      <div className="bg-[#101010] absolute -right-20 top-0 h-full blur-xl w-40 z-10"/>
        <Cards img="test.jpeg" name='John Doe' title="Très bonne qualité" subtitle="Le disque est bien pressé, et la pochette est magnifique." number='5' />
        <Cards reverse={true} img="test.jpeg" name='John Doe' title="Très bonne qualité" subtitle="Le disque est bien pressé, et la pochette est magnifique." number='5' />
      </aside>
    </section>
  )
}
