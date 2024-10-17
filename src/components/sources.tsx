import SourcesLink from "./navSources";

export default function Sources() {
  return (
    <section className="mx-20 flex justify-center flex-col gap-16 h-screen">
      <SourcesLink
        title='"The Benefits of White Noise for Concentration and Sleep" - Sleep Foundation'
        desc="Cet article explique les différents bienfaits du bruit blanc sur la concentration et le sommeil. Il détaille comment le bruit blanc peut masquer les distractions sonores, favoriser l'endormissement et créer un environnement plus propice au travail"
        link="https://www.sleepfoundation.org/noise-and-sleep/white-noise"
      />

<SourcesLink
        title='"How White Noise Can Help You Focus" - Verywell Mind'
        desc="Très axé sur l'aspect productivité, l'article explore comment le bruit blanc peut améliorer la concentration en bloquant les sons distrayants. Il inclut aussi des conseils sur comment utiliser le bruit blanc efficacement dans différents contextes, comme les bureaux ouverts."
        link="https://www.verywellmind.com/how-white-noise-can-help-you-focus-5194143"
      />

<SourcesLink
        title='"What is White Noise and How Does it Work?" - Healthline'
        desc="Cet article fournit une définition claire du bruit blanc, ainsi que ses effets sur le cerveau. Il aborde les avantages pour les adultes et les bébés, en particulier dans les environnements bruyants ou pour les personnes souffrant d'insomnie."
        link="https://www.healthline.com/health/what-is-white-noise"
      />

<SourcesLink
        title='"The Science Behind White Noise and Sleep" - Psychology Today'
        desc="Il présente les recherches sur le bruit blanc et son efficacité pour améliorer le sommeil et réduire les troubles. L'article discute également des différentes sortes de bruit (blanc, rose, brun) et de leurs effets."
        link="https://www.psychologytoday.com/us/blog/white-matter/201908/the-science-behind-white-noise-and-sleep"
      />
    </section>
  );
}
