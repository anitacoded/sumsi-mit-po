Top bar for every view – logo + settings on the dashboard, back + title in exercises.
```jsx
<TopBar showLogo onSettings={openSettings} basePath="../../" />
<TopBar title="Boxatmung" onBack={() => history.back()} />
```
Back must also work via browser history – wire onBack to history.back().
