# Repository Map

## Repositories and Responsibilities

### 1) kup-program
Primary role:
- experiment layer for action contracts
- measurement layer for execution behavior
- learning feedback into contract design

Outputs passed downstream:
- action patterns
- benchmark records
- failure classes

### 2) decide.engine-tools
Primary role:
- trace engine for decision visibility
- decision engine for rule-based path selection
- agent system for structured action planning

Outputs passed downstream:
- validated action request
- decision record
- trace context

### 3) zayvora
Primary role:
- runtime for local inference and execution
- scheduler coupling for deterministic dispatch
- execution reporting back to trace system

Outputs passed upstream:
- execution result
- runtime metrics
- failure/fallback events

### 4) hanuman.solutions (adjacent execution context)
Primary role:
- deployment-facing problem context
- applied automation scenarios that stress-test execution assumptions

It is not the Daxini OS core runtime, but it provides real workload context.

## How They Connect

```text
kup-program
   │  (experiments + measurements)
   ▼
decide.engine-tools
   │  (decisioning + traces + agent plan)
   ▼
zayvora
   │  (runtime execution)
   ▼
trace/metrics feedback
   └──────────────► kup-program + decide.engine-tools
```

## Data Flow Between Repos

1. `kup-program` emits candidate action structures and observed constraints.
2. `decide.engine-tools` normalizes these into executable action contracts.
3. `decide.engine-tools` attaches trace context and decision metadata.
4. `zayvora` resolves runtime selection under provided constraints.
5. Execution outcomes and runtime metrics return to decision traces.
6. Measured outcomes feed the next experiment cycle in `kup-program`.

This forms a closed loop: design → decide → execute → measure.
