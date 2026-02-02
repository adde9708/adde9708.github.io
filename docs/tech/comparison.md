# 1. Comparison to Existing Tools

* **Obsidian:** Great UI + graph, but sync and performance
  limitations.
* **Syncthing:** Excellent sync engine but zero knowledge-graph
  awareness.
* **Others:** Logseq, Notion, Joplin, Git-based tools.

> **SynCrypt** = Encrypted P2P sync + Graph awareness + CRDT
> correctness.

| Feature | Obsidian | Syncthing | **SynCrypt** |
| :--- | :---: | :---: | :---: |
| Local-first | ✔️ | ✔️ | **✔️** |
| P2P sync | ❌ | ✔️ | **✔️** |
| E2E encryption | Partial | Optional | **✔️ by default** |
| Graph-aware notes | ✔️ | ❌ | **✔️** |
| CRDT merges | ❌ | ❌ | **✔️** |
| Performance | Electron | Native | **Rust** |
| Free sync | ❌ | ✔️ | **✔️** |

> **SynCrypt** = A local-first, encrypted, peer-to-peer
> knowledge vault with a Rust core and graph-first UI.

## 2. What Makes SynCrypt Different

### 2.1 Not a clone of Obsidian

SynCrypt uses **CRDT objects** for files, metadata, folders, and
graph edges, not simple text files.

### 2.2 Not a clone of Syncthing

SynCrypt understands manifests, backlinks, graph structure, and
conflict resolution.

### 2.3 A fusion tool

**Aesthetics & UX:**

* Hacker terminal vibe
* Animated graph
* Sync topology map
* Reactive graph pulses
* Rust daemon under the hood
