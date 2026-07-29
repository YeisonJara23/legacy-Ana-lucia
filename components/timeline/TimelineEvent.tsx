"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TimelineEventProps = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;

  photos?: {
    src: string;
    alt: string;
    caption: string;
  }[];

  children?: React.ReactNode;
};

export function TimelineEvent({
  title,
  date,
  time,
  location,
  description,
  photos,
  children,
}: TimelineEventProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
      }}
      className="relative mx-auto mb-40 max-w-5xl"
    >
      {/* Punto de la línea */}

      <div
        className="
          absolute
          -left-16
          top-12
          hidden
          lg:flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-5
            w-5
            rounded-full

            bg-gradient-to-br

            from-pink-300
            via-fuchsia-300
            to-violet-300

            shadow-[0_0_45px_rgba(255,180,235,.8)]
          "
        />
      </div>

      {/* Tarjeta */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[42px]

          border
          border-white/15

          bg-white/5

          backdrop-blur-xl

          p-12

          shadow-[0_20px_80px_rgba(40,15,90,.35)]

          transition-all

          duration-500

          hover:-translate-y-1

          hover:border-pink-200/30
        "
      >
        {/* Glow */}

        <div
          className="
            absolute

            inset-0

            rounded-[42px]

            bg-gradient-to-br

            from-pink-300/10

            via-transparent

            to-violet-300/10

            pointer-events-none
          "
        />

        <div className="relative z-10">
          {/* Fecha */}

          <div
  className="
    flex

    justify-center

    flex-wrap

    gap-8

    text-base

    font-semibold

    tracking-[0.18em]

    uppercase

    text-[#FFD8F4]

    drop-shadow-[0_2px_10px_rgba(0,0,0,.30)]
  "
>
  <span>📅 {date}</span>

  {time && <span>🕘 {time}</span>}

  {location && <span>📍 {location}</span>}
</div>

          {/* Título */}

          <h3
  className="
    mt-10

    text-center

    font-[family:var(--font-display)]

    text-6xl

    md:text-7xl

    lg:text-8xl

    font-light

    tracking-wide

    text-[#FFF9FE]

    drop-shadow-[0_0_30px_rgba(255,220,245,.55)]
  "
>
  {title}
</h3>

          {/* Línea */}

          <div
            className="
              my-10

              h-px

              bg-gradient-to-r

              from-transparent

              via-pink-200

              to-transparent
            "
          />

          {/* Texto */}

          <p
  className="
    whitespace-pre-line

    text-2xl

    leading-[2.6rem]

    font-[family:var(--font-body)]

    text-[#FFF6FD]

    drop-shadow-[0_2px_10px_rgba(0,0,0,.35)]
  "
>
            {description}
          </p>

          {/* Galería */}

          {photos && (
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {photos.map((photo) => (
                <figure key={photo.src}>
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={900}
                      height={1200}
                      className="
                        w-full

                        h-auto

                        rounded-3xl

                        object-cover

                        shadow-[0_30px_80px_rgba(0,0,0,.35)]

                        transition-all

                        duration-700

                        hover:scale-[1.03]
                      "
                    />
                  </div>

                  <figcaption
                    className="
                      mt-6

                      text-center

                      text-base

                      italic

                      leading-7

                      text-pink-100
                    "
                  >
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </motion.article>
  );
}