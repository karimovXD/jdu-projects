import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface Crumb {
  label: string;
  href: string;
  isLast: boolean;
}

/** "data-fetching" → "Data Fetching" */
const formatSegment = (segment: string): string =>
  segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export function useBreadcrumbs(): Crumb[] {
  const pathname = usePathname();

  return useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    return segments.map((segment, index) => ({
      label: formatSegment(decodeURIComponent(segment)),
      href: "/" + segments.slice(0, index + 1).join("/"),
      isLast: index === segments.length - 1,
    }));
  }, [pathname]);
}
