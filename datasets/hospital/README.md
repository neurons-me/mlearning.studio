<style>
  .sc-topnav {
    display: flex; align-items: center; gap: 4px; flex-wrap: wrap;
    padding: 8px 32px; margin: 0 auto 1.5rem; max-width: 980px;
    border-bottom: 1px solid #d0d7de; font-size: 0.82rem; font-weight: 600;
    background: transparent; min-height: 40px; box-sizing: border-box;
  }
  .sc-topnav a {
    text-decoration: none; color: #57606a; padding: 5px 10px; border-radius: 6px;
    transition: background .15s, color .15s;
  }
  .sc-topnav a:hover { color: #24292f; background: rgba(15, 106, 120, 0.1); }
  .sc-topnav a.active { color: #0f6a78; background: rgba(15, 106, 120, 0.14); }
  @media (prefers-color-scheme: dark) {
    .sc-topnav { border-bottom-color: #30363d; }
    .sc-topnav a { color: #8b949e; }
    .sc-topnav a:hover { color: #c9d1d9; background: rgba(79, 209, 197, 0.1); }
    .sc-topnav a.active { color: #4fd1c5; background: rgba(79, 209, 197, 0.16); }
  }
  @media (max-width: 767px) { .sc-topnav { padding: 8px 16px; } }
</style>
<nav class="sc-topnav" aria-label="Smart Cities">
  <a href="https://neurons-me.github.io/smart-cities/">Smart Cities</a>
  <a href="https://neurons-me.github.io/.me/docs/Smart-Cities.html">Syntax</a>
  <a href="https://neurons-me.github.io/.me/docs/Tests/gtfs-madrid-universe.html">GTFS</a>
  <a href="https://neurons-me.github.io/.me/docs/Tests/madrid-knowledge.html">Fares</a>
  <a href="https://neurons-me.github.io/mlearning.studio/datasets/hospital/" class="active">Hospital</a>
</nav>

# Hospital

> Hospital as a **Smart Cities infrastructure node** on [`.me`](https://neurons-me.github.io/.me/) — provider / measure tables as live dependencies. **No bulk dumps in this repo.**

**Scope:** `.me` does **not** detect or repair errors; Raha/Baran (and similar tools) do that. Here, `.me` maintains derived checks after a correction and can expose propagation through `explain()`.

Hospital sits alongside transit (GTFS) and fares as another city‑scale graph shape:

1. **Smart Cities** landing card (funnel into this domain)
2. **Dataset provenance** via pinned Raha/Baran hospital dirty/clean CSVs (link only)
3. **Benchmark path** in `.me` for post‑correction derived checks (branch may not be on `main` yet)

## Live demo

| Status | URL |
| ------ | --- |
| Placeholder | Live Hospital demo — *coming soon* (will publish under `.me/docs/…` when ready) |
| Domain stub | [Hospital](https://neurons-me.github.io/.me/docs/Hospital.html) |

## Smart Cities

| Page | URL |
| ---- | --- |
| Smart Cities landing | [neurons-me.github.io/smart-cities/](https://neurons-me.github.io/smart-cities/) |
| Syntax (reactive city tree) | [.me/docs/Smart-Cities.html](https://neurons-me.github.io/.me/docs/Smart-Cities.html) |

## Benchmark path in `.me`

In the `.me` repo (do **not** copy CSVs here):

- **Path:** `Typescript/tests/Benchmarks/DataQuality-Hospital/`
- This path may live on a feature branch before it lands on `main` — treat it as the **benchmark path in `.me`**, not a guarantee that it is already published on the default branch.
- The workload asks: when one erroneous record is corrected, can `.me` update dependent quality measurements and expose the wave through `explain()`?

Local clone (when the branch is available):

```bash
git clone https://github.com/neurons-me/.me.git
cd .me/Typescript/tests/Benchmarks/DataQuality-Hospital
# see README — fetch dirty/clean from Raha at the pinned commit (gitignored data/)
```

## Data sources (link only)

Pinned upstream: [BigDaMa/raha](https://github.com/BigDaMa/raha) @ `7be1334b8c7bbdac3f47ef514fb3e1e8c5fc181c`

| File | Raw URL | sha256 |
| ---- | ------- | ------ |
| dirty | [`datasets/hospital/dirty.csv`](https://raw.githubusercontent.com/BigDaMa/raha/7be1334b8c7bbdac3f47ef514fb3e1e8c5fc181c/datasets/hospital/dirty.csv) | `dbc5575b915fe8b5e0ac6dc6172f38ba91e611fdb76d09a8f4a81cb7ea9925ac` |
| clean | [`datasets/hospital/clean.csv`](https://raw.githubusercontent.com/BigDaMa/raha/7be1334b8c7bbdac3f47ef514fb3e1e8c5fc181c/datasets/hospital/clean.csv) | `ea3ee44998455c0b491750c348509de176c758a3bbf58e4530c0a136bb248b4b` |

Fetch and verify locally; **do not** commit the CSVs into mlearning.studio or the public Pages trees.

## Citation (dataset lineage)

- Raha / Baran hospital dirty–clean pair — [BigDaMa/raha](https://github.com/BigDaMa/raha) (and related BigDaMa cleaning literature).

---

← [Datasets](../) · [mlearning.studio](https://neurons-me.github.io/mlearning.studio) · [Smart Cities](https://neurons-me.github.io/smart-cities/)
