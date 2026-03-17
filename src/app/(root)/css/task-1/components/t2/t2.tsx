import styles from "./t2.module.scss";
import { TitleWithTabs } from "@/components/dashboard-ui/heading/TitleWithTabs";
import { codeCSS, codeHTML } from "./t2.data";

export default function T2() {
  return (
    <div className="flex flex-col gap-2">
      <TitleWithTabs title="Task 2" codeHTML={codeHTML} codeCSS={codeCSS}>
        <div className={styles.wrapper}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span>01</span>
            </div>
            <div className={styles.card}>
              <span>02</span>
            </div>
            <div className={styles.card}>
              <span>03</span>
            </div>
          </div>
        </div>
      </TitleWithTabs>
    </div>
  );
}
