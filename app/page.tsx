import { Hero } from "@/components/hero/Hero";
import { FirstLight } from "@/components/memories/FirstLight";

import { Timeline } from "@/components/timeline/Timeline";
import { TimelineYear } from "@/components/timeline/TimelineYear";
import { TimelineEvent } from "@/components/timeline/TimelineEvent";

import { birth } from "@/content/timeline/2026/birth";

export default function Home() {
  return (
    <>
      <Hero />

      <FirstLight />

      <Timeline>
        <TimelineYear year="2026" />

        <TimelineEvent
    title={birth.title}
    date={birth.date}
    time={birth.time}
    location={birth.location}
    description={birth.description}
    photos={birth.photos}
/>
      </Timeline>
    </>
  );
}