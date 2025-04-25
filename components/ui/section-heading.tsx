import type { ReactNode } from "react";

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {children}
      </h2>
      <div className="mt-3 h-1 w-20 bg-primary rounded-full"></div>
    </div>
  );
};
