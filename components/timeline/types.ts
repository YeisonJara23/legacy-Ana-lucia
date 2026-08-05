export type TimelinePhotoItem = {
  type: "photo";
  src: string;
  alt: string;
  caption: string;
};

export type TimelineVideoItem = {
  type: "video";
  src: string;
  poster: string;
  alt: string;
  caption: string;
};

export type TimelineMediaItem =
  | TimelinePhotoItem
  | TimelineVideoItem;

export type TimelineMediaSectionData = {
  id: string;
  title: string;
  items: TimelineMediaItem[];
};