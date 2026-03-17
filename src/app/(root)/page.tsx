import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { PageConstants } from "@/constants/pages";

const cards = [
  {
    id: 1,
    title: "HTML",
    desc: "Basic html attributes and methods",
    btnLabel: "Check",
    href: PageConstants.ROUTES.HTML.TOPIC("task-1"),
    gradient: "bg-linear-to-br from-[#E34F26] to-orange-300",
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    desc: "Selectors, flexbox, grid and responsive layout techniques explained.",
    btnLabel: "Check",
    href: PageConstants.ROUTES.CSS.TOPIC("task-1"),
    gradient: "bg-linear-to-br from-indigo-500 to-purple-600",
  },
  {
    id: 3,
    title: "JavaScript Basics",
    desc: "Core concepts: variables, functions, and DOM manipulation.",
    btnLabel: "Check",
    href: PageConstants.ROUTES.JS.TOPIC("task-1"),
    gradient: "bg-linear-to-br from-[#F7DF1E] via-yellow-300 to-amber-400",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="relative mx-auto w-full max-w-sm h-96 pt-0"
        >
          <AspectRatio ratio={16 / 9} className={card.gradient} />
          <CardHeader className="flex-1 flex flex-col gap-2">
            <CardTitle className="font-semibold">{card.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {card.desc}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href={card.href}>{card.btnLabel}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
