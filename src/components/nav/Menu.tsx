"use client"
import { useOpenMenu } from "@/store";
import Image from "next/image";

export default function Menu() {

  const { toggleMenu } = useOpenMenu()

  return (
    <nav 
    onClick={toggleMenu}
    className="flex items-center gap-1.5 cursor-pointer">
      Menu
      <Image src={"/dot.svg" } alt="menu " width={12} height={12} />
    </nav>
  )
}
