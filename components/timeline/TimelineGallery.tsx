"use client";

import { StorySection } from "@/components/story";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

type Props = {
  photos: Photo[];
};

export function TimelineGallery({
  photos,
}: Props) {
  return (
    <div
      className="
        mt-24

        space-y-40
      "
    >
      {photos.map((photo, index) => (
        <StorySection
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          caption={photo.caption}
          priority={index === 0}
        />
      ))}
    </div>
  );
}