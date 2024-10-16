import Image from "next/image";
import WhiteButton from "./buttons/whiteButton";

export default function Menu() {
  return (
    <nav className=" h-16 w-10/12 fixed top-5 left-[10%] flex items-center justify-between px-4 rounded-lg border border-900 bg-gradientMenu">
     <a href="#index">
      <Image src={"./whiteLogo.svg"} alt='photodelogo' width={100} height={100} />
     </a>
      <div className="h-12 w-[1px] absolute left-48 bg-200"/>
      <nav className="px-20 flex items-center justify-center gap-20 flex-1 text-xl font-normal text-50">
       <a href="#explications">Explications</a>
       <a href="#advantages">Avantages</a>
       <a href="#contact">Contact</a>
      </nav>
      <a href="#ctb">
      <WhiteButton text="Acheter"/>
      </a>
    </nav>
  )
}
