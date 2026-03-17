"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Typography } from "../typography";
import { Eye, Code2 } from "lucide-react";
import CodeBlock from "../code-block/CodeBlock";

interface PropsType {
  title: string;
  children: React.ReactNode;
  codeHTML?: string;
  codeCSS?: string;
  codeJS?: string;
  tabsDefaultValue?: "html" | "css" | "js";
}

export function TitleWithTabs({
  title,
  children,
  codeHTML,
  codeCSS,
  codeJS,
  tabsDefaultValue = "html",
}: PropsType) {
  const TabsInside = (
    <Tabs defaultValue={tabsDefaultValue} className="w-full">
      <TabsList variant="line">
        {codeHTML && <TabsTrigger value="html">HTML</TabsTrigger>}
        {codeCSS && <TabsTrigger value="css">CSS</TabsTrigger>}
        {codeJS && <TabsTrigger value="js">JS</TabsTrigger>}
      </TabsList>
      {codeHTML && (
        <TabsContent value="html">
          <CodeBlock language="html">{codeHTML}</CodeBlock>
        </TabsContent>
      )}
      {codeCSS && (
        <TabsContent value="css">
          <CodeBlock language="css">{codeCSS}</CodeBlock>
        </TabsContent>
      )}
      {codeJS && (
        <TabsContent value="js">
          <CodeBlock>{codeJS}</CodeBlock>
        </TabsContent>
      )}
    </Tabs>
  );

  return (
    <Tabs defaultValue="preview" className="w-full">
      <div className="flex items-center justify-between">
        <Typography variant="h2">{title}</Typography>
        <TabsList variant="line">
          <TabsTrigger value="preview">
            <Eye /> Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code2 /> Code
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="preview">{children}</TabsContent>
      <TabsContent value="code">{TabsInside}</TabsContent>
    </Tabs>
  );
}
