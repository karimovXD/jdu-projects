import { BaseHeading } from "@/components/dashboard-ui/heading/BaseHeading";
import MovieGrid from "./components/t1/t1";
import T2 from "./components/t2/t2";
import T3 from "./components/t3/t3";
import T4 from "./components/t4/t4";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <BaseHeading
        title="CSS"
        description="flex, cards, hover-cards, navigation and mini grid with flex"
      />
      <MovieGrid />
      <T2 />
      <T3 />
      <T4 />
    </div>
  );
};

export default page;
