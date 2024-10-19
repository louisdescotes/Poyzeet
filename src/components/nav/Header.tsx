"use client";

import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import { useOpenMenu } from "@/store";

export default function Header() {
  const { isOpen } = useOpenMenu();
  return (
    <>
      <nav className="fixed left-[5%] top-6 flex items-center mx-auto justify-between px-10 py-2.5 bg-50 w-[90%]">
        <Image width={17} height={24} src={"/simpleBlackLogo.svg"} alt="Logo" />
        <Menu />
      </nav>
      {isOpen && <section className="w-full h-screen bg-white">Open</section>}
    </>
  );
}
