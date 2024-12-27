import Star from "../stars";
import Avis from "../../json/avis.json";

export default function Cards() {
  return (
    <section className="flex items-center justify-center gap-24 flex-wrap overflow-hidden">
      {Avis.map((items, index) => (
        <div key={index} className="flex items-center gap-6 w-fit h-full">
          <div className="flex flex-col items-center gap-1">
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
