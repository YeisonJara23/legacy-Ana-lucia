"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

type Props = {
  date: string;
  time?: string;
  location?: string;
};

export function TimelineMeta({
  date,
  time,
  location,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        mx-auto

        mt-14

        max-w-3xl
      "
    >
      <div
        className="
          relative

          overflow-hidden

          rounded-[28px]

          border
          border-white/15

          bg-white/10

          backdrop-blur-2xl

          px-8
          py-8

          shadow-[0_30px_90px_rgba(0,0,0,.18)]
        "
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none

            absolute

            -top-20
            left-1/2

            h-40
            w-40

            -translate-x-1/2

            rounded-full

            bg-pink-200/20

            blur-[80px]
          "
        />

        <div className="space-y-5">
          <MetaItem
            icon={<CalendarDays size={20} />}
            label={date}
          />

          {time && (
            <MetaItem
              icon={<Clock3 size={20} />}
              label={time}
            />
          )}

          {location && (
            <MetaItem
              icon={<MapPin size={20} />}
              label={location}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

type MetaItemProps = {
  icon: React.ReactNode;
  label: string;
};

function MetaItem({
  icon,
  label,
}: MetaItemProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-4

        text-lg
        md:text-xl

        font-light

        text-pink-50
      "
    >
      <div
        className="
          flex
          h-11
          w-11

          items-center
          justify-center

          rounded-full

          bg-white/10

          text-pink-200

          shadow-[0_0_25px_rgba(255,210,240,.35)]
        "
      >
        {icon}
      </div>

      <span className="tracking-wide">
        {label}
      </span>
    </div>
  );
}