import { Calendar, Clock, MapPin } from "lucide-react";

type TimelineEventProps = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
};

export function TimelineEvent({
  title,
  date,
  time,
  location,
  description,
}: TimelineEventProps) {
  return (
    <div className="relative mx-auto mb-32 max-w-4xl">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{date}</span>
          </div>

          {time && (
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{time}</span>
            </div>
          )}

          {location && (
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
          )}
        </div>

        <h2 className="mb-8 text-center text-5xl font-light text-white">
          {title}
        </h2>

        <p className="whitespace-pre-line text-center text-xl leading-10 text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}