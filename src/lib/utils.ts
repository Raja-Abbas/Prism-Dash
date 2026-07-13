import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: d.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}

export function getInitials(name: string | null | undefined): string {
  if (!name) return "U";
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    inactive: "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/10 dark:text-zinc-400",
    pending: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    processing: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    shipped: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
    delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    cancelled: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
    lead: "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400",
    admin: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    manager: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
    viewer: "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/10 dark:text-zinc-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    error: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  };
  return colors[status.toLowerCase()] || "bg-zinc-100 text-zinc-700";
}
