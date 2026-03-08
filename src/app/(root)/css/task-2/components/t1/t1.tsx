import { Typography } from "@/components/dashboard-ui/typography";
import styles from "./t1.module.scss";

export default function T1() {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h2">Task 1</Typography>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className={styles.item}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
