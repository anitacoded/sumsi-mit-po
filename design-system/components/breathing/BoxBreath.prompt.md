Square-and-dot visual for the Boxatmung module; prefer `BreathExercise mode="box"` which wires the timer for you.
```jsx
<BoxBreath phaseIndex={t.phaseIndex} progress={t.progress} size={220} />
```
Under reduced motion, still fine – the dot steps rather than animating smoothly if you pass progress=0.
