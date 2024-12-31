import "./style.css"
export default function NewsLetter() {
  return (
    <section className="px-[60px] w-full h-screen lg:h-[60svh] flex justify-center flex-col gap-4 bg-50 text-950 py-40 lg:pt-12">
      <h2>Newsletter</h2>
      <aside className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-start">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <h3 className="font-euclid tracking-euclid">Restez connecté</h3>
          <p className="font-satoshi tracking-satoshi max-w-80">En vous abonnant à la newsletter, vous recevrez des informations sur les bienfaits du bruit blanc et sur les nouveaux avantages qui ont été découverts. De plus, vous serez informé lors de la sortie d'un produit ou de réductions à venir.</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className=" flex flex-col w-full lg:justify-end lg:items-end">
            <div className="relative w-full lg:w-[80%]">
              <input className=" px-2 relative bg-50 h-9 w-[100%] border border-300 rounded-[4px]" type="text" name="email" id="email" />
              <label className="font-satoshi tracking-satoshi absolute -top-4 left-2 z-20 bg-50 p-0.5 px-2 lg:items-end subP" htmlFor="email">Email adresse*</label>
            </div>
          </div>
          <div className="flex items-start gap-2 lg:justify-end">
            <input className="translate-y-0.5" type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept" className="w-full lg:max-w-[80%] font-satoshi tracking-satoshi subP">Lorem ipsum dolor sit amet. Et saepe rerum eum quasi beatae qui quos consequatur? </label>
          </div>
          <div className="w-full flex lg:justify-end">
            <button className="mt-8 py-2 px-5 flex items-center lg:justify-center rounded-lg border border-500 text-50 font-satoshi tracking-satoshi">S'abonner</button>
          </div>
        </div>
      </aside>
    </section>
  )
}
