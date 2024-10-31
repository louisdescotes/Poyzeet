import Landing from "@/components/landing";
import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";
import AdvantagesList from "@/components/sections/advantages/advantagesList";
import Description from "@/components/sections/description/Description";
export default function page() {
  return (
    <section className=" h-screen w-full">
      <Header />
      <Landing />
      <AdvantagesList
        number={1}
        title="Boostez votre concentration"
        text="Restez concentré, peu importe l'environnement. Le bruit blanc masque les distractions sonores et crée une atmosphère propice au travail ou à l'étude. Idéal pour maximiser votre productivité dans les espaces bruyants."
      />
      <AdvantagesList
        number={2}
        title="Plongez dans la méditation"
        text="Plongez dans un état de calme profond. Grâce à son son constant et apaisant, le bruit blanc favorise la relaxation et vous aide à vous recentrer. Parfait pour vos séances de méditation ou de relaxation."
      />
      <AdvantagesList
        number={3}
        title="Trouvez le sommeil facilement"
        text="Dites adieu aux nuits agitées. Le bruit blanc crée un fond sonore stable qui masque les bruits gênants, facilitant ainsi l'endormissement et un sommeil plus profond."
      />
      <Description />
      <Footer />
    </section>
  );
}
