# Daxini OS — Constraint-Driven Personal Computing System

A local-first operating system that executes actions based on hardware constraints, not assumptions.

## Core Idea

Daxini OS treats user intent as executable actions, not app navigation.

- **Actions instead of apps**: Users request outcomes (for example: summarize, classify, schedule, transform) and the system resolves the execution path.
- **Constraint-based execution**: Every action is evaluated against live constraints: compute budget, memory, model size, latency target, connectivity, and battery profile.
- **Local inference (Zayvora)**: Inference is routed to local models by default so decisions do not depend on external APIs.
- **Deterministic scheduling**: Runtime scheduling chooses an execution plan from explicit rules and profiles, then logs why that path was selected.

## System Layers

**Layer 1: kup-program**  
→ experiments, learning, measurement

**Layer 2: decide.engine-tools**  
→ trace engine, decision engine, agent system

**Layer 3: zayvora**  
→ runtime, scheduler, execution

## Current Build State

### Implemented
- Early action-driven tooling and decision workflows in `decide.engine-tools`.
- Active experimentation and operator learning loops in `kup-program`.
- Local model/runtime development direction in `zayvora` with execution-first focus.

### In Progress
- Unified action contract across all layers.
- Constraint profile engine for hardware-aware routing.
- Deterministic scheduler that binds action + constraints + runtime selection.
- Trace unification so every decision path is replayable.

### Not Built Yet
- Full end-to-end Daxini OS runtime that ships as a single cohesive local operating layer.
- Stable hardware-integrated execution prototype with measured constraint envelopes.
- Production-grade orchestration that covers all target action types under one scheduler.

## Why This Exists

Most AI workflows are API-dependent systems with variable latency, variable cost, and limited execution control. Daxini OS is being built to address:

- **API dependency risk**: If inference or orchestration depends on remote APIs, reliability and availability are externalized.
- **Cost and control drift**: Per-call billing and opaque model changes make long-term deterministic execution difficult.
- **Determinism gap**: Reproducible outcomes require explicit constraints, stable execution policy, and trace visibility.
- **Local-first requirement**: Personal computing systems should keep execution local whenever hardware permits.

## Repo Links

- `kup-program`: https://github.com/via-decide/kup-program
- `decide.engine-tools`: https://github.com/via-decide/decide.engine-tools
- `zayvora`: https://github.com/zayvora/zayvora-agent
- `hanuman.solutions`: https://hanuman.solutions

## Next Steps

1. Build constraint profile engine (device profile + runtime limits + action feasibility scoring).
2. Implement deterministic scheduler (rule evaluation, selection policy, fallback paths).
3. Deliver hardware prototype (measured local execution loop with trace output and repeatable benchmarks).

## Documentation

- [System Architecture](docs/system-architecture.md)
- [Repository Map](docs/repo-map.md)
- [Phased Build Plan](docs/phases.md)
