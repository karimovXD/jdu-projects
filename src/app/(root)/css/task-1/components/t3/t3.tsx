import { Typography } from "@/components/dashboard-ui/typography";
import styles from "./t3.module.scss";

export default function T3() {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h2">Task 3</Typography>
      <nav className={styles.navbar}>
        <span className={styles.logo}>LogoBakery</span>
        <div className={styles.nav}>
          <a href="#" className={styles.link}>
            Services
          </a>
          <a href="#" className={styles.link}>
            Projects
          </a>
          <a href="#" className={styles.link}>
            About
          </a>
          <button className={styles.btn} type="button">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}
