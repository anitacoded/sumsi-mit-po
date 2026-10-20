Drop-in breathing exercise with working timer – use for the Boxatmung and 4/8-Atmung views.
```jsx
<BreathExercise mode="box" />
<BreathExercise mode="48" reducedMotion={prefersReduced} />
```
Unmount it when leaving the view so only one timer ever runs. Pauses automatically when the tab is hidden (same as the live site). No round counter – the live site runs without fixed rounds. Exports also `useBreathTimer`, `BOX_PHASES`, `FOUR_EIGHT_PHASES` from useBreathTimer.js.
