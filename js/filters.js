// ─────────────────────────────────────────────
// SYNAPTIC DRIFT — Filters & Search
// ─────────────────────────────────────────────

function applyFilters() {
  const emotion = document.getElementById('filter-emotion').value;
  const day     = document.getElementById('filter-day').value;

  document.querySelectorAll('.log-entry').forEach(card => {
    const id  = card.id.replace('entry-card-', '');
    const log = logs.find(l => l.id === id);
    if (!log) return;

    const emotionMatch = emotion === 'all' || log.tag === emotion;
    const dayMatch     = day === 'all'     || log.day === day;
    card.style.display = (emotionMatch && dayMatch) ? '' : 'none';
  });
}

function initFilters() {
  document.getElementById('filter-emotion').addEventListener('change', applyFilters);
  document.getElementById('filter-day').addEventListener('change', applyFilters);

  document.getElementById('search-input').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.log-entry').forEach(card => {
      const id  = card.id.replace('entry-card-', '');
      const log = logs.find(l => l.id === id);
      if (!log) return;
      const hay = (log.tagLabel + ' ' + log.day + ' ' + log.preview + ' ' + log.num).toLowerCase();
      card.style.display = hay.includes(q) ? '' : 'none';
    });
  });
}
