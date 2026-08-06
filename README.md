# Portfolio — thuannhanACM

A single-page personal portfolio: a sticky intro column plus a scrolling column with
**About**, **Projects** (large foldable cards), and **Others** (a compact grid of prototypes).
Plain HTML / CSS / JS, no build step. Design inspired by [Brittany Chiang](https://brittanychiang.com).

## Editing content

All content lives in **one place** — the `data` object at the top of [`script.js`](script.js).
You never need to touch the HTML or CSS to change what the page says.

- **Personal info** → `data.profile`
- **About paragraphs & skills** → `data.about`, `data.skills`
- **The 6 projects** → `data.projects[]`
- **Prototypes ("Others")** → `data.others[]`

### Images & files (optional)

Drop files in [`assets/`](assets/) and reference them from `script.js`:

| What | Put at | Set in `data` |
|------|--------|----------------|
| Avatar | `assets/avatar.jpg` | `profile.avatar` |
| Résumé | `assets/resume.pdf` | `profile.cvUrl` |
| Project thumbnail | `assets/projects/<name>.png` | `project.image` |

If `image`/`avatar` is left empty, a colored gradient placeholder with initials is generated
automatically.

### Recolor

Change one line — `--accent` in [`styles.css`](styles.css) — to reskin the whole site.
(Set it back to `#64ffda` for the original Brittany-Chiang teal.)

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

Pushed to a repo named `NhanDinh.github.io`, GitHub Pages serves it as a **project page** at
`https://thuannhanACM.github.io/NhanDinh.github.io/`. All asset paths are **relative**, so this
works as-is. To get the clean `https://thuannhanACM.github.io/` URL, rename the repo to
`thuannhanACM.github.io`.
