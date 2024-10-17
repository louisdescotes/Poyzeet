import BlackArrows from "../arrows/blackArrows";
interface Props {
 title : string,
 desc: string,
 link: string,
}
export default function SourcesLink({ title, desc, link} : Props) {
  return (
   <a href={link} className="flex justify-between items-start">
      <article className="flex gap-28">
       <h3 className="title3 text-950 max-w-xs">{title}</h3>
       <p className="text2 text-950 max-w-xl">{desc}</p>
      </article>
      <BlackArrows />
    </a>
  )
}
