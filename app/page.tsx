import { Hero } from "@/components/hero/Hero";
import { FirstLight } from "@/components/memories/FirstLight";
import { ChapterIntro } from "@/components/chapters/ChapterIntro";

import { Timeline } from "@/components/timeline/Timeline";
import { TimelineMediaSection } from "@/components/timeline/TimelineMediaSection";

import {
  anaLuciaMedia,
} from "../content/timeline/2026/ana-lucia-media";

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
        {anaLuciaMedia.map((section) => (
          <TimelineMediaSection
            key={section.id}
            section={section}
          />
        ))}
      </Timeline>
    </>
  );
}