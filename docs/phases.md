# Daxini OS Build Phases

## Phase 0 — Action Contracts + Basic Execution

Scope:
- define base action contract schema
- map core intent types to executable actions
- implement basic local execution path for a limited action set

Deliverables:
- action contract spec (minimum required fields)
- contract validator
- baseline execution loop with trace IDs

## Phase 1 — Constraint Engine + Decision Engine

Scope:
- implement constraint profile model
- add feasibility scoring for runtime candidates
- formalize deterministic decision policies in engine tools

Deliverables:
- constraint evaluator
- decision policy ruleset
- decision trace records with selected/rejected candidates

## Phase 2 — Scheduler + Runtime

Scope:
- implement deterministic scheduler
- bind scheduler output to zayvora runtime adapters
- implement fallback execution order

Deliverables:
- scheduler core
- runtime dispatch adapters
- execution/fallback trace integration

## Phase 3 — Hardware Integration

Scope:
- integrate with hardware profile capture
- validate behavior across multiple local machine classes
- tune constraints for repeatable performance envelopes

Deliverables:
- hardware constraint profiles
- benchmark matrix by machine tier
- prototype loop showing action-to-execution determinism on-device
