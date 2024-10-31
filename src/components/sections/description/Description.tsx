"use client";
import { motion } from "framer-motion";
import TextApparitionSubtitle from "@/components/texts/TextApparitionSubtitle";
import TextApparitionText from "@/components/texts/TextApparitionText";
import TextApparitionTitle from "@/components/texts/TextApparitionTitle";

export default function Description() {
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
    <section className=" flex items-center w-full h-screen bg-950 text-50 overflow-hidden">
      <aside className="mx-10 w-3/4">
      <div className="max-w-3xl">
        <div className="mb-32">
          <TextApparitionSubtitle delay={0.6}>
            Qu'est ce que c'est ?
          </TextApparitionSubtitle>
        </div>
        <article className="mb-12">
          <div className="pl-[20%]">
            <TextApparitionTitle delay={1}>le bruit blanc</TextApparitionTitle>
          </div>
          <TextApparitionTitle delay={1.2}>
            mélange les fréquences
          </TextApparitionTitle>
          <TextApparitionTitle delay={1.4}>
            en un son apaisant.
          </TextApparitionTitle>
        </article>
        <article className="w-full flex justify-end items-start gap-4">
          <div className="maw-w-52">
            <TextApparitionText delay={1.7}>
              Lorem ipsum dolor sit amet,
            </TextApparitionText>
            <TextApparitionText delay={1.8}>
              consectetur adipiscing elit, sed do
            </TextApparitionText>

            <TextApparitionText delay={1.9}>veniam,</TextApparitionText>
          </div>
          <div className="maw-w-52">
            <TextApparitionText delay={1.7}>
              Lorem ipsum dolor sit amet,
            </TextApparitionText>
            <TextApparitionText delay={1.8}>
              consectetur adipiscing elit, sed do
            </TextApparitionText>
            <TextApparitionText delay={1.9}>
              dolore magna aliqua. Ut enim ad
            </TextApparitionText>
            <TextApparitionText delay={2}>minim veniam.</TextApparitionText>
          </div>
        </article>
        </div>
      </aside>
      <div className="relative h-full w-1/4 flex justify-end items-center mx-10">
      <div className="overflow-hidden">
      <motion.img
        className=" "
        src={"/images/whitenoise.jpg"}
        alt="représentation de bruit blanc"
        width={480}
        height={600}
        variants={image} initial="hidden" animate="visible"
      />
      </div>
      <motion.div variants={imageHide} initial="hidden" animate="visible" className="absolute w-[480px] h-[600px] bg-950" />
      </div>
    </section>
  );
}
