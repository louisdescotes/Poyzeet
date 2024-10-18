import Card from "./cards";

export default function CardContainer() {
  return (
    <section className="h-screen w-full flex items-center justify-between px-40 ">
      <Card title="Relaxation Pure" desc="Conçu pour créer une ambiance sereine, il favorise la détente et le lâcher-prise. Idéal pour vos moments de méditation ou de lecture." image="card.jpg"/>
      <Card title="Concentration Optimale" desc="Ce vinyle génère un son constant qui masque les distractions et crée un environnement de travail apaisant. Parfait pour les sessions d'étude ou de travail." image="card.jpg"/>
      <Card title="Nuit Tranquille" desc="Ce vinyle émet un bruit blanc apaisant qui atténue les sons perturbateurs, vous aidant à vous endormir plus rapidement et à profiter d'une nuit de repos réparateur." image="card.jpg"/>
    </section>
  )
}
