import FormNewletter from "./form";
import NewsletterText from "./newsletter";

export default function Newsletter() {
  return (
    <section className="px-20 w-full h-full flex flex-col gap-4">
    <h2 className="title2 text-950">Newsletter</h2>
    <div className="flex items-start justify-between w-full h-full">
      <NewsletterText />
      <FormNewletter />
    </div>

   </section>

  )
}
