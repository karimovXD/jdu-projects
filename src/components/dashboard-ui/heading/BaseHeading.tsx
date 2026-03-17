"use client";
import { Typography } from "../typography";
import { PageConstants } from "@/constants/pages";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Copy, ChevronDown } from "lucide-react";
import { useState } from "react";

const routes = [
  PageConstants.ROUTES.HOME,

  PageConstants.ROUTES.HTML.TOPIC("task-1"),
  PageConstants.ROUTES.HTML.TOPIC("task-2"),

  PageConstants.ROUTES.CSS.TOPIC("task-1"),
  PageConstants.ROUTES.CSS.TOPIC("task-2"),
  PageConstants.ROUTES.CSS.TOPIC("task-3"),

  PageConstants.ROUTES.JS.TOPIC("task-1"),
  PageConstants.ROUTES.JS.TOPIC("task-2"),
  PageConstants.ROUTES.JS.TOPIC("task-3"),
  PageConstants.ROUTES.JS.TOPIC("task-4"),
  PageConstants.ROUTES.JS.TOPIC("task-5"),
  PageConstants.ROUTES.JS.TOPIC("task-6"),
  PageConstants.ROUTES.JS.TOPIC("task-7"),
  PageConstants.ROUTES.JS.TOPIC("task-8"),
  PageConstants.ROUTES.JS.TOPIC("task-9"),
  PageConstants.ROUTES.JS.TOPIC("task-10"),
  PageConstants.ROUTES.JS.TOPIC("task-11"),
];

interface PropsType {
  title: string;
  description: string;
}

export function BaseHeading({ title, description }: PropsType) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentIndex = routes.findIndex((r) => pathname.endsWith(r));
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < routes.length - 1;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="h-auto w-full">
      <div className="flex items-center justify-between">
        <Typography variant="h1">{title}</Typography>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
            disabled={copied}
          >
            <Copy size={14} />
            Copy Page
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(routes[currentIndex - 1])}
            disabled={!hasPrev}
          >
            <ArrowLeft size={15} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(routes[currentIndex + 1])}
            disabled={!hasNext}
          >
            <ArrowRight size={15} />
          </Button>
        </div>
      </div>
      <Typography variant="muted">{description}</Typography>
    </div>
  );
}
