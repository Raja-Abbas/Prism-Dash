import * as React from "react";
import { cn, getInitials } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  name?: string | null;
  size?: "sm" | "md" | "lg";
}

function Avatar({ className, src, name, size = "md", ...props }: AvatarProps) {
  const sizes: Record<string, string> = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };
  return (
    <div className={cn("relative flex shrink-0 overflow-hidden rounded-full", sizes[size], className)} {...props}>
      {src ? (
        <img src={src} alt={name || "Avatar"} className="aspect-square h-full w-full" />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-semibold">
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}

export { Avatar };
