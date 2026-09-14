import Image from "next/image";

import type {
  TimelinePhotoLayout,
} from "@/components/timeline/types";

type Props = {
  src: string;
  alt: string;

  priority?: boolean;
  featured?: boolean;

  layout?: TimelinePhotoLayout;
};

export function StoryPhoto({
  src,
  alt,

  priority = false,
  featured = false,

  layout = "center",
}: Props) {
  const imageHeightClasses: Record<
    TimelinePhotoLayout,
    string
  > = {
    center:
      "max-h-[68vh]",

    left:
      "max-h-[70vh]",

    right:
      "max-h-[70vh]",

    portrait:
      "max-h-[78vh]",

    wide:
      "max-h-[76vh]",
  };

  const sizes: Record<
    TimelinePhotoLayout,
    string
  > = {
    center:
      "(max-width: 640px) 92vw, (max-width: 1024px) 78vw, 760px",

    left:
      "(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 920px",

    right:
      "(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 920px",

    portrait:
      "(max-width: 640px) 88vw, (max-width: 1024px) 64vw, 620px",

    wide:
      "(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 1080px",
  };

  return (
    <div
      className={`
        relative

        flex

        min-h-[260px]

        w-full

        items-center
        justify-center

        overflow-hidden

        rounded-[24px]

        border

        ${
          featured
            ? "border-pink-100/25"
            : "border-white/15"
        }

        bg-black/10

        ${
          featured
            ? "shadow-[0_35px_100px_rgba(45,18,90,.30)]"
            : "shadow-[0_25px_70px_rgba(39,16,88,.20)]"
        }

        ring-1
        ring-inset
        ring-white/10

        sm:rounded-[30px]
        md:rounded-[36px]
      `}
    >
      <Image
        src={src}
        alt={alt}

        width={
          layout === "wide"
            ? 1600
            : 1200
        }

        height={
          layout === "portrait"
            ? 1800
            : 1500
        }

        priority={priority}

        loading={
          priority
            ? "eager"
            : "lazy"
        }

        quality={
          featured
            ? 76
            : 72
        }

        sizes={sizes[layout]}

        className={`
          block

          h-auto

          ${imageHeightClasses[layout]}

          w-auto
          max-w-full

          object-contain

          transition-transform
          duration-700

          md:hover:scale-[1.012]
        `}
      />

      {/* Degradado inferior */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-t

          from-black/20
          via-transparent
          to-white/5
        "
      />

      {/* Luz especial */}

      {featured && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,rgba(255,220,245,.08),transparent_65%)]
          "
        />
      )}

      {/* Borde interior */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[24px]

          border
          border-white/10

          sm:rounded-[30px]
          md:rounded-[36px]
        "
      />
    </div>
  );
}