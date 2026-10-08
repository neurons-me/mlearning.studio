# mlearning.studio

> *Machine learning studio for the [neurons.me](https://neurons.me) stack.*

**Status:** under development by [neurons.me](https://neurons.me).

A multi-runtime package — pick a language and start from the matching folder:

| Runtime | Path | Status |
| ------- | ---- | ------ |
| 🔷 **TypeScript** | [`Typescript/`](./Typescript/) | Under development |
| 🐍 **Python** | [`Python/`](./Python/) | Under development |
| 🦀 **Rust** | [`Rust/`](./Rust/) | Under development |


## Datasets

Curated entries (links + live demos — **not** bulk dumps):

| Dataset | Path | Pages |
| ------- | ---- | ----- |
| **Madrid GTFS** | [`datasets/madrid-gtfs/`](./datasets/madrid-gtfs/) | [/datasets/madrid-gtfs/](https://neurons-me.github.io/mlearning.studio/datasets/madrid-gtfs/) |
| **Hospital** | [`datasets/hospital/`](./datasets/hospital/) | [/datasets/hospital/](https://neurons-me.github.io/mlearning.studio/datasets/hospital/) |

Collection index: [`datasets/`](./datasets/) · [https://neurons-me.github.io/mlearning.studio/datasets/](https://neurons-me.github.io/mlearning.studio/datasets/)

Upstream: [BigDaMa](./BigDaMa/) — Raha/Baran and the dirty/clean benchmarks in BigDaMa/raha (Hospital is pinned from there).

Upstream: [GTFS](./GTFS/) — public transit feeds (Madrid GTFS is listed there).

## Clone

```bash
git clone https://github.com/neurons-me/mlearning.studio.git
cd mlearning.studio
```

### TypeScript

```bash
cd Typescript
npm install
npm run test:ts
```

### Python

```bash
cd Python
pip install -e .
```

### Rust

```bash
cd Rust
cargo check
```

---

Part of [all.this](https://neurons-me.github.io/all.this/) · [neurons.me](https://neurons.me) · [GitHub](https://github.com/neurons-me/mlearning.studio)

Pages: [https://neurons-me.github.io/mlearning.studio](https://neurons-me.github.io/mlearning.studio)
