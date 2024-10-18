import Image from "next/image";

export default function Presentation() {
  return (
    <section className="h-screen w-full flex items-center justify-between px-20">
      <aside className="flex flex-col gap-1.25 max-w-xl">
       <h1 className="title1 text-950">Éveillez vos sens</h1>
       <p className="text1 text-950">Découvrez l'harmonie du bruit blanc avec nos vinyles uniques. Que ce soit pour vous concentrer, méditer ou mieux dormir, Poyzeet crée une ambiance apaisante qui enrichit votre quotidien. Plongez dans l'univers sonore de Poyzeet et transformez votre expérience.</p>
      </aside>
      <aside>
       <Image src={"/one.jpg"} alt="image" width={600} height={450} />
      </aside>
    </section>
  )
}
