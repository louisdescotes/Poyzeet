interface Props {
  number: number;
  title: string;
  text: string;
}
export default function AdvantagesList({
  number,
  title,
  text,
} : Props) {
  return (
    <section className="flex items-start gap-32 my-8 mx-10">
      <aside className="bg-200 w-[25rem] h-56 font-bold text-9xl pl-4 capitalize">
        {number}.
      </aside>
      <article className="mt-10 flex flex-col gap-3.5 max-w-lg">
        <h4 className="font-bold text-3xl">{title}</h4>
        <p className="text-base">{text}</p>
      </article>
    </section>
  );
}
