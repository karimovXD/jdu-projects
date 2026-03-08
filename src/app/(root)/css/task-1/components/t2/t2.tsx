import { Typography } from "@/components/dashboard-ui/typography";
import styles from "../../styles/t2.module.scss";

export default function T2() {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h2">Task 2</Typography>
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
    </div>
  );
}
