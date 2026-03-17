export const codeHTML = `
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
`;

export const codeCSS = `
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  max-width: 100%;
}

.card {
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3 / 4;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
}

.genre {
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
}

.title {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin-top: 0.25rem;
  color: #fff;
}

.year {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.2rem;
}`;

export const movies = [
    {
      id: 1,
      title: "THE DARK KNIGHT",
      year: "2008",
      genre: "ACTION · THRILLER",
      bg: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop",
    },
    {
      id: 2,
      title: "INCEPTION",
      year: "2010",
      genre: "SCI-FI · THRILLER",
      bg: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop",
    },
    {
      id: 3,
      title: "INTERSTELLAR",
      year: "2014",
      genre: "SCI-FI · DRAMA",
      bg: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=400&fit=crop",
    },
    {
      id: 4,
      title: "PULP FICTION",
      year: "1994",
      genre: "CRIME · DRAMA",
      bg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    },
    {
      id: 5,
      title: "FIGHT CLUB",
      year: "1999",
      genre: "DRAMA · THRILLER",
      bg: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=400&fit=crop",
    },
    {
      id: 6,
      title: "THE MATRIX",
      year: "1999",
      genre: "SCI-FI · ACTION",
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
    },
    {
      id: 7,
      title: "FORREST GUMP",
      year: "1994",
      genre: "DRAMA · ROMANCE",
      bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=400&fit=crop",
    },
    {
      id: 8,
      title: "GOODFELLAS",
      year: "1990",
      genre: "CRIME · BIOGRAPHY",
      bg: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=400&fit=crop",
    },
  ];