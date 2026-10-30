import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1680px] px-6 sm:px-8 md:px-10 lg:px-14 xl:max-w-[1420px] xl:px-20 2xl:max-w-[1452px] 2xl:px-24",
        className
      )}
      {...props}
    />
  );
}