// ─────────────────────────────────────────────
// SYNAPTIC DRIFT — Render Functions
// ─────────────────────────────────────────────

function renderList() {
  const list = document.getElementById('overview-list');
  list.innerHTML = '';
  logs.forEach(log => {
    const el = document.createElement('div');
    el.className = `log-entry ${log.tag}`;
    el.id = `entry-card-${log.id}`;
    el.innerHTML = `
      <div class="log-id">LOG ${log.num} — ${log.day}</div>
      <div class="log-tag ${log.tag}">${log.tagLabel}</div>
      <div class="log-preview ${log.tag === 'redacted' ? 'redacted-entry' : ''}">${log.preview}</div>
      <div class="log-delta ${log.deltaDir}">${log.delta}</div>
    `;
    el.addEventListener('click', () => openEntry(log.id));
    list.appendChild(el);
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline-nodes');
  if (!container) return;
  container.innerHTML = '';
  logs.forEach(log => {
    const bulletHTML = (log.bullets || []).map(b => `<li>${b}</li>`).join('');
    const deltaClass = log.deltaDir === 'up' ? 'up' : log.deltaDir === 'down' ? 'down' : 'neutral';
    const tagLabel   = log.tag === 'redacted' ? '⚠ REDACTED' : log.tagLabel;

    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.id = `tnode-${log.id}`;
    node.innerHTML = `
      <div class="node-tooltip">
        <div class="tt-header">
          <span class="tt-id">LOG ${log.num}</span>
          <span class="tt-day">${log.day}</span>
        </div>
        <div class="tt-emotion ${log.tag}">
          <span class="tt-emotion-dot"></span>${tagLabel}
        </div>
        <ul class="tt-bullets">${bulletHTML}</ul>
        <div class="tt-delta ${deltaClass}">${log.delta}</div>
      </div>
      <div class="node-dot ${log.tag}"></div>
      <div class="node-info">
        <div class="node-id">LOG ${log.num}</div>
        <div class="node-day">${log.day}</div>
        <div class="node-delta ${log.tag}">${log.tagLabel} ${log.delta}</div>
      </div>
    `;
    node.addEventListener('click', () => goToEntry(log.id));
    container.appendChild(node);
  });
}

function populateDayDropdown() {
  const sel  = document.getElementById('filter-day');
  const seen = new Set();
  logs.forEach(log => {
    if (!seen.has(log.day)) {
      seen.add(log.day);
      const opt = document.createElement('option');
      opt.value       = log.day;
      opt.textContent = log.day;
      sel.appendChild(opt);
    }
  });
}
