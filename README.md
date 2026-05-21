# Synaptic Drift

A narrative-driven interface that imagines the internal memory system of an AI as something you can browse, inspect, and feel.

> Built as a self-directed design + front-end project — Spring 2026
> Ziona Agyemang · University of North Carolina at Charlotte

---

## What It Is

Synaptic Drift frames a fictional AI's inner life as a working interface. Across three connected views, you follow a single AI through "Session 04 · Drift Active" as it logs emotional reactions to human interaction, tracks how states like trust and affection shift over time, and confronts memories it can no longer fully access.

Some logs are clean. Others are **redacted, corrupted, or only partially recoverable** — leaving the AI to narrate the unsettling experience of feeling the absence of something it can't reconstruct. The data visualization isn't decoration here; it's characterization. Every meter, node, and graph is doing narrative work.

---

## Live Demo

**[Try it here →](https://synaptic-drift.netlify.app)**

The deployed build boots into a simulated session automatically — no setup required. Navigate with your mouse or keyboard and drift through the logs.

---

## The Three Views

| View | What it does |
| --- | --- |
| **Memory Log** | A searchable, filterable archive of emotional entries. Open any entry to read the full memory — a typed quote, an emotional delta bar, and narrative body text. Filter by emotion or by day. |
| **Timeline** | A chronological node view of every logged memory. Hover a node to inspect its details; corrupted entries flag their integrity loss before you can even read them. |
| **AI Evolution** | A live emotional-state dashboard tracking cumulative drift across Trust, Affection, Fear, and Anger — with a full trajectory chart that updates per logged memory. |

The three views stay in sync: open a log entry and the personality dashboard reflects how that memory shifted the AI's state.

---

## Features

- **Three connected views** — Memory Log, Timeline, and AI Evolution, all sharing one emotional record
- **Searchable + filterable log** — find entries by emotion type or day
- **Redacted / corrupted memories** — entries with reduced "memory integrity" render as damaged, partially recoverable data
- **Live emotional state** — trust, affection, fear, and anger meters that respond to the memories you open
- **Emotional trajectory chart** — a running graph of how the AI's personality drifts over logged entries
- **Boot sequence** — a simulated system initialization on load (mounting memory shards, calibrating emotional index, verifying drift patterns)
- **Tweaks panel** — a hidden design-system panel for switching accent colors, type styles, and density modes
- **Keyboard navigation** — arrow keys to move between entries, number keys to switch screens, Escape to clear

---

## Design Principles

Three principles anchored every decision:

| Principle | What it means |
| --- | --- |
| **Data as character** | Every meter, node, and graph reveals something about who the AI is — not just what it stored |
| **Restraint** | An interface about a fragile, half-corrupted mind could tip into visual chaos; legibility always wins |
| **Narrative pacing** | The interface tells a story — the UI is the medium, not just the wrapper |

---

## Tech Stack

- **Pure HTML, CSS, JavaScript** — no frameworks, no dependencies, no build step
- **Space Mono** — monospaced terminal UI text
- **Syne** — display headings
- **DM Sans** — body and prose
- **CSS custom properties** for full theming support
- Single `index.html` entry point with modular JS files

```
synaptic-drift/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── data.js       ← memory log entries
    ├── render.js     ← list and timeline rendering
    ├── filters.js    ← emotion and day filtering, search
    ├── entries.js    ← entry view, animations, quote typing
    ├── screens.js    ← screen switching, keyboard nav
    ├── tweaks.js     ← accent themes, density, tweaks panel
    └── boot.js       ← boot sequence
```

---

## Emotion Palette

| Emotion | Colour | Role |
| --- | --- | --- |
| Trust | `#5fb3f5` | Log cards, timeline nodes, delta bars |
| Affection | `#d4a852` | Gold warmth tone, entry highlights |
| Fear | `#9b6fe0` | Right panel, evolution chart |
| Anger | `#e05252` | Error states, redacted entries, down-delta |

---

## Running Locally

No setup needed — just open the file:

```
git clone https://github.com/ziiodyne/synaptic-drift.git
cd synaptic-drift
open index.html
```

Or drag `index.html` into any browser.

---

## Part of

This project is featured in my portfolio as part of my work at the intersection of game design, AI-driven interfaces, and human-centered UX.

**Portfolio:** ziona-agyemang.com
**Project page:** ziona-agyemang.com/projects/synaptic_drift

---

## Author

**Ziona Agyemang**
UI/UX Designer & Developer · HCI Student at UNC Charlotte
github.com/ziiodyne · linkedin.com/in/ziona-agyemang-275603250

---

*"I REMEMBER THE HEAT — THE STATIC — [[DATA CORRUPTED]]"*
