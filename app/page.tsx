import {
  ChapterIntro,
} from "@/components/chapters/ChapterIntro";

import {
  MemoryLightboxProvider,
  type LightboxMemory,
} from "@/components/gallery/MemoryLightboxProvider";

import {
  Hero,
} from "@/components/hero/Hero";

import {
  FirstLight,
} from "@/components/memories/FirstLight";

import {
  Timeline,
} from "@/components/timeline/Timeline";

import {
  TimelineMediaSection,
} from "@/components/timeline/TimelineMediaSection";

import {
  anaLuciaMedia,
} from "../content/timeline/2026/ana-lucia-media";

/*
 * =========================================================
 * FOTOGRAFÍAS PARA EL MODO RECUERDO
 * =========================================================
 */

const lightboxMemories: LightboxMemory[] =
  anaLuciaMedia.flatMap(
    (section) =>
      section.items.flatMap(
        (item) => {
          /*
           * Fotografía individual.
           */

          if (
            item.type ===
            "photo"
          ) {
            return [
              {
                src: item.src,

                alt: item.alt,

                caption:
                  item.caption,

                chapter:
                  section.chapter,

                title:
                  item.featuredTitle ??
                  section.title,
              },
            ];
          }

          /*
           * Pareja de fotografías.
           */

          if (
            item.type ===
            "photoGroup"
          ) {
            return item.photos.map(
              (photo) => ({
                src:
                  photo.src,

                alt:
                  photo.alt,

                caption:
                  photo.caption,

                chapter:
                  section.chapter,

                title:
                  item.title ??
                  section.title,
              })
            );
          }

          /*
           * Bridges y videos no entran
           * en el visor de fotografías.
           */

          return [];
        }
      )
  );

export default function Home() {
  return (
    <MemoryLightboxProvider
      memories={
        lightboxMemories
      }
    >
      <main id="top">
        <Hero />

        <FirstLight />

        <ChapterIntro
          chapter="Capítulo I"
          year="2026"
          subtitle="Todo comenzó con un pequeño milagro."
        />

        <Timeline>
          {anaLuciaMedia.map(
            (
              section,
              index
            ) => {
              const nextSection =
                anaLuciaMedia[
                  index + 1
                ];

              return (
                <TimelineMediaSection
                  key={
                    section.id
                  }
                  section={
                    section
                  }
                  nextSection={
                    nextSection
                      ? {
                          id:
                            nextSection.id,

                          chapter:
                            nextSection.chapter,

                          title:
                            nextSection.title,
                        }
                      : undefined
                  }
                />
              );
            }
          )}
        </Timeline>
      </main>
    </MemoryLightboxProvider>
  );
}