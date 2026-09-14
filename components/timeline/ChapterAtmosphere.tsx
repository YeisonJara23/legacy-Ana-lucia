import type {
  TimelineChapterTheme,
} from "./types";

type ChapterAtmosphereProps = {
  theme?: TimelineChapterTheme;
};

const atmosphereStyles: Record<
  TimelineChapterTheme,
  {
    primary: string;
    secondary: string;
    star: string;
  }
> = {
  rose: {
    primary:
      "bg-pink-300/[0.11]",
    secondary:
      "bg-fuchsia-200/[0.055]",
    star:
      "text-pink-100/30",
  },

  lavender: {
    primary:
      "bg-violet-200/[0.10]",
    secondary:
      "bg-purple-200/[0.055]",
    star:
      "text-violet-100/30",
  },

  violet: {
    primary:
      "bg-indigo-300/[0.10]",
    secondary:
      "bg-violet-200/[0.055]",
    star:
      "text-indigo-100/30",
  },

  warm: {
    primary:
      "bg-amber-100/[0.075]",
    secondary:
      "bg-pink-200/[0.065]",
    star:
      "text-amber-100/30",
  },

  dream: {
    primary:
      "bg-pink-200/[0.085]",
    secondary:
      "bg-violet-200/[0.075]",
    star:
      "text-pink-100/30",
  },
};

export function ChapterAtmosphere({
  theme = "lavender",
}: ChapterAtmosphereProps) {
  const styles =
    atmosphereStyles[theme];

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none

        absolute
        inset-0

        -z-10

        overflow-hidden
      "
    >
      {/* Luz principal */}

      <div
        className={`
          absolute

          left-1/2
          top-[8%]

          h-[280px]
          w-[280px]

          -translate-x-1/2

          rounded-full

          blur-[90px]

          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[120px]

          md:h-[520px]
          md:w-[520px]
          md:blur-[150px]

          ${styles.primary}
        `}
      />

      {/* Luz lateral */}

      <div
        className={`
          absolute

          -right-24
          top-[38%]

          h-[240px]
          w-[240px]

          rounded-full

          blur-[85px]

          sm:h-[330px]
          sm:w-[330px]

          md:-right-32
          md:h-[440px]
          md:w-[440px]
          md:blur-[140px]

          ${styles.secondary}
        `}
      />

      {/* Segunda luz */}

      <div
        className={`
          absolute

          -left-24
          bottom-[20%]

          h-[220px]
          w-[220px]

          rounded-full

          blur-[80px]

          sm:h-[300px]
          sm:w-[300px]

          md:-left-32
          md:h-[400px]
          md:w-[400px]
          md:blur-[130px]

          ${styles.primary}
        `}
      />

      {/* Constelación decorativa izquierda */}

      <div
        className={`
          absolute

          left-[7%]
          top-[18%]

          hidden

          select-none

          text-xs

          md:block

          ${styles.star}
        `}
      >
        <span className="absolute left-0 top-0">
          ·
        </span>

        <span className="absolute left-10 top-7">
          ✦
        </span>

        <span className="absolute left-3 top-16">
          ·
        </span>

        <span className="absolute left-16 top-20">
          ·
        </span>
      </div>

      {/* Constelación derecha */}

      <div
        className={`
          absolute

          right-[9%]
          top-[63%]

          hidden

          select-none

          text-xs

          lg:block

          ${styles.star}
        `}
      >
        <span className="absolute right-0 top-0">
          ·
        </span>

        <span className="absolute right-12 top-6">
          ✦
        </span>

        <span className="absolute right-4 top-16">
          ·
        </span>
      </div>
    </div>
  );
}