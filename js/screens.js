// ─────────────────────────────────────────────
// SYNAPTIC DRIFT — Screen & Keyboard Logic
// ─────────────────────────────────────────────

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  const scr = document.getElementById(`screen-${name}`);
  if (scr) scr.classList.add('active');

  const tab = document.querySelector(`.nav-tab[data-screen="${name}"]`);
  if (tab) tab.classList.add('active');

  if (name === 'evolution') {
    setTimeout(() => {
      document.getElementById('evo-trust-bar').style.width     = '62%';
      document.getElementById('evo-affection-bar').style.width = '74%';
      document.getElementById('evo-fear-bar').style.width      = '28%';
      document.getElementById('evo-anger-bar').style.width     = '15%';
    }, 100);
  }
}

function initScreens() {
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.addEventListener('click', () => showScreen(t.dataset.screen));
  });
}

function initKeyboard() {
  let selectedIdx = -1;

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { clearEntry(); selectedIdx = -1; return; }
    if (e.key === '1') { showScreen('overview');  return; }
    if (e.key === '2') { showScreen('timeline');  return; }
    if (e.key === '3') { showScreen('evolution'); return; }

    if (document.getElementById('screen-overview').classList.contains('active')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIdx = Math.min(logs.length - 1, selectedIdx + 1);
        openEntry(logs[selectedIdx].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIdx = Math.max(0, selectedIdx - 1);
        openEntry(logs[selectedIdx].id);
      }
    }
  });
}
