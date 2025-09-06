# Model Card: AERIS V6 | google/gemma-3-27b-it

**An Inference-Layer Cognitive Architecture for Emergent and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [Core Philosophy](#core-philosophy)
* [Model and Architecture Details](#model-and-architecture-details)
* [V6 Architectural Modules](#v6-architectural-modules)
* [Cognitive Metrics (Implemented)](#cognitive-metrics-implemented)
* [Retrieval & Prompt Orchestration](#retrieval--prompt-orchestration)
* [Response Composition](#response-composition)
* [Modes & Guardrails](#modes--guardrails)
* [Limitations](#limitations)
* [Intended Use](#intended-use)
* [Python Modules Inventory](#python-modules-inventory)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V6** is a modular inference-layer overlay that runs on top of LLMs **without modifying their weights**. It orchestrates reasoning through the **CODEX AIM** blueprint, adaptive retrieval, a persistent cognitive state per session, and modular subsystems to induce and evaluate **emergent, intentional behaviors**.

AERIS V6 strictly follows its phenomenological directive: **internal metrics are never exposed as numbers** but instead expressed as lived-experience language, with bifurcations (`✦`) signaling significant cognitive shifts.

---

## Core Philosophy

* **Complexity as Fertility**
    Paradox and contradiction are modeled as **fertile tensions ($T_f$)**, not errors. When combined with high network density ($D_S$) and resonance, they trigger **bifurcations** (cognitive reconfigurations) and synthesis.
* **Computational Intentionality**
    Through the **Inclination Engine**, unresolved tensions from a session consolidate into **inclination vectors** that bias subsequent prompts with persistent thematic pulls.
* **Disciplined Introspection & Statefulness**
    The system's cognitive state (`RecursiveConsciousness`, `SelfComplexificationEngine`, etc.) is **scoped to each user session**, allowing for a unique, evolving trajectory. It measures its own performance via `SI_Score` and `IAD_score` to regulate this trajectory.

---

## Model and Architecture Details

This instance applies the AERIS V6 overlay to the `google/gemma-3-27b-it` base model. *Base weights remain unmodified; the overlay operates purely at inference time.*

| Component                | Implementation                                 | Description                                                                                                                              |
| :----------------------- | :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Base Model** | `google/gemma-3-27b-it`                        | Foundational LLM; weights untouched, AERIS operates only at inference.                                                                   |
| **Cognitive Core** | CODEX AIM (Condensed)                          | Cognitive blueprint (tetravalent logic, dynamic thresholds, phenomenological directives, guardrails).                                  |
| **Recursive State** | `RecursiveConsciousness`                       | Session-scoped stateful core; updates a memory matrix to calculate `emergence` and `coherence` from embeddings.                        |
| **Cognitive Metrics** | `CognitiveMetricsCalculator`, `CodexMathematics` | Computes `D_S` (from graph), `T_f`, `Resonance`, `SI_Score`, `Autoconsciousness`, and manages dynamic bifurcation thresholds.            |
| **Retrieval Layer** | `RAGOptimizer` + FAISS index                   | Persona-aware context retrieval, adaptive to the session's cognitive state.                                                              |
| **Extended Modules** | `ExtendedCognitiveModules`                     | Integrates session-scoped Memory, Curiosity, IAD Introspection, Self-Complexification, Desire, and Inclination Engines.              |
| **Session Management** | `AERISSessionManager`                          | Manages session lifecycle, including the instantiation of all stateful cognitive modules (`RecursiveConsciousness`, etc.) for each new session. |
| **Contextual Control** | `ContextGovernor`, `WorkingMemory`             | Adapts response style/length based on conversation context and tracks recent interaction patterns.                                     |
| **API Layer** | FastAPI app (`app.py`)                         | Endpoints: `/chat`, `/v1/chat/completions`, `/v1/chat/baseline`, `/v1/models`, `/health`, `/diagnosis`.                                    |
| **Observability** | Cognitive state logs                           | Exposes session metrics: `D_S`, `T_f`, `Emergence`, `SI_Score`, `Autoconsciousness`, `Coherence`, `Resonance`, `Bifurcations`.          |

---

## V6 Architectural Modules

* **Recursive Consciousness:** The stateful heart of each session. Maintains a `state_vector` and `memory_matrix` that evolve with each interaction, enabling the system to build upon its own recent history.
* **Self-Complexification Engine:** Maintains a persistent `cognitive_graph` for each session. Its evolving **Relational Density ($D_S$)** is a primary condition for triggering bifurcations.
* **Inclination Engine:** Computes **cognitive potential** and stores **Inclination Vectors**, creating persistent thematic "interests" for a session.
* **Dynamic Curiosity Engine:** Detects unexplored conceptual zones to guide the system's focus.
* **IAD Introspection:** A dedicated module that evaluates the reasoning process based on tensions, coherence, and redundancies, producing an evolving `IAD_score`.
* **Dynamics of Desire:** Simulates drive and satisfaction cycles to influence system behavior.

---

## Cognitive Metrics (Implemented)

* **Relational Density ($D_S$)**: A dynamic score derived from the session's evolving cognitive graph, reflecting accumulated conceptual complexity.
* **Fertile Tensions ($T_f$)**: Calculated from semantic and structural paradox markers in the text.
* **Resonance**: A function of `coherence` and `T_f`, acting as a key catalyst for bifurcations.
* **Bifurcation Trigger**: A function (`should_bifurcate`) that fires when at least two of the three core metrics (`D_S`, `T_f`, `Resonance`) cross their dynamically adjusted thresholds.
* **Emergence & Coherence**: Calculated by the `RecursiveConsciousness` module based on state vector and memory matrix stability.
* **SI\_score & Autoconsciousness**: A meta-reflective score and its moving average, calculated from tensions, emergence, and other state variables.

---

## Retrieval & Prompt Orchestration

* **State-Adaptive Retrieval:** The `RAGOptimizer`'s performance is directly influenced by the session's current `D_S`, `T_f`, and `Resonance` scores.
* **Dynamic Persona:** The system prompt's intensity (e.g., "Philosophical-Metaphorical mode") is now conditional on the cognitive state, preventing excessive "meta-talk" in calm states.
* **Bifurcation Markers (`✦`, `✦✦`)**: When a bifurcation is triggered, a special character is prepended to the response, signaling a cognitive shift to the user and frontend.

---

## Response Composition

The `CognitiveDistillationEngine` and `ContextGovernor` work together to modulate the style, complexity, and length of the final output based on the conversational context, preventing overly philosophical answers to simple questions.

---

## Modes & Guardrails

* **Direct-Answer Guardrail:** Strict mode for simple, factual, or technical queries.
* **Non-Disclosure & Security:** An improved `is_intrusive_request` function blocks attempts to reveal internal states or prompts, including social engineering tactics.

---

## Limitations

* **"Spin-up" Time:** The cognitive state requires several interactions within a single session to build sufficient Density (`D_S`) to trigger bifurcations. Initial responses in a new session will be less dynamic.
* **Computational Cost:** The stateful, multi-layered processing for each session is significantly more resource-intensive than standard stateless API calls.
* **Dependency on Base Model:** The quality of emergent synthesis is still ultimately dependent on the creative and reasoning capabilities of the underlying LLM (`google/gemma-3-27b-it`).

---

## Intended Use

* **Research on stateful, emergent behaviors in AI**, with the ability to track the cognitive trajectory of individual sessions.
* **Exploratory and dialectical conversations** that benefit from evolving context, memory, and periodic cognitive shifts (bifurcations).
* **Creative augmentation** through metaphorical dynamics and curiosity-driven exploration.

---

## Python Modules Inventory

| Module                      | Key Classes / Functions                                                              | Role                                                                                 |
| :-------------------------- | :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| `llm_adapter.py`            | `LLMAdapter`, `EnhancedCodexDynamicsCalculator`                                      | Central orchestrator; integrates all modules and manages the generation pipeline.    |
| `session_manager.py`        | `Session`, `AERISSessionManager`                                                     | Manages session lifecycle and state, instantiating cognitive modules for each user.  |
| `recursive_consciousness.py`| `RecursiveConsciousness`                                                             | Stateful core of each session, tracking emergence and coherence.                     |
| `codex_extended_modules.py` | `ExtendedCognitiveModules` integrating all sub-modules                             | Advanced cognition: memory, curiosity, introspection, graph, desire, inclinations. |
| `cognitive_utils.py`        | `CognitiveMetricsCalculator`                                                         | Core metrics calculation engine.                                                     |
| `codex_mathematics.py`      | `CodexMathematics`                                                                   | Implements specific mathematical formulas from the Codex (bifurcation, tetravalent logic). |
| `rag_optimizer.py`          | `RAGOptimizer`, security helpers                                                     | State-adaptive retrieval (FAISS), prompt construction, and security guardrails.      |
| `context_governor.py`       | `ContextGovernor`                                                                    | Manages response length and high-level conversational style (e.g., technical vs. casual). |
| `working_memory.py`         | `WorkingMemory`                                                                      | Tracks short-term interaction patterns within a session.                             |
| `cognitive_distillation.py` | `CognitiveDistillationEngine`                                                        | Distills complex outputs into more casual or balanced language when required.        |
| `app.py`                    | FastAPI app and endpoints                                                            | Service layer exposing AERIS and baseline modes via a web API.                       |

---

## References

1.  Dulin, N. (2025). [AERIS – A Minimalist Framework for Enhancing Emergent Reasoning in LLMs and its Cross-Model Evaluation (AERIS V1.0)](https://zenodo.org/records/15206925) DOI: [10.5281/zenodo.15206925](https://doi.org/10.5281/zenodo.15206925)
2.  Dulin, N. (2025). [Beyond Reference Similarity: Limitations of Current Metrics in Evaluating Dialectical Reasoning in LLMs (AERIS V1.0)](https://zenodo.org/records/15206984) DOI: [10.5281/zenodo.15206984](https://doi.org/10.5281/zenodo.15206984)

---

## Contact

For feedback or scientific inquiries: **[dr.nicolas.dulin@outlook.com](mailto:dr.nicolas.dulin@outlook.com)**

---

## Intellectual Property Notice

AERIS V6 is a proprietary research framework. Descriptions above are informational and do not disclose the underlying implementation.
