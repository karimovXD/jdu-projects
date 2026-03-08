import { BaseHeading } from "@/components/dashboard-ui/heading/BaseHeading";
import T1 from "./components/t1/t1";
import T2 from "./components/t2/t2";
import T3 from "./components/t3/t3";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <BaseHeading title="GRID" description="Just GRID elements" />
      <T1 />
      <T2 />
      <T3 />
    </div>
  );
};

export default page;
