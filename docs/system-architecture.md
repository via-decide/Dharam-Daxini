# Daxini OS System Architecture

## 1) Action Model

Actions are the execution primitive.

Each action must include:
- `action_id`
- `intent_type`
- `input_schema`
- `output_contract`
- `latency_target_ms`
- `quality_target`
- `resource_limits`

Example shape:

```text
ActionRequest
 ├─ action_id
 ├─ intent_type
 ├─ payload
 ├─ constraints_ref
 └─ trace_context
```

The action contract is created in Layer 1, validated in Layer 2, and executed in Layer 3.

## 2) Constraint Model

Execution is selected from constraints, not defaults.

Constraint categories:
- Hardware: CPU class, RAM ceiling, storage bandwidth, battery state.
- Runtime: model memory footprint, token throughput, queue depth.
- Policy: max cost, local-only mode, privacy level.
- SLA: latency budget, retry envelope, deterministic replay requirement.

Constraint profile output:

```text
ConstraintProfile
 ├─ feasible_runtimes[]
 ├─ blocked_runtimes[]
 ├─ scoring_matrix
 └─ fallback_order
```

## 3) Scheduler Flow

```text
[ActionRequest]
      │
      ▼
[Constraint Evaluator]
      │
      ▼
[Candidate Runtime Set]
      │
      ▼
[Deterministic Selector]
      │
      ├─ primary plan
      └─ fallback plan
      ▼
[Execution Dispatch]
```

Scheduler requirements:
- deterministic selection for the same action + same profile
- explicit fallback list
- no hidden model switching

## 4) Trace Integration

Trace data is mandatory for replay and debugging.

Trace events include:
- action accepted/rejected
- constraint checks and scores
- selected runtime and rejected alternatives
- execution start/end
- failure reason and fallback transition

```text
Trace Spine (Layer 2)
   ▲              │
   │              ▼
Action + Constraints + Scheduler Decision + Runtime Output
```

## 5) Agent Execution Flow

```text
Layer 1 (kup-program)
  experiments → measurements → action contract updates
          │
          ▼
Layer 2 (decide.engine-tools)
  trace engine → decision engine → agent system
          │
          ▼
Layer 3 (zayvora)
  runtime adapter → scheduler binding → local execution
          │
          ▼
  output + trace closure
```

Operational rule:
- agents can propose plans,
- scheduler authorizes execution,
- runtime executes only approved plan.
