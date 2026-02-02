# 1. System Overview

SynCrypt consists of three major layers:

## 1.1 Core (Rust Daemon)

Handles block storage, CRDTs, sync, encryption, indexing, and API.

## 1.2 User Interface (Tauri + React)

Graph, editor, monitoring, conflict UI.

## 1.3 Sync Engine (libp2p)

LAN discovery, DHT, NAT traversal, encrypted peer connections.

## 1.4 Data Model

* Encrypted content blocks
* Manifests
* Directory maps
* Graph metadata
