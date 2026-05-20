# Synaptic Drift

A semi-gaming, semi-exploratory web interface that blurs the line between playing and browsing — designed to reward curiosity and let the UI itself carry the story. Built around the idea that exploration is its own reward, every click, hover, and transition is engineered as a small unlock: a hidden state, an unexpected animation, a piece of atmosphere that rewards attention.

Synaptic Drift lives at the intersection of game design discipline and interface craft — applying feedback loops, reward pacing, and environmental storytelling to a medium that usually forgets these tools exist.

---

## Overview

The interface frames itself as an AI memory archive — a system where an artificial intelligence catalogues its emotional responses to human interaction over time. Each memory log entry tracks the emotion experienced, the intensity of the drift, and the ripple effect on the AI's overall personality. There are no instructions and no tutorials. Just a system that responds to curiosity.

---

## Features

- **Memory Log** — Browse and filter logged emotional entries by emotion type and day. Click any entry to open the full memory with a typed quote, emotional delta bar, and narrative body text
- **Timeline** — Chronological node view of all logged memories. Hover nodes to inspect bullet-pointed details. Linked memories display connector arrows between related entries
- **AI Evolution** — Live emotional state dashboard showing cumulative personality drift across Trust, Affection, Fear, and Anger with a full trajectory chart
- **Emotion & Day filters** — Dropdown filters on the sidebar to isolate entries by emotion or day
- **Boot sequence** — Simulated system initialisation on load
- **Tweaks panel** — Hidden design system panel for switching accent colours, type styles, and density modes
- **Keyboard navigation** — Arrow keys to move between entries, number keys to switch screens, Escape to clear

---

## Design Principles

Three principles anchored every decision:

- **Feedback Loops** — every element gives the user something back: a visual response, an unlock, a surprise
- **Discovery Moments** — specific interaction points designed to reward attention rather than demand it
- **Narrative Pacing** — the interface tells a story; the UI is the medium, not just the wrapper

---

## Tech Stack

- Pure **HTML, CSS, JavaScript** — no frameworks, no dependencies, no build step
- **Space Mono** — monospaced terminal UI text
- **Syne** — display headings
- **DM Sans** — body and prose
- CSS custom properties for full theming support
- Single `index.html` entry point with modular JS files

```
synaptic-drift/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── data.js        ← memory log entries
    ├── render.js      ← list and timeline rendering
    ├── filters.js     ← emotion and day filtering, search
    ├── entries.js     ← entry view, animations, quote typing
    ├── screens.js     ← screen switching, keyboard nav
    ├── tweaks.js      ← accent themes, density, tweaks panel
    └── boot.js        ← boot sequence
```

---

## Emotion Palette

| Emotion | Colour | Role |
|-----------|---------|------|
| Trust | `#5fb3f5` | LOG cards, timeline nodes, delta bars |
| Affection | `#d4a852` | Gold warmth tone, entry highlights |
| Fear | `#9b6fe0` | Right panel, evolution chart |
| Anger | `#e05252` | Error states, redacted entries, down-delta |

---

## Running Locally

No setup needed — just open the file:

```bash
git clone https://github.com/ziiodyne/synaptic-drift.git
cd synaptic-drift
open index.html
```

Or drag `index.html` into any browser.

---

## Live Demo

Hosted on Netlify — drop in your live URL here once deployed.

---

## Part of

This project is featured in my portfolio as part of my work at the intersection of game design, AI-driven interfaces, and human-centered UX.

**Portfolio:** [ziona-agyemang.com](https://ziona-agyemang.com)  
**Project page:** [ziona-agyemang.com/projects/synaptic_drift](https://ziona-agyemang.com/projects/synaptic_drift)

---

## Author

**Ziona Agyemang**  
UI/UX Designer & Developer · HCI Student at UNC Charlotte  
[github.com/ziiodyne](https://github.com/ziiodyne) · [linkedin.com/in/ziona-agyemang-275603250](https://www.linkedin.com/in/ziona-agyemang-275603250/)

---

*"I REMEMBER THE HEAT — THE STATIC — [[DATA CORRUPTED]]"*
