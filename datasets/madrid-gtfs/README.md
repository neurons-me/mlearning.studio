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
  <a href="https://neurons-me.github.io/.me/Tests/gtfs-madrid-universe.html">GTFS</a>
  <a href="https://neurons-me.github.io/.me/docs/Tests/madrid-knowledge.html">Fares</a>
</nav>

# Madrid GTFS

> Transit GTFS shaped as a reactive semantic graph on [`.me`](https://neurons-me.github.io/.me/) — for Smart Cities demos and dependency‑propagation benchmarks. **No bulk dumps in this repo.**

Madrid subway / regional GTFS is the shared shape used by:

1. Live **`.me` demos** (tiny synthetic subset in the browser)
2. The **Smart Cities** landing and syntax walkthrough
3. The **GTFS‑Madrid benchmark** path in `.me` (Van Assche CHANGE packages from Zenodo)

## Live demos (.me)

| Demo | URL |
| ---- | --- |
| GTFS Madrid universe | [gtfs-madrid-universe.html](https://neurons-me.github.io/.me/Tests/gtfs-madrid-universe.html) |
| Madrid knowledge / fares | [madrid-knowledge.html](https://neurons-me.github.io/.me/docs/Tests/madrid-knowledge.html) |
| Demo graph JSON (subset) | [gtfs-madrid-demo-graph.json](https://neurons-me.github.io/.me/docs/Tests/gtfs-madrid-demo-graph.json) |

These pages load a **mini** GTFS‑Madrid‑shaped graph — not the full Zenodo extract.

## Smart Cities

| Page | URL |
| ---- | --- |
| Smart Cities landing | [neurons-me.github.io/smart-cities/](https://neurons-me.github.io/smart-cities/) |
| Syntax (reactive city tree) | [.me/docs/Smart-Cities.html](https://neurons-me.github.io/.me/docs/Smart-Cities.html) |

## Benchmark path

In the `.me` repo (do not copy multi‑GB `data/` here):

- **Adapter + workload:** [`Typescript/tests/Benchmarks/GTFS-Madrid/`](https://github.com/neurons-me/.me/tree/main/Typescript/tests/Benchmarks/GTFS-Madrid)
- Measures dependency propagation (`k`, recomputed, `sourcePath`, latency) under GTFS‑like CREATE / UPDATE / DELETE — **not** an RML/RDF materialization bench.

Local clone:

```bash
git clone https://github.com/neurons-me/.me.git
cd .me/Typescript
# see tests/Benchmarks/GTFS-Madrid/README.md — put dumps under data/ (gitignored)
```

## Data sources (link only)

| Resource | Link |
| -------- | ---- |
| Van Assche CHANGE packages (preferred) | [Zenodo `10.5281/zenodo.14038823`](https://zenodo.org/records/14038823) |
| GTFS‑Madrid‑Bench (Chaves‑Fraga et al.) | [oeg-upm/gtfs-bench](https://github.com/oeg-upm/gtfs-bench) · [Zenodo `10.5281/zenodo.3574492`](https://doi.org/10.5281/zenodo.3574492) |

Prefer **CHANGE** archives (`GTFS-Scale-{1,10,100}-CHANGE.tar.xz`), not ALL. Extract only the CSVs you need under the benchmark’s `data/scale{N}/{base,seed0}/` — see the [GTFS‑Madrid README](https://github.com/neurons-me/.me/blob/main/Typescript/tests/Benchmarks/GTFS-Madrid/README.md).

## Citation (benchmark lineage)

- Dylan Van Assche et al., *Incremental Knowledge Graph Construction from Heterogeneous Data Sources* — resources on Zenodo above.
- David Chaves‑Fraga et al., *GTFS‑Madrid‑Bench* (Journal of Web Semantics, 2020).

---

<style>
  .page-crumbs,
  .page-crumbs p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem 0.9rem;
    margin: 2rem 0 0;
  }
  .page-crumbs {
    padding: 1rem 0 0.25rem;
    border-top: 1px solid #d0d7de;
    font-size: 0.92rem;
  }
  .page-crumbs p { margin: 0; }
  .page-crumbs a {
    display: inline-flex;
    padding: 0.25rem 0.4rem;
    border-radius: 0.35rem;
    text-decoration: none;
  }
  .page-crumbs a:hover,
  .page-crumbs a:focus-visible {
    background: rgba(15, 106, 120, 0.1);
  }
  .page-crumbs .separator { color: #8c959f; }
  @media (prefers-color-scheme: dark) {
    .page-crumbs { border-top-color: #30363d; }
    .page-crumbs .separator { color: #8b949e; }
  }
</style>

<nav class="page-crumbs" aria-label="Breadcrumb">
  <a href="https://this.me">.me</a>
  <span class="separator" aria-hidden="true">/</span>
  <a href="https://neurons-me.github.io/.me/docs/Tests/">Tests</a>
  <span class="separator" aria-hidden="true">/</span>
  <a href="https://github.com/neurons-me/.me/tree/main/Typescript/tests/Benchmarks/GTFS-Madrid">Benchmarks</a>
  <span class="separator" aria-hidden="true">/</span>
  <a href="https://neurons-me.github.io/mlearning.studio/datasets/">Datasets</a>
  <span class="separator" aria-hidden="true">/</span>
  <a href="https://neurons-me.github.io/mlearning.studio/datasets/madrid-gtfs/" aria-current="page">Madrid GTFS</a>
</nav>
