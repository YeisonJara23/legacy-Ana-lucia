import { ChapterIntro } from "@/components/chapters/ChapterIntro";
import { Hero } from "@/components/hero/Hero";
import { FirstLight } from "@/components/memories/FirstLight";

import { Timeline } from "@/components/timeline/Timeline";
import { TimelineMediaSection } from "@/components/timeline/TimelineMediaSection";

import { anaLuciaMedia } from "../content/timeline/2026/ana-lucia-media";

export default function Home() {
  return (
    <>
      <Hero />

      <FirstLight />

      <ChapterIntro
        chapter="Capítulo I"
        year="2026"
        subtitle="Todo comenzó con un pequeño milagro."
      />

      <Timeline>
        {anaLuciaMedia.map(
          (section, index) => {
            const nextSection =
              anaLuciaMedia[index + 1];

            return (
              <TimelineMediaSection
                key={section.id}
                section={section}
                nextSection={
                  nextSection
                    ? {
                        id: nextSection.id,
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
    </>
  );
}