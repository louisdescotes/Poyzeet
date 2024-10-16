"use client"

import { useEffect, useState } from "react";

interface PropsLoader {
 title : string,
 active ?: number,
 time?: number,
}

interface PropsCarouselText {
  information : number,
 }

 const carouselInformation = [
  {
    titleLoader: "Concentration",
    titleCarousel: "Concentration. ",
    descCarousel:
      "Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur?",
  },
  {
    titleLoader: "Méditation",
    titleCarousel: "Méditation",
    descCarousel:
      "Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? Lorem ipsum dolor sit amet.",
  },
  {
    titleLoader: "Endormissement",
    titleCarousel: "Endormissement",
    descCarousel:
      "Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur?",
  },
];


function Loader({ title} : PropsLoader) {
  return <div className="cursor-pointer ">
    <div className="relative w-[285px] h-1 bg-200">
      {/* <div className="absolute top-0 w-4/12 h-full bg-400" /> */}
    </div>
    <p className="text1 mt-1">{title}</p>
  </div>;
}

function CarouselText({ information} : PropsCarouselText) {
  const { titleCarousel, descCarousel } = carouselInformation[information];

  return (
   <aside className="flex flex-col gap-1.5 w-full min-h-48">
    <h5 className="title2 max-w-[600px]">{titleCarousel } </h5>
    <p className="text1 max-w-[600px]">{descCarousel}</p>
  </aside>
  );
}

export default function Carousel() {
  const [active, setActive] = useState(0)
  
  useEffect(() => {
    const increment = () => {
      setActive(prevActive => prevActive >= 2 ? prevActive - 2 : prevActive + 1)
    }
    const interval = setInterval(increment, 3000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <section className="text-950 flex flex-col justify-center items-center gap-12 w-8/12 mx-auto h-full ">
      <nav className="flex items-center justify-between w-full gap-10">
        {carouselInformation.map((items, index) => {
          return <Loader key={index} title={items.titleLoader}/>
        })}
      </nav>
      <CarouselText information={active} />
    </section>
  );
}
