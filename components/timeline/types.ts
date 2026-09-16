export type TimelinePhotoLayout =
  | "center"
  | "left"
  | "right"
  | "portrait"
  | "wide";

export type TimelineChapterTheme =
  | "rose"
  | "lavender"
  | "violet"
  | "warm"
  | "dream";

export type TimelinePhotoItem = {
  type: "photo";
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
  featuredTitle?: string;
  layout?: TimelinePhotoLayout;
};

export type TimelineGroupedPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type TimelinePhotoGroupItem = {
  type: "photoGroup";
  eyebrow?: string;
  title?: string;
  photos: [
    TimelineGroupedPhoto,
    TimelineGroupedPhoto,
  ];
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
  | TimelinePhotoGroupItem
  | TimelineVideoItem
  | TimelineBridgeItem;

export type TimelineMediaSectionData = {
  id: string;
  chapter: string;
  title: string;

  subtitle?: string;
  date?: string;

  /*
   * Momento de vida:
   * Nacimiento, Primeros días,
   * 1 mes, 2 meses, etc.
   */
  ageLabel?: string;

  intro?: string;
  outro?: string;

  theme?: TimelineChapterTheme;

  items: TimelineMediaItem[];
};