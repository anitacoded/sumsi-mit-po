// Routen, Speicherschlüssel und Defaults wie in app.js der Live-Site.
const APP_ROUTES = ['hummel', 'oma', 'box', 'lang'];
const routeFromHash = () => { const r = location.hash.slice(1); return APP_ROUTES.includes(r) ? r : ''; };

function App() {
  const loadMusicLink = window.SUMSIMITPODesignSystem_132750.MusicLinks.load;
  const [route, setRoute] = React.useState(routeFromHash());
  const [settings, setSettings] = React.useState(null);
  const [links, setLinks] = React.useState(() => ({ hummel: loadMusicLink('hummel'), oma: loadMusicLink('oma') }));
  const mq = React.useMemo(() => matchMedia('(prefers-reduced-motion: reduce)'), []);
  const readRm = () => { try { return localStorage.getItem('sumsi-reduce-motion') === 'true'; } catch (e) { return false; } };
  const [rm, setRm] = React.useState(() => mq.matches || readRm());
  React.useEffect(() => {
    const f = () => { setRoute(routeFromHash()); setSettings(null); };
    addEventListener('popstate', f); addEventListener('hashchange', f);
    return () => { removeEventListener('popstate', f); removeEventListener('hashchange', f); };
  }, []);
  React.useEffect(() => { document.documentElement.classList.toggle('reduced-motion', rm); }, [rm]);
  React.useEffect(() => {
    const t = { hummel: 'Hummelmodus', oma: 'Innere Oma', box: 'Boxatmung', lang: '4/8-Atmung' }[route];
    document.title = (t ? t + ' · ' : '') + 'SUMSI MIT PO · Kleine Pausen für laute Köpfe';
  }, [route]);
  const go = r => { if (r === route) return; history.pushState({ sumsiNavigation: true }, '', r ? '#' + r : location.pathname + location.search); setRoute(r); };
  const back = () => { if (history.state && history.state.sumsiNavigation) history.back(); else { history.replaceState(null, '', location.pathname + location.search); setRoute(''); } };
  const setReduced = v => { setRm(v); try { localStorage.setItem('sumsi-reduce-motion', String(v)); } catch (e) {} };
  let view;
  if (route === 'hummel' || route === 'oma') view = <AudioExercise key={route} kind={route} url={links[route]} onBack={back} openSettings={() => setSettings(route)} />;
  else if (route === 'box' || route === 'lang') view = <BreathView key={route} mode={route} onBack={back} reducedMotion={rm || mq.matches} />;
  else view = <Dashboard go={go} openSettings={() => setSettings('all')} />;
  return (
    <div style={{ position: 'relative', height: '100%', overflow: 'auto', background: 'var(--cream)' }}>
      {view}
      <SettingsSheet open={!!settings} focus={settings === 'all' ? null : settings} onClose={() => setSettings(null)}
        setLink={(m, u) => setLinks(l => ({ ...l, [m]: u }))} reducedMotion={rm} setReducedMotion={setReduced} />
    </div>
  );
}
window.App = App;
