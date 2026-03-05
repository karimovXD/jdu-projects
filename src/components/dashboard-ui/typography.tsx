import type { JSX } from "react";
import { typography } from "@/constants/typography";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "list"
  | "inlineCode"
  | "lead"
  | "large"
  | "small"
  | "muted";

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "p",
  className = "",
}) => {
  let Tag: keyof JSX.IntrinsicElements;

  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
      Tag = variant;
      break;
    case "p":
    case "lead":
    case "large":
    case "muted":
      Tag = "p";
      break;
    case "small":
      Tag = "small";
      break;
    case "blockquote":
      Tag = "blockquote";
      break;
    case "list":
      Tag = "ul";
      break;
    case "inlineCode":
      Tag = "code";
      break;
    default:
      Tag = "span";
  }

  return (
    <Tag className={`${typography[variant]} ${className}`}> {children} </Tag>
  );
};
