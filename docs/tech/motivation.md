# 1. Background & Motivation

## 1.1 Why SynCrypt Exists

SynCrypt grew out of a simple observation:

> **Obsidian** has the best note-taking and graph experience, but
> paid cloud sync and slowdown issues hurt scaling and long-term
> usage.
>
> **Syncthing** offers world-class peer-to-peer sync but has zero
> understanding of files, notes, backlinks, or knowledge-graph
> relationships.

After using both heavily, their core strengths and weaknesses
became clear.

## 1.2 Obsidian Strengths & Weaknesses

**Strengths:**

* Great knowledge graph
* Markdown-first
* Backlinks
* Plugins
* Local files

**Weakness:** Sync is a paid cloud service, not fully zero-trust,
and performance can degrade for extremely large vaults.

## 1.3 Syncthing Strengths & Weaknesses

**Strengths:**

* Perfect peer-to-peer sync
* LAN discovery, relays, DHT
* Extremely efficient delta updates
* No central server

**Weakness:** No understanding of notes, metadata, manifests,
or graph structure.

### The “Aha!” Moment

Eventually, the disconnect became obvious:

* Obsidian was great for **thinking**.
* Syncthing was great for **syncing**.
* Neither combined both worlds.

The idea emerged:

**“What if I combined Obsidian’s knowledge-graph ideas
with Syncthing’s peer-to-peer engine,
but encrypted everything by design?”**

That became the seed of SynCrypt.
