import { ReactNode } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export const TimelineItem = ({
  date,
  title,
  description,
  icon,
}: TimelineItemProps) => {
  return (
    <div className="mb-10 relative">
      <div className="absolute -left-11 mt-1.5 h-8 w-8 rounded-full border-2 border-primary bg-background shadow-sm shadow-primary/20 flex items-center justify-center">
        {icon}
      </div>
      <time className="mb-1 text-sm font-normal leading-none text-primary/80">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-foreground mt-2">{title}</h3>
      <p className="mb-4 text-base font-normal text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
