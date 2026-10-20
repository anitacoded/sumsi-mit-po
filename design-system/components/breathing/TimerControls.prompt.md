Control row for breathing timers; swaps Starten → Pausieren/Neustart → Fortsetzen/Neustart by status (labels match the live site).
```jsx
<TimerControls status={t.status} onStart={t.start} onPause={t.pause} onResume={t.resume} onRestart={t.restart} />
```
