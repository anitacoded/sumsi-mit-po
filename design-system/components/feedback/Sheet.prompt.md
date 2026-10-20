Settings panel that slides up from the bottom; the only overlay pattern in the app (no pop-ups otherwise).
```jsx
<Sheet open={open} onClose={close} title="Einstellungen" footer={<Button block onClick={save}>Speichern</Button>}>
  <TextField label="Link für Hummelmodus" />
</Sheet>
```
Parent must be `position:relative` (the app frame).
