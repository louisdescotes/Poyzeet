import Cards from "../cards";

export default function Carousel() {
  return (
    <section>
      <h3>Ils en parlent pour vous</h3>
      <aside>
        <Cards img="test.jpeg" name='John Doe' title="Très bonne qualité" subtitle="Le disque est bien pressé, et la pochette est magnifique." number='5' />
      </aside>
    </section>
  )
}
