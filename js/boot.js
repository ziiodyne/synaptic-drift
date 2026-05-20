// ─────────────────────────────────────────────
// SYNAPTIC DRIFT — Boot Sequence
// ─────────────────────────────────────────────

function runBoot() {
  const boot = document.getElementById('boot');
  if (!boot) return;

  if (tweakState.skipBoot) { boot.remove(); return; }

  const messages = [
    'initializing kernel',
    'mounting memory shards',
    'calibrating emotional index',
    'verifying drift patterns',
    'synaptic drift online',
  ];

  let m      = 0;
  const status = document.getElementById('boot-status');
  const fill   = document.getElementById('boot-bar-fill');

  const tick = () => {
    status.textContent  = messages[m];
    fill.style.width    = ((m + 1) / messages.length * 100) + '%';
    m++;
    if (m < messages.length) {
      setTimeout(tick, 380);
    } else {
      setTimeout(() => {
        boot.classList.add('fade');
        setTimeout(() => boot.remove(), 700);
      }, 380);
    }
  };

  setTimeout(tick, 200);
}
