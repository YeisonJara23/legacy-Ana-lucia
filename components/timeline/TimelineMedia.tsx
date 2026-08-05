"use client";

import { StorySection } from "@/components/story/StorySection";

import { TimelineVideo } from "./TimelineVideo";

import type {
  TimelineMediaItem,
} from "./types";

type TimelineMediaProps = {
  items: TimelineMediaItem[];
};

export function TimelineMedia({
  items,
}: TimelineMediaProps) {
  return (
    <div
      className="
        relative

        mt-16
        md:mt-20

        space-y-20
        sm:space-y-24
        md:space-y-32

        bg-transparent
      "
    >
      {items.map((item, index) => {
        const key = `${item.type}-${item.src}`;

        if (item.type === "video") {
          return (
            <TimelineVideo
              key={key}
              src={item.src}
              poster={item.poster}
              caption={item.caption}
            />
          );
        }

        return (
          <StorySection
            key={key}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            priority={index === 0}
          />
        );
      })}
    </div>
  );
}