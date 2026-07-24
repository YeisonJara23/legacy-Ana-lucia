import {
  Chapter,
  ChapterHeader,
  ChapterBody,
} from "@/components/chapters";

import { firstLight } from "@/content/chapters/first-light";

export function FirstLight() {
  return (
    <Chapter>
      <ChapterHeader
        chapter={firstLight.chapter}
        title={firstLight.title}
        date={firstLight.date}
      />

      <ChapterBody>
        <p
          className="
            mx-auto
            max-w-3xl
            whitespace-pre-line
            text-center
            text-xl
            leading-9
            text-white/70
          "
        >
          {firstLight.intro}
        </p>
      </ChapterBody>
    </Chapter>
  );
}