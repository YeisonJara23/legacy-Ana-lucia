type TimelineNavigationItemProps = {
  id: string;
  number: string;
  title: string;

  active: boolean;

  onClick?: () => void;

  mobile?: boolean;
};

export function TimelineNavigationItem({
  id,
  number,
  title,
  active,

  onClick,

  mobile = false,
}: TimelineNavigationItemProps) {
  if (mobile) {
    return (
      <a
        href={`#${id}`}
        onClick={onClick}
        aria-current={active ? "step" : undefined}
        className={`
          group
          flex
          w-full
          items-center
          gap-4

          rounded-[18px]

          border

          px-4
          py-4

          transition-all
          duration-300

          ${
            active
              ? `
                  border-pink-100/25
                  bg-white/[0.09]

                  shadow-[0_10px_35px_rgba(41,18,86,.16)]
                `
              : `
                  border-white/[0.06]
                  bg-white/[0.025]

                  hover:border-white/15
                  hover:bg-white/[0.05]
                `
          }
        `}
      >
        {/* Número */}
        <span
          className={`
            flex
            h-10
            w-10
            shrink-0

            items-center
            justify-center

            rounded-full

            border

            font-display

            text-base

            transition-all
            duration-300

            ${
              active
                ? `
                    border-pink-100/35
                    bg-pink-100/10

                    text-pink-100

                    shadow-[0_0_20px_rgba(255,210,245,.14)]
                  `
                : `
                    border-white/10
                    bg-white/[0.03]

                    text-white/45
                  `
            }
          `}
        >
          {number}
        </span>

        {/* Título */}
        <div className="min-w-0 text-left">
          <p
            className={`
              text-[9px]
              font-medium

              uppercase

              tracking-[0.28em]

              transition-colors
              duration-300

              ${
                active
                  ? "text-pink-100/65"
                  : "text-white/30"
              }
            `}
          >
            Capítulo {number}
          </p>

          <p
            className={`
              mt-1

              truncate

              font-display

              text-lg
              font-light

              transition-colors
              duration-300

              ${
                active
                  ? "text-white"
                  : "text-white/65"
              }
            `}
          >
            {title}
          </p>
        </div>

        {/* Indicador */}
        <span
          aria-hidden="true"
          className={`
            ml-auto

            text-sm

            transition-all
            duration-300

            ${
              active
                ? "translate-x-0 text-pink-100/80"
                : "-translate-x-1 text-white/20"
            }
          `}
        >
          →
        </span>
      </a>
    );
  }

  /*
   * ========================================================
   * ESCRITORIO
   * ========================================================
   */

  return (
    <a
      href={`#${id}`}
      aria-label={`Ir al capítulo ${number}: ${title}`}
      aria-current={active ? "step" : undefined}
      className="
        group
        relative

        flex
        min-h-10
        items-center
        gap-3
      "
    >
      {/* Punto */}
      <span
        className={`
          relative
          z-10

          flex
          h-7
          w-7
          shrink-0

          items-center
          justify-center

          rounded-full

          border

          text-[9px]
          font-medium

          transition-all
          duration-500

          ${
            active
              ? `
                  scale-110

                  border-pink-100/55

                  bg-[#9d78e3]

                  text-white

                  shadow-[0_0_22px_rgba(255,210,245,.32)]
                `
              : `
                  border-white/15

                  bg-[#7650D6]/70

                  text-white/45

                  group-hover:border-pink-100/30
                  group-hover:text-white/80
                `
          }
        `}
      >
        {number}
      </span>

      {/* Nombre */}
      <div
        className={`
          pointer-events-none

          absolute
          left-10

          whitespace-nowrap

          rounded-xl

          border
          border-white/10

          bg-[#6541b8]/80

          px-3
          py-2

          shadow-[0_10px_35px_rgba(30,10,65,.18)]

          backdrop-blur-xl

          transition-all
          duration-300

          ${
            active
              ? `
                  translate-x-0

                  opacity-100
                `
              : `
                  -translate-x-2

                  opacity-0

                  group-hover:translate-x-0
                  group-hover:opacity-100
                `
          }
        `}
      >
        <span
          className="
            font-display

            text-sm
            font-light

            text-white/90
          "
        >
          {title}
        </span>
      </div>
    </a>
  );
}