"use client";

import Head from "next/head";
import { useOpenMenu } from "@/store";

export function HeadMetadata() {
  const { isOpen } = useOpenMenu();

  return (
    <Head>
      <title>Poyzeet</title>
      <meta name="description" content="Vinyl de bruit blanc" />
      <link rel="icon" href="/simpleBlackLogo.svg" />
    </Head>
  );
}
