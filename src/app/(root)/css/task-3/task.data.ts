export const codeHTML = `
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
`;

export const codeCSS = `
$sm: 640px;
$xs: 480px;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 0.5rem;
}

.header {
  height: 3rem;
  background: #22c55e;
}

.footer {
  height: 3rem;
  background: #22c55e;
}

.body {
  display: flex;
  flex: 1;
  gap: 0.5rem;
}

.sidebar {
  width: 10rem;
  background: #ef4444;

  @media (max-width: $sm) {
    display: none;
  }
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.banner {
  height: 2rem;
  background: #e879f9;
}

.featured {
  display: flex;
  gap: 0.5rem;
  height: 8rem;

  @media (max-width: $sm) {
    flex-direction: column;
  }
}

.featured-item {
  flex: 1;
  background: #fdba74;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  flex: 1;

  @media (max-width: $sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: $xs) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tile {
  background: #3b82f6;
}`;