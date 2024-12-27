import Star from "../stars";
import Avis from "../../json/avis.json";
import "./index.css"

export default function Cards({ reverse }) {
  return (
    <section className="flex items-center justify-center gap-24 overflow-hidden ">
      {Avis.map((items, index) => (
        <div key={index} className={`flex items-center gap-6 min-w-96 h-full ${reverse ? "animation" : "reverse-animation"}`}>
          <div className="flex flex-col items-center gap-1 text-center">
            <img
              className="h-10 w-10 rounded-full"
              src={`/${items.img}`}
              alt="Personne"
            />
            <p>{items.name}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <h5>{items.title}</h5>
              <Star number={items.number} />
            </div>
            <p className="max-w-64">{items.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
