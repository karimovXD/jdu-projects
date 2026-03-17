import { BaseHeading } from "@/components/dashboard-ui/heading/BaseHeading";
import { TitleWithTabs } from "@/components/dashboard-ui/heading/TitleWithTabs";
import { Typography } from "@/components/dashboard-ui/typography";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <BaseHeading title="JS" description="Java-script task-1" />
      <TitleWithTabs
        title="Task 1"
        codeJS={`console.log("hello world");`}
        tabsDefaultValue="js"
      >
        <div className="border border-dashed p-2">
          <Typography className="text-center">
            in the console.log you can see "hello world"{" "}
          </Typography>
        </div>
      </TitleWithTabs>
    </div>
  );
};

export default page;
