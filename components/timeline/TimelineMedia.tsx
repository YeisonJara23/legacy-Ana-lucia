"use client";

import { StoryBridge } from "@/components/story/StoryBridge";
import { StorySection } from "@/components/story/StorySection";

import { TimelineVideo } from "./TimelineVideo";

import type {
  TimelineMediaItem,
  TimelinePhotoLayout,
} from "./types";

type TimelineMediaProps = {
  items: TimelineMediaItem[];
};

/**
 * Patrón editorial.
 *
 * No usa Math.random para evitar problemas
 * de hidratación y conseguir que el diseño
 * siempre sea consistente.
 */
const photoLayoutPattern: TimelinePhotoLayout[] = [
  "center",
  "left",
  "right",
  "portrait",
  "left",
  "wide",
  "right",
  "center",
  "portrait",
  "right",
  "left",
  "wide",
];

export function TimelineMedia({
  items,
}: TimelineMediaProps) {
  let videoNumber = 0;
  let photoNumber = 0;

  return (
    <div
      className="
        relative
        mt-16
        bg-transparent
        md:mt-20
      "
    >
      {items.map((item, index) => {
        /*
         * ==========================================
         * TRANSICIÓN NARRATIVA
         * ==========================================
         */

        if (item.type === "bridge") {
          return (
            <StoryBridge
              key={`bridge-${index}`}
              eyebrow={item.eyebrow}
              text={item.text}
            />
          );
        }

        /*
         * ==========================================
         * VIDEO
         * ==========================================
         */

        if (item.type === "video") {
          videoNumber += 1;

          return (
            <div
              key={item.src}
              className="
                my-24
                sm:my-28
                md:my-36
              "
            >
              <TimelineVideo
                src={item.src}
                poster={item.poster}
                title={item.alt}
                caption={item.caption}
                number={videoNumber}
              />
            </div>
          );
        }

        /*
         * ==========================================
         * FOTOGRAFÍA
         * ==========================================
         */

        photoNumber += 1;

        const automaticLayout =
          photoLayoutPattern[
            (photoNumber - 1) %
              photoLayoutPattern.length
          ];

        const layout =
          item.layout ??
          automaticLayout;

        return (
          <StorySection
            key={item.src}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            featured={item.featured}
            featuredTitle={
              item.featuredTitle
            }
            layout={layout}
            priority={false}
          />
        );
      })}
    </div>
  );
}