Dashboard tile that opens one exercise; use exactly four in a 2×2 grid on the start view.
```jsx
<ExerciseTile title="Boxatmung" subtitle="Vier Ecken gegen Gedankenspaghetti." motif="box" tone="lilac" meta="4·4·4·4" onClick={() => go('box')} />
```
Tones map to modules: Hummelmodus lavender (keeps the lilac wings visible) · Innere Oma mauve · Boxatmung lilac · 4/8 cream. `layout="wide"` for a single-column list on very small screens.
