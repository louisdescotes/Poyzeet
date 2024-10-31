"use client";
import { motion, useInView } from "framer-motion";
import TextApparitionSubtitle from "@/components/texts/TextApparitionSubtitle";
import TextApparitionText from "@/components/texts/TextApparitionText";
import TextApparitionTitle from "@/components/texts/TextApparitionTitle";
import { useRef } from "react";

export default function Description() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  const imageHide = {
    visible: {
      transform: "translateY(-100%)",
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.5,
        delay: 0.4,
      },
    },
    hidden: {
      transform: "translateY(0%)",
    },
  };

  const image = {
    visible: {
      scale: 1.0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 1,
        delay: 0.4,
      },
    },
    hidden: {
      scale: 1.2,
    },
  };

  return (
    <section
      ref={ref} 
      className="flex items-center w-full h-screen bg-950 text-50 overflow-hidden"
    >
      <aside className="mx-10 w-3/4">
      {isInView && (
        <div className="max-w-3xl">
          <div className="mb-32">
            <TextApparitionSubtitle delay={isInView ? 0.6 : 0}>
              Qu'est ce que c'est ?
            </TextApparitionSubtitle>
          </div>
          <article className="mb-12">
            <div className="pl-[20%]">
              <TextApparitionTitle delay={isInView ? 1 : 0}>le bruit blanc</TextApparitionTitle>
            </div>
            <TextApparitionTitle delay={isInView ? 1.2 : 0}>
              mélange les fréquences
            </TextApparitionTitle>
            <TextApparitionTitle delay={isInView ? 1.4 : 0}>
              en un son apaisant.
            </TextApparitionTitle>
          </article>
          <article className="w-full flex justify-end items-start gap-4">
            <div className="maw-w-52">
              <TextApparitionText delay={isInView ? 1.7 : 0}>
                Lorem ipsum dolor sit amet,
              </TextApparitionText>
              <TextApparitionText delay={isInView ? 1.8 : 0}>
                consectetur adipiscing elit, sed do
              </TextApparitionText>
              <TextApparitionText delay={isInView ? 1.9 : 0}>veniam,</TextApparitionText>
            </div>
            <div className="maw-w-52">
              <TextApparitionText delay={isInView ? 1.7 : 0}>
                Lorem ipsum dolor sit amet,
              </TextApparitionText>
              <TextApparitionText delay={isInView ? 1.8 : 0}>
                consectetur adipiscing elit, sed do
              </TextApparitionText>
              <TextApparitionText delay={isInView ? 1.9 : 0}>
                dolore magna aliqua. Ut enim ad
              </TextApparitionText>
              <TextApparitionText delay={isInView ? 2 : 0}>minim veniam.</TextApparitionText>
            </div>
          </article>
        </div>
      )}
      </aside>
      <div className="relative h-full w-1/4 flex justify-end items-center mx-10">
        <div className="overflow-hidden">
          <motion.img
            className=""
            src={"/images/whitenoise.jpg"}
            alt="représentation de bruit blanc"
            width={480}
            height={600}
            variants={image}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </div>
        <motion.div
          variants={imageHide}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute w-[480px] h-[600px] bg-950"
        />
      </div>
    </section>
  );
}
