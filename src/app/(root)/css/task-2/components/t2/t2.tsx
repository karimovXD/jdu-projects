import { Typography } from "@/components/dashboard-ui/typography";
import styles from "./t2.module.scss";
import { TitleWithTabs } from "@/components/dashboard-ui/heading/TitleWithTabs";
import { codeCSS, codeHTML } from "./t2.data";

export default function T2() {
  return (
    <div className="flex flex-col gap-2">
      <TitleWithTabs title="Task 2" codeHTML={codeHTML} codeCSS={codeCSS}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
            <div key={n} className={styles.item}>
              {n}
            </div>
          ))}
        </div>
      </TitleWithTabs>
    </div>
  );
}
