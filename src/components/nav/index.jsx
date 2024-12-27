import Store from "../../utils/store";
import Dots from "../dots";

export default function Nav() {
  const { openMenu, menu } = Store();

  return (
    <nav className="fixed top-5 left-0 px-10 py-2.5 w-full flex items-center justify-between text-50 z-50">
        <img src="/svg/logo.svg" alt="logo de l'entreprise" />
        <div onClick={openMenu} className="flex items-center gap-2 cursor-pointer z-50">
          <p>Menu</p>
          <Dots />
        </div>

        {menu && 
        <div className="fixed top-0 left-0 w-screen h-screen bg-black">
        </div>}
    </nav>
  )
}
