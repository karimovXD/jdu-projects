import styles from "./t1.module.scss";
import { TitleWithTabs } from "@/components/dashboard-ui/heading/TitleWithTabs";
import { codeCSS, codeHTML, movies } from "./t1.data";

export default function MovieGrid() {
  return (
    <div className="flex flex-col gap-2">
      <TitleWithTabs title="Task 1" codeHTML={codeHTML} codeCSS={codeCSS}>
        <div className={styles.grid}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <img src={movie.bg} alt={movie.title} className={styles.image} />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <p className={styles.genre}>{movie.genre}</p>
                <p className={styles.title}>{movie.title}</p>
                <p className={styles.year}>{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </TitleWithTabs>
    </div>
  );
}
