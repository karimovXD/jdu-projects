export const codeHTML = `
<div className={styles.grid}>
{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
  <div key={n} className={styles.item}>
    {n}
  </div>
))}
</div>
`;

export const codeCSS = `
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 5rem);
    gap: 0.5rem;
    padding: 0.5rem;
}

.item {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);

    &:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1;
    }

    &:nth-child(2) {
        grid-column: 3 / 4;
        grid-row: 1 / 3;
    }

    &:nth-child(3) {
        grid-column: 4 / 5;
        grid-row: 1;
    }

    &:nth-child(4) {
        grid-column: 1 / 2;
        grid-row: 2;
    }

    &:nth-child(5) {
        grid-column: 1 / 3;
        grid-row: 3 / 5;
    }

    &:nth-child(6) {
        grid-column: 1 / 4;
        grid-row: 5 / 7;
    }

    &:nth-child(7) {
        grid-column: 4 / 5;
        grid-row: 2 / 4;
    }

    &:nth-child(8) {
        grid-column: 2 / 3;
        grid-row: 2;
    }

    &:nth-child(9) {
        grid-column: 3 / 4;
        grid-row: 3 / 5;
    }

    &:nth-child(10) {
        grid-column: 4 / 5;
        grid-row: 4 / 7;
    }
}`;
