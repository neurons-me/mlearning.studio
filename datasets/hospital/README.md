# Hospital

> Hospital provider / measure tables as a reactive node on [`.me`](https://neurons-me.github.io/.me/) — correct one record, update dependent quality checks, surface the wave with `explain()`. **No bulk dumps here.**

Raha/Baran (and similar tools) detect and repair errors. `.me` keeps the derived graph after a correction. This ficha pins the upstream dirty/clean CSVs and points at the `.me` benchmark path.

## Live demo

| Status | URL |
| ------ | --- |
| Placeholder | Live Hospital demo — *coming soon* |
| Domain stub | [Hospital](https://neurons-me.github.io/.me/docs/Hospital.html) |

## Benchmark path in `.me`

- **Path:** `Typescript/tests/Benchmarks/DataQuality-Hospital/` (may be on a feature branch before `main`)
- Do **not** copy CSVs into this repo.

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

Fetch and verify locally; do not commit the CSVs into mlearning.studio or the public Pages trees.

## Citation

- Raha / Baran hospital dirty–clean pair — [BigDaMa/raha](https://github.com/BigDaMa/raha)

---

← [Datasets](../) · [mlearning.studio](https://neurons-me.github.io/mlearning.studio) · [Smart Cities](https://neurons-me.github.io/smart-cities/)
