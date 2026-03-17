import { BaseHeading } from "@/components/dashboard-ui/heading/BaseHeading";
import styles from "./t.module.scss";
import { TitleWithTabs } from "@/components/dashboard-ui/heading/TitleWithTabs";
import { codeCSS, codeHTML } from "./task.data";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <BaseHeading title="MEDIA QUERY" description="Dashboard media query" />
      <TitleWithTabs title="Query" codeHTML={codeHTML} codeCSS={codeCSS}>
        <div className={styles.layout}>
          <header className={styles.header} />
          <div className={styles.body}>
            <aside className={styles.sidebar} />
            <main className={styles.main}>
              <div className={styles.banner} />
              <div className={styles.featured}>
                <div className={styles["featured-item"]} />
                <div className={styles["featured-item"]} />
              </div>
              <div className={styles.tiles}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={styles.tile} />
                ))}
              </div>
            </main>
          </div>
          <footer className={styles.footer} />
        </div>
      </TitleWithTabs>
    </div>
  );
}
