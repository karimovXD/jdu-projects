import styles from "./t3.module.scss";
import { TitleWithTabs } from "@/components/dashboard-ui/heading/TitleWithTabs";
import { codeCSS, codeHTML } from "./t3.data";

export default function T3() {
  return (
    <div className="flex flex-col gap-2">
      <TitleWithTabs title="Task 3" codeHTML={codeHTML} codeCSS={codeCSS}>
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
      </TitleWithTabs>
    </div>
  );
}
