import Image from "next/image";

export default function Preview() {
  return (
    <section className="preview w-fulll h-screen">
      <aside className="h-full flex justify-between px-20 py-20 items-end">
       <article className="flex flex-col max-w-xl gap-1.25">
        <h2 className="title2 text-50">Plongez dans l'univers sonore</h2>
        <p className="text1 text-50">Découvrez nos trois vinyles uniques, chacun conçu pour améliorer votre bien-être. Que vous cherchiez à vous détendre, à vous concentrer ou à trouver le sommeil, Poyzeet a le vinyle parfait pour vous. Écoutez les sons apaisants du bruit blanc et transformez votre quotidien en une expérience sonore enrichissante.</p>
       </article>
       <div className="flex gap-2.5">
        <Image src={"/card.jpg"} alt="image" width={100} height={100} />
        <Image src={"/card.jpg"} alt="image" width={100} height={100} />
       </div>
      </aside>
    </section>
  )
}
