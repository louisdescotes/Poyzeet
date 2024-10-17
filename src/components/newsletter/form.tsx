import BlackButton from "../buttons/blackButton";

export default function FormNewletter() {
  return (
    <aside className="max-w-lg">
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label className="text2 text-950" htmlFor="email">Adresse email*</label>
          <input className="rounded-md border border-300 bg-50 p-1" type="text" id="email" />
        </div>
        <div className="flex items-start ">
          <input className="mr-3 mt-1.5" type="checkbox" name="agree" id="agree" />
          <label className="text2 text-950 cursor-pointer" htmlFor="agree">Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? </label>
        </div>
        <div className="mt-4">
          <BlackButton text="S’abonner" />
        </div>
      </form>
      
    </aside>
  )
}
