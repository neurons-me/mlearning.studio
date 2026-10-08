---
layout: readme
title: Datasets
description: Curated datasets for mlearning.studio — links and demos, not bulk dumps.
image: https://suign.github.io/assets/imgs/DATASETS.jpg
permalink: /datasets/
---

# Datasets

> Curated entries for [mlearning.studio](https://neurons-me.github.io/mlearning.studio/). This collection **points** at sources, live demos, and benchmark paths — it does **not** ship multi‑GB data dumps.

| Dataset | Path | Focus |
| ------- | ---- | ----- |
| **Madrid GTFS** | [`madrid-gtfs/`](./madrid-gtfs/) | Transit GTFS → reactive `.me` graph; Smart Cities demos + Zenodo / benchmark links |
| **BigDaMa** | [`BigDaMa/`](../BigDaMa/) | Raha/Baran data-cleaning benchmarks (TU Berlin) |
| &nbsp;&nbsp;↳ Hospital | [`hospital/`](./hospital/) | Dirty/clean pair → `.me` DataQuality checks (link + sha256) |

## Principles

- **Link, don’t dump** — Zenodo / upstream packages stay the source of truth for scale‑1 / scale‑10 / scale‑100 CHANGE archives.
- **Live demos first** — tiny synthetic subsets run in the browser on the published `.me` kernel.
- **Benchmark path** — reproducible workloads live under `.me`’s `Typescript/tests/Benchmarks/` (e.g. GTFS‑Madrid; Hospital / DataQuality‑Hospital when published).

---

Part of [mlearning.studio](https://neurons-me.github.io/mlearning.studio) · [neurons.me](https://neurons.me) · [GitHub](https://github.com/neurons-me/mlearning.studio)
