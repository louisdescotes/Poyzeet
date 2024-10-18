"use client";

import { act, useEffect, useState } from "react";

interface PropsLoader {
  title: string;
  active: number;
  onChange: (index: number) => void;
}

interface PropsCarouselText {
  information: number;
}

const carouselInformation = [
  {
    titleLoader: "Concentration",
    titleCarousel: "Boostez votre concentration. ",
    descCarousel:
      "Restez concentré, peu importe l'environnement. Le bruit blanc masque les distractions sonores et crée une atmosphère propice au travail ou à l'étude. Idéal pour maximiser votre productivité dans les espaces bruyants.",
  },
  {
    titleLoader: "Méditation",
    titleCarousel: "Plongez dans la méditation",
    descCarousel:
      "Plongez dans un état de calme profond. Grâce à son son constant et apaisant, le bruit blanc favorise la relaxation et vous aide à vous recentrer. Parfait pour vos séances de méditation ou de relaxation.",
  },
  {
    titleLoader: "Endormissement",
    titleCarousel: "Trouvez le sommeil facilement",
    descCarousel:
      "Dites adieu aux nuits agitées. Le bruit blanc crée un fond sonore stable qui masque les bruits gênants, facilitant ainsi l'endormissement et un sommeil plus profond.",
  },
];

function Loader({ title, active, onChange }: PropsLoader) {
  const isActive = carouselInformation[active].titleLoader === title;

  return (
    <div className="cursor-pointer" >
      <div className="relative w-[285px] h-1 bg-200">
        <div
          className={`absolute top-0 h-full w-full transition-all duration-[9800ms] origin-left ${
            isActive ? "bg-400 scale-x-100" : "bg-transparent w-0"
          }`}
        />
      </div>
      <p className="text1 mt-1">{title}</p>
    </div>
  );
}

function CarouselText({ information }: PropsCarouselText) {
  const { titleCarousel, descCarousel } = carouselInformation[information];

  return (
    <aside className="flex flex-col gap-1.5 w-full min-h-48">
      <h5 className="title2 max-w-[600px]">{titleCarousel} </h5>
      <p className="text1 max-w-[600px]">{descCarousel}</p>
    </aside>
  );
}

export default function Carousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const increment = () => {
      setActive((prevActive) =>
        prevActive >= 2 ? prevActive - 2 : prevActive + 1
      );
    };
    const interval = setInterval(increment, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-950 flex flex-col justify-center items-center gap-12 w-8/12 mx-auto h-2/4 ">
      <nav className="flex items-center justify-between w-full gap-10">
        {carouselInformation.map((items, index) => {
          return (
            <Loader key={index} title={items.titleLoader} active={active} />
          );
        })}
      </nav>
      <CarouselText information={active} />
    </section>
  );
}
