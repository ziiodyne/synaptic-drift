// ─────────────────────────────────────────────
// SYNAPTIC DRIFT — Entry View Logic
// ─────────────────────────────────────────────

function openEntry(id) {
  const log = logs.find(l => l.id === id);
  if (!log) return;

  document.querySelectorAll('.log-entry').forEach(e => e.classList.remove('selected'));
  document.getElementById(`entry-card-${id}`)?.classList.add('selected');

  const main = document.getElementById('main-content');

  if (log.tpl) {
    const tpl   = document.getElementById(log.tpl);
    const clone = tpl.content.cloneNode(true);
    main.innerHTML = '';
    main.appendChild(clone);
  } else {
    main.innerHTML = `
      <div class="entry-view theme-trust">
        <button class="back-btn" onclick="clearEntry()">▼ BACK</button>
        <div class="entry-log-id">LOG ${log.num} — ${log.day}</div>
        <span class="entry-tag-badge ${log.tag}">${log.deltaDir === 'up' ? '↑' : '↓'} ${log.tagLabel}</span>
        <div class="entry-quote">"${log.preview}"</div>
        <div class="entry-delta-bar">
          <span class="delta-label">${log.tagLabel}</span>
          <div class="delta-track"><div class="delta-fill ${log.tag}" style="width:50%"></div></div>
          <span class="delta-value">${log.delta}</span>
        </div>
        <div class="entry-body">Entry data is fragmentary. Further interaction required to unlock complete memory sequence.</div>
      </div>
    `;
  }

  pulseEmotion(log.tag);
  setTimeout(animateQuote, 180);

  // Sync active timeline node
  document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
  const idx = logs.findIndex(l => l.id === id);
  if (idx >= 0) document.querySelectorAll('.timeline-node')[idx]?.classList.add('active');
}

function clearEntry() {
  document.querySelectorAll('.log-entry').forEach(e => e.classList.remove('selected'));
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="main-hint" id="overview-hint"><p>←&nbsp;&nbsp;Select a memory entry to begin</p></div>`;
}

function goToEntry(id) {
  showScreen('overview');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.nav-tab[data-screen="overview"]').classList.add('active');
  openEntry(id);
}

function pulseEmotion(tag) {
  if (tag === 'redacted') tag = 'anger';
  const el = document.querySelector(`.emotion-fill.${tag}`);
  if (!el) return;
  el.classList.remove('pulse');
  void el.offsetWidth;
  el.classList.add('pulse');
}

function animateQuote() {
  const q = document.querySelector('#main-content .entry-quote');
  if (!q) return;
  const full  = q.textContent;
  q.textContent = '';
  q.classList.add('typing');
  let i = 0;
  const speed = Math.max(8, Math.min(22, 600 / full.length));
  const iv = setInterval(() => {
    q.textContent = full.slice(0, ++i);
    if (i >= full.length) {
      clearInterval(iv);
      setTimeout(() => q.classList.remove('typing'), 400);
    }
  }, speed);
}
