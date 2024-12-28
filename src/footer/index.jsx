export default function Footer() {
  return (
    <footer className="bg-950 text-50 w-full h-[60svh] py-16 px-12">
      <h1 className="font-euclid tracking-euclid font-semibold">POYZEET</h1>
      <nav className="flex flex-col gap-2 font-satoshi tracking-satoshi font-normal pt-4">
        <a className="no-underline" href="#index">Accueil</a>
        <a className="no-underline" href="#shop">Shop</a>
        <a className="no-underline" href="#avantages">Avantages</a>
        <a className="no-underline" href="#explications">Explications</a>
      </nav>
    </footer>
  )
}
