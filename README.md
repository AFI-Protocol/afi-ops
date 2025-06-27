# 🛠️ AFI Ops

![CI](https://github.com/AFI-Protocol/afi-ops/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![Version](https://img.shields.io/badge/version-0.1.0-blue)

Welcome to **AFI Ops**, the operational nerve center for the Agentic Financial Intelligence Protocol.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Core Modules](#core-modules)
- [Factory Templates](#factory-templates)
- [Testing](#testing)
- [Getting Started](#getting-started)

---

## 🧠 Overview

AFI Ops provides key AgentOps modules to support agent lifecycle, reproducibility, versioning, and real-time observability.

---

## 🧩 Core Modules

- `config-hash.ts` – Hash validator for agent configs
- `agent-version.ts` – Runtime agent versioning utility
- `sentryHook.ts` – Plug-in ready Sentry hook for observability
- `reportOps.ts` – Collects & reports AgentOps metadata

---

## 🏗️ Factory Templates

Factory-ready templates to help droids and CI agents orchestrate:

- `pipeline.yaml` – Factory pipeline orchestration
- `monitor.yaml` – Factory observability spec

---

## 🧪 Testing

```bash
pnpm install
pnpm test
```

Tests are located in `/tests`.

---

## 🚀 Getting Started

```bash
pnpm install
pnpm run ops
```

Your gateway to AgentOps autonomy begins here.
