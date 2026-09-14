export type TimelinePhotoLayout =
  | "center"
  | "left"
  | "right"
  | "portrait"
  | "wide";

export type TimelinePhotoItem = {
  type: "photo";

  src: string;
  alt: string;
  caption: string;

  featured?: boolean;
  featuredTitle?: string;

  /**
   * Permite controlar manualmente la composición
   * de una fotografía.
   *
   * Si no se especifica, TimelineMedia asignará
   * una automáticamente.
   */
  layout?: TimelinePhotoLayout;
};

export type TimelineVideoItem = {
  type: "video";

  src: string;
  poster: string;

  alt: string;
  caption: string;
};

export type TimelineBridgeItem = {
  type: "bridge";

  eyebrow?: string;
  text: string;
};

export type TimelineMediaItem =
  | TimelinePhotoItem
  | TimelineVideoItem
  | TimelineBridgeItem;

export type TimelineMediaSectionData = {
  id: string;

  chapter: string;
  title: string;

  subtitle?: string;
  date?: string;

  intro?: string;
  outro?: string;

  items: TimelineMediaItem[];
};