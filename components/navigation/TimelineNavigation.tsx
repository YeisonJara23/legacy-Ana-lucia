"use client";

import { TimelineNavigationItem } from "./TimelineNavigationItem";

export function TimelineNavigation() {
  return (
    <aside
      className="
        fixed

        left-10
        top-1/2

        z-50

        hidden
        xl:flex

        -translate-y-1/2

        flex-col

        gap-10
      "
    >
      <TimelineNavigationItem
        title="Inicio"
        active
      />

      <TimelineNavigationItem
        title="Capítulo I"
      />

      <TimelineNavigationItem
        title="Nacimiento"
      />

      <TimelineNavigationItem
        title="Fotografías"
      />

      <TimelineNavigationItem
        title="Carta"
      />
    </aside>
  );
}