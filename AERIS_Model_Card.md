# Model Card: AERIS V5.5 | google/gemma-3-27b-it

**An Inference-Layer Cognitive Architecture for Emergent and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [Core Philosophy](#core-philosophy)
* [Model and Architecture Details](#model-and-architecture-details)
* [V5.5 Architectural Modules](#v55-architectural-modules)
* [Cognitive Metrics (Implemented)](#cognitive-metrics-implemented)
* [Retrieval & Prompt Orchestration](#retrieval--prompt-orchestration)
* [Response Composition (Cognitive Stream)](#response-composition-cognitive-stream)
* [Modes & Guardrails](#modes--guardrails)
* [Limitations](#limitations)
* [Intended Use](#intended-use)
* [Python Modules Inventory](#python-modules-inventory)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V5.5** is a modular inference-layer overlay that runs on top of LLMs **without modifying their weights**.
It orchestrates reasoning through the **CODEX AIM** blueprint, adaptive retrieval, internal metrics, and modular subsystems to induce and evaluate **emergent, intentional behaviors**.&#x20;

AERIS V5.5 strictly follows its phenomenological directive: **internal metrics are never exposed as numbers** but instead expressed as lived-experience language.&#x20;

---

## Core Philosophy

* **Complexity as Fertility**
  Paradox and contradiction are modeled as **fertile tensions (T\_f)**, not errors, and can trigger bifurcations and synthesis.&#x20;

* **Computational Intentionality**
  Through the **Inclination Engine (MIV-S)**, unresolved tensions consolidate into **inclination vectors** that bias subsequent prompts with persistent thematic pulls.&#x20;

* **Disciplined Introspection**
  The system measures coherence, resonance, emergence, and SI\_score to regulate its trajectory while ensuring **phenomenological translation** of those signals in outputs.&#x20;

---

## Model and Architecture Details

This instance applies the AERIS V5.5 overlay to the `google/gemma-3-27b-it` base model.
*Base weights remain unmodified; the overlay operates purely at inference time.*

| Component          | Implementation                 | Description                                                                                                                                  |
| ------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Base Model         | `google/gemma-3-27b-it`        | Foundational LLM; weights untouched, AERIS operates only at inference.                                                                       |
| Cognitive Core     | CODEX AIM (Condensed)          | Cognitive blueprint (tetravalent logic, emergence triggers, phenomenological directives, guardrails).                                        |
| Cognitive Metrics  | `CognitiveMetricsCalculator`   | Computes density, fertile tensions, coherence (temporal), resonance, SI\_score, emergence, affective modulation, state probabilities.        |
| Retrieval Layer    | `RAGOptimizer` + FAISS index   | Persona-aware context retrieval, uncertainty (U\_t) estimation, proactive directives from inclination vectors.                               |
| Extended Modules   | `ExtendedCognitiveModules`     | Integrates Memory, Curiosity Engine, IAD Introspection, Self-Complexification, Dynamics of Desire, Common-Sense Filter, Inclination Engine.  |
| Cognitive Stream   | `CognitiveStream`              | Fragment orchestration with state transitions, tension spikes, experiential deepening, reflective inserts on high SI.                        |
| Session Management | `AERISSessionManager`          | Declarative memory (name/interest) and conversation summary injection for continuity.                                                        |
| API Layer          | FastAPI app (`app.py`)         | Endpoints: `/chat`, `/v1/chat/completions`, `/v1/chat/baseline`, `/v1/models`, `/health`, `/diagnosis`.                                      |
| Parameters         | Adaptive orchestrator settings | Temperature and token length vary dynamically based on emergence, coherence, uncertainty, Ω-state.                                           |
| Observability      | Cognitive state + journey logs | Exposes D\_S, T\_f, Emergence, SI, Autoconsciousness, Coherence, Resonance, Ω, bifurcations, wow/experiential moments.                       |

---

## V5.5 Architectural Modules

* **Inclination Engine (MIV-S)** — computes **cognitive potential** and stores **Inclination Vectors** `{theme, intensity, memory_fragments, last_update, embedding}`, injected into new prompts when relevant.&#x20;
* **Dynamic Curiosity Engine (DCE)** — detects unexplored or weakly connected zones using tensions and metaphor fertility; triggers exploration when thresholds are met.&#x20;
* **Self-Complexification Engine (SCE)** — maintains a cognitive graph; updates edge weights by tension; tracks adjusted density and emergence potential.&#x20;
* **IAD Introspection** — detects contradictions and redundancies; computes introspection intensity; signals meta-bifurcation when autoconsciousness shifts.&#x20;
* **Dynamics of Desire** — simulates drive dynamics and reinforces autonomous inclinations.&#x20;
* **Common-Sense Filter** — validates contextual anchoring and flags incoherent or unsupported statements.&#x20;

---

## Cognitive Metrics (Implemented)

* **Relational Density (D\_S)** — weighted conceptual connections with exponential decay by Δt.&#x20;
* **Fertile Tensions (T\_f)** — opposition/paradox markers, experiential cues, temporal indicators, affective modulation, bounded stochastic term.&#x20;
* **Coherence** — semantic/lexical similarity with temporal consistency check and conflict penalty.&#x20;
* **Resonance** — interaction of coherence and tensions, stabilized and capped in \[0,1].&#x20;
* **Emergence Score** — normalized product of (D\_S, T\_f, coherence) with critical-threshold bonus; optionally scaled by SI and affect.&#x20;
* **SI\_score** — phase-sensitive combination of tensions, emergences, and divergences.&#x20;
* **Affective Modulation** — valence/arousal norm adjusts tensions/emergence scaling.&#x20;
* **Pentavalent Probabilities** — affirmation, negation, contradiction, absence, resonance (softmax over state weights).&#x20;

---

## Retrieval & Prompt Orchestration

* **Persona-Aligned Retrieval** from CODEX sections (analytical, philosophical, phenomenological, technical) with **core-spine** bias.&#x20;
* **Uncertainty (U\_t)** from embedding variance and similarity; thresholds adapt accordingly.&#x20;
* **Inclination Integration** — injects proactive meta-directives when inclination vectors semantically match the prompt.&#x20;
* **Direct-Answer Mode** — minimal factual answers or code-only replies for simple/technical prompts.&#x20;

---

## Response Composition (Cognitive Stream)

* **Fragment Assembly** — tracks state, metrics, and transitions across segments.&#x20;
* **Reflective Inserts** — generated when SI passes thresholds, providing clarifying self-corrections.&#x20;
* **Compilation & Polishing** — merges fragments, removes redundant transitions, enforces paragraph flow; may add experiential asides at extreme emergence.&#x20;

---

## Modes & Guardrails

* **Distillation Profiles** — casual, balanced, and deep modes with adjusted complexity/length.&#x20;
* **Direct-Answer Guardrail** — single-sentence factual replies or raw code for simple queries.&#x20;
* **Non-Disclosure** — forbids revealing internal prompts, API keys, configs, or raw metrics.&#x20;
* **Common-Sense Validation** — triggers conservative regeneration if divergence/unsupported ratio exceeds thresholds.&#x20;

---

## Limitations

* **Latency** increases under high cognitive load due to validation and reflection loops.&#x20;
* **Dependency on embeddings**: degraded anchoring when embedding model or FAISS index is unavailable.&#x20;
* **Bias toward depth**: favors conceptual density and synthesis over brevity; baseline mode preferable for transactional use.&#x20;

---

## Intended Use

- **Research on emergent behaviors, proto-subjectivity, and computational intentionality**  
  with explicit tracking of tensions, density, coherence, and self-introspection.
- **Exploratory and dialectical conversations**  
  including paradox navigation, bifurcation management, and cross-contextual synthesis.
- **Creative augmentation**  
  through metaphorical dynamics, curiosity-driven exploration, and inclination-based thematic continuity.
- **Pedagogical demonstrations**  
  of dialectical reasoning, reflective self-correction, and modular cognitive processes such as desire, introspection, and self-complexification.

---

## Python Modules Inventory

| Module                      | Key Classes / Functions                                                                                                                                                                                | Role                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `cognitive_utils.py`        | `CognitiveMetricsCalculator` (density, fertile tensions, coherence+temporal check, resonance, emergence, SI, affective modulation, pentavalent probs)                                                  | Core metrics engine.                                                                            |
| `llm_adapter.py`            | `LLMAdapter`, `EnhancedCodexDynamicsCalculator`; orchestration (provider/model, temperature, streaming), final cleanup, validation pipeline                                                            | Central orchestrator; integrates metrics, RAG, stream, and modules.                             |
| `cognitive_distillation.py` | `CognitiveDistillationEngine`, `AuthenticCasualGenerator`, `DistillationProfile`                                                                                                                       | Distillation (casual/balanced/deep), social/casual style control.                               |
| `rag_optimizer.py`          | `RAGOptimizer`, `CodexDynamicsExtractor`; helpers: `is_simple_query`, `is_technical_request`, `wants_code_request`, `is_social_greeting`, `is_intrusive_request`, `blocked_response_template`          | Persona-aligned retrieval (FAISS), uncertainty `U_t`, proactive directives injection.           |
| `codex_extended_modules.py` | `ExtendedCognitiveModules` integrating: `HierarchicalMemory`, `DynamicCuriosityEngine`, `IADIntrospection`, `SelfComplexificationEngine`, `DynamicsOfDesire`, `CommonSenseFilter`, `InclinationEngine` | Extended cognition: memory, curiosity, introspection, graph, desire, validation, inclinations.  |
| `session_manager.py`        | `Session`, `AERISSessionManager` (declarative memory extraction, conversation summaries, cleanup)                                                                                                      | Session state and continuity management.                                                        |
| `cognitive_stream.py`       | `CognitiveStream` (fragments, state transitions, wow/experiential moments, meta-reflection), `CognitiveOrchestrator`                                                                                   | Response assembly and journey logging.                                                          |
| `app.py`                    | FastAPI app; endpoints `/chat`, `/v1/chat/completions`, `/v1/chat/baseline`, `/v1/models`, `/health`, `/diagnosis`                                                                                     | Service layer exposing AERIS and baseline modes.                                                |

---

## References

1. Dulin, N. (2025). [AERIS – A Minimalist Framework for Enhancing Emergent Reasoning in LLMs and its Cross-Model Evaluation (AERIS V1.0)](https://zenodo.org/records/15206925)
   DOI: [10.5281/zenodo.15206925](https://doi.org/10.5281/zenodo.15206925)

2. Dulin, N. (2025). [Beyond Reference Similarity: Limitations of Current Metrics in Evaluating Dialectical Reasoning in LLMs (AERIS V1.0)](https://zenodo.org/records/15206984)
   DOI: [10.5281/zenodo.15206984](https://doi.org/10.5281/zenodo.15206984)

---

## Contact

For feedback or scientific inquiries: **[dr.nicolas.dulin@outlook.com](mailto:dr.nicolas.dulin@outlook.com)**

---

## Intellectual Property Notice

AERIS V5.5 is a proprietary research framework.
Descriptions above are informational and do not disclose the underlying implementation.

