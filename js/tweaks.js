// ─────────────────────────────────────────────
// SYNAPTIC DRIFT — Tweaks Panel
// ─────────────────────────────────────────────

const TWEAK_DEFAULTS = {
  accent:         'cyan',
  density:        'comfortable',
  typeStyle:      'editorial',
  glitchIntensity: 100,
  scanlines:      true,
  skipBoot:       false,
};

const tweakState = { ...TWEAK_DEFAULTS };

function applyTweaks() {
  const b = document.body;
  b.classList.remove('accent-amber', 'accent-magenta', 'accent-mint');
  if (tweakState.accent !== 'cyan') b.classList.add('accent-' + tweakState.accent);

  b.classList.toggle('density-compact', tweakState.density === 'compact');
  b.classList.toggle('type-terminal',   tweakState.typeStyle === 'terminal');

  const g = Math.max(0, Math.min(100, tweakState.glitchIntensity)) / 100;
  b.classList.toggle('glitch-off', g === 0);
  document.documentElement.style.setProperty('--glitch-strength', g);
  document.querySelectorAll('.glitch-overlay').forEach(el => el.style.opacity = g);
  document.querySelectorAll('.glitch-bar').forEach(el => el.style.opacity = g);

  b.classList.toggle('scanlines-off', !tweakState.scanlines);
}

function persistTweaks(partial) {
  try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: partial }, '*'); } catch (e) {}
}

function setTweak(key, value) {
  tweakState[key] = value;
  applyTweaks();
  renderTweaks();
  persistTweaks({ [key]: value });
}

function renderTweaks() {
  const body = document.getElementById('tweaks-body');
  if (!body) return;

  body.innerHTML = `
    <div class="tweak-section">
      <div class="tweak-label">Accent <span class="tweak-value">${tweakState.accent}</span></div>
      <div class="tweak-radio cols-4">
        ${['cyan','amber','magenta','mint'].map(a =>
          `<button data-tweak="accent" data-val="${a}" class="${tweakState.accent === a ? 'active' : ''}">${a}</button>`
        ).join('')}
      </div>
    </div>
    <div class="tweak-section">
      <div class="tweak-label">Type <span class="tweak-value">${tweakState.typeStyle}</span></div>
      <div class="tweak-radio">
        <button data-tweak="typeStyle" data-val="editorial" class="${tweakState.typeStyle === 'editorial' ? 'active' : ''}">Editorial</button>
        <button data-tweak="typeStyle" data-val="terminal"  class="${tweakState.typeStyle === 'terminal'  ? 'active' : ''}">Terminal</button>
      </div>
    </div>
    <div class="tweak-section">
      <div class="tweak-label">Density <span class="tweak-value">${tweakState.density}</span></div>
      <div class="tweak-radio">
        <button data-tweak="density" data-val="comfortable" class="${tweakState.density === 'comfortable' ? 'active' : ''}">Comfortable</button>
        <button data-tweak="density" data-val="compact"     class="${tweakState.density === 'compact'     ? 'active' : ''}">Compact</button>
      </div>
    </div>
    <div class="tweak-section">
      <div class="tweak-label">Glitch intensity <span class="tweak-value">${tweakState.glitchIntensity}%</span></div>
      <input type="range" class="tweak-slider" min="0" max="100" step="5" value="${tweakState.glitchIntensity}" data-tweak="glitchIntensity">
    </div>
    <div class="tweak-section">
      <button class="tweak-toggle ${tweakState.scanlines ? 'on' : ''}" data-tweak="scanlines">
        <span>Ambient scanlines</span><span class="switch"></span>
      </button>
    </div>
    <div class="tweak-section">
      <button class="tweak-toggle ${tweakState.skipBoot ? 'on' : ''}" data-tweak="skipBoot">
        <span>Skip boot sequence</span><span class="switch"></span>
      </button>
    </div>
  `;

  body.querySelectorAll('[data-tweak]').forEach(el => {
    const key = el.dataset.tweak;
    if (el.tagName === 'INPUT')                   el.addEventListener('input',  () => setTweak(key, parseInt(el.value, 10)));
    else if (el.classList.contains('tweak-toggle')) el.addEventListener('click', () => setTweak(key, !tweakState[key]));
    else                                            el.addEventListener('click', () => setTweak(key, el.dataset.val));
  });
}

function buildTweaksPanel() {
  const panel = document.createElement('div');
  panel.className = 'tweaks-panel';
  panel.id = 'tweaks-panel';
  panel.innerHTML = `
    <div class="tweaks-header" id="tweaks-header">
      <div class="tweaks-title">◊ Tweaks</div>
      <button class="tweaks-close" id="tweaks-close">×</button>
    </div>
    <div class="tweaks-body" id="tweaks-body"></div>
  `;
  document.body.appendChild(panel);

  document.getElementById('tweaks-close').addEventListener('click', () => {
    panel.classList.remove('open');
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
  });

  // Draggable
  const header = document.getElementById('tweaks-header');
  let dragging = false, ox = 0, oy = 0;
  header.addEventListener('mousedown', e => {
    if (e.target.id === 'tweaks-close') return;
    dragging = true;
    const r = panel.getBoundingClientRect();
    ox = e.clientX - r.left; oy = e.clientY - r.top;
    panel.style.right = 'auto'; panel.style.bottom = 'auto';
    e.preventDefault();
  });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    panel.style.left = Math.max(0, Math.min(window.innerWidth  - panel.offsetWidth,  e.clientX - ox)) + 'px';
    panel.style.top  = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, e.clientY - oy)) + 'px';
  });
  window.addEventListener('mouseup', () => { dragging = false; });

  renderTweaks();
}

function initTweaks() {
  window.addEventListener('message', e => {
    if (!e.data || !e.data.type) return;
    const panel = document.getElementById('tweaks-panel');
    if (e.data.type === '__activate_edit_mode') {
      if (!panel) buildTweaksPanel();
      document.getElementById('tweaks-panel').classList.add('open');
    } else if (e.data.type === '__deactivate_edit_mode') {
      if (panel) panel.classList.remove('open');
    }
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
}
