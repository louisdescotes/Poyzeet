"use client";

import React from "react";
import Menu from "./Menu";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className=" z-50 fixed left-[5%] top-6 flex items-center mx-auto justify-between px-10 py-2.5  w-[90%]">
        <Image width={17} height={24} src={"/simpleBlackLogo.svg"} alt="Logo" />
        <Menu />
      </nav>
    </>
  );
}
