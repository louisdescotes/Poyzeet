"use client";
import { useRef } from "react";
import TextApparitionText from "../texts/TextApparitionText";
import TextApparitionTitle from "../texts/TextApparitionTitle";
import { useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <footer className="flex items-end pb-10 h-[50svh] w-full bg-950 text-50">
      <aside ref={ref} className="mx-10">
        {isInView && (
          <>
            <TextApparitionTitle delay={.2}>Poyeet</TextApparitionTitle>
            <nav>
              <TextApparitionText delay={.8}>Accueil</TextApparitionText>
              <TextApparitionText delay={.9}>Explications</TextApparitionText>
              <TextApparitionText delay={1}>Avantages</TextApparitionText>
              <TextApparitionText delay={1.1}>Shop</TextApparitionText>
            </nav>
          </>
        )}
      </aside>
    </footer>
  );
}
