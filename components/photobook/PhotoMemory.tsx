"use client";

import Image from "next/image";

import { PhotoFrame } from "./PhotoFrame";
import { PhotoCaption } from "./PhotoCaption";

type PhotoMemoryProps = {
  src: string;
  alt: string;
  title?: string;
  caption: string;
};

export function PhotoMemory({
  src,
  alt,
 title,
  caption,
}: PhotoMemoryProps) {
  return (
    <section
      className="
        mx-auto
        mt-24
        max-w-5xl
      "
    >
      <PhotoFrame>
        <Image
          src={src}
          alt={alt}
          width={1800}
          height={1200}
          className="
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />
      </PhotoFrame>

      <PhotoCaption title={title}>
        {caption}
      </PhotoCaption>
    </section>
  );
}