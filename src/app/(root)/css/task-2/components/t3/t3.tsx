import { Typography } from "@/components/dashboard-ui/typography";
import styles from "./t3.module.scss";

export default function T3() {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h2">Task 3</Typography>
      <div className={styles.grid}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ].map((n) => (
          <div key={n} className={styles.item}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
