# Madrid GTFS

> Transit GTFS shaped as a reactive semantic graph on [`.me`](https://neurons-me.github.io/.me/) — for Smart Cities demos and dependency‑propagation benchmarks. **No bulk dumps in this repo.**

Madrid subway / regional GTFS is the shared shape used by:

1. Live **`.me` demos** (tiny synthetic subset in the browser)
2. The **Smart Cities** landing and syntax walkthrough
3. The **GTFS‑Madrid benchmark** path in `.me` (Van Assche CHANGE packages from Zenodo)

## Live demos (.me)

| Demo | URL |
| ---- | --- |
| GTFS Madrid universe | [gtfs-madrid-universe.html](https://neurons-me.github.io/.me/docs/Tests/gtfs-madrid-universe.html) |
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

← [Datasets](../) · [mlearning.studio](https://neurons-me.github.io/mlearning.studio)
