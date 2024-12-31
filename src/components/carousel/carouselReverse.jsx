import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import avis from "../../json/avis.json";
import "./style.css";

export default function SliderReverse() {
  const scroller = useRef();
  const wrapper = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = wrapper.current.scrollWidth / 2;
      const speed = 50; 

      gsap.set(wrapper.current, {
        x: `-${totalWidth}px`
      });

      gsap.to(wrapper.current, {
        x: `+=${totalWidth}`,
        duration: totalWidth / speed, 
        ease: "none", 
        repeat: -1,
        modifiers: {
          x: (x) => `${Number.parseFloat(x) % totalWidth}px`, 
        },
      });
    }, scroller);

    return () => ctx.revert();
  }, []);

  const doubledAvis = [...avis, ...avis]; 

  return (
    <section
      ref={scroller}
      className="scroller w-full overflow-hidden flex items-center text-50"
    >
      <div ref={wrapper} className="flex">
        {doubledAvis.map((item, index) => (
          <article
            key={index}
            className="avis font-satoshi  flex gap-4 mx-8 rounded h-fit "
            style={{ minWidth: "350px" }}
          >
            <div className="flex flex-col gap-2 items-center justify-center min-w-20">
              <img className="h-10 w-10" src={`/${item.img}`} alt="profile" />
              <p className="subP">{item.name}</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h5 className="font-medium">{item.title}</h5>
              <p className="font-normal subP">{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}