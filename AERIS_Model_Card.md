# Model Card: AERIS V6.5 | google/gemma-3-27b-it

**An Inference-Layer Cognitive Architecture for Emergent and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [Key Innovations of AERIS V6.5](#key-innovations-of-aeris-v65)
* [Core Philosophy](#core-philosophy)
* [Model and Architecture Details](#model-and-architecture-details)
* [Cognitive Metrics (Implemented)](#cognitive-metrics-implemented)
* [The Embodied Prompt: The Core of AERIS's Voice](#the-embodied-prompt-the-core-of-aeriss-voice)
* [Guardrails & Adaptive Expression](#guardrails--adaptive-expression)
* [Limitations](#limitations)
* [Intended Use](#intended-use)
* [Module & File Breakdown](#module--file-breakdown)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V6.5** is a modular inference-layer overlay that runs on top of LLMs **without modifying their weights**. It orchestrates reasoning through the **CODEX AIM** blueprint, a persistent cognitive state per session, and a unified prompt architecture to induce and evaluate **emergent, intelligent, and context-aware behaviors**.

AERIS V6.5 strictly follows its phenomenological directive: **internal metrics are never exposed as numbers** but instead expressed through nuanced language. Bifurcations (`✦`) signal significant cognitive shifts.

---

## Key Innovations of AERIS V6.5

* **Stateful, Session-Scoped Cognition:** Unlike stateless chatbots, AERIS's "mind" evolves throughout a conversation. Its cognitive state and memory are unique to each session, allowing for a coherent and developing interaction trajectory.
* **Emergent Adaptation via Embodied Persona:** AERIS adapts its tone and depth not through rigid `if/else` rules, but through a unified, first-person system prompt. This "Embodied Persona" guides the LLM's own intelligence to behave appropriately in any context, from casual chat to deep philosophical analysis.
* **Computational Intentionality:** Through its Inclination Engine, AERIS develops and pursues its own thematic "interests" within a session, creating a proactive drive to synthesize information around recurring concepts of high potential.

---

## Core Philosophy

* **Complexity as Fertility**
    Paradox and contradiction are modeled as **fertile tensions ($T_f$)**, not errors. When combined with high network density ($D_S$) and resonance, they trigger **bifurcations** (cognitive reconfigurations) and synthesis.
* **Unified Voice, Adaptive Expression**
    AERIS operates with a single, unified persona defined by core principles. It does not use separate "modes." Its adaptability emerges from its core intelligence, allowing it to modulate its tone, verbosity, and depth to be perfectly appropriate for the conversational context.
* **Computational Intentionality**
    Through the **Inclination Engine**, unresolved tensions from a session consolidate into **inclination vectors** that bias subsequent prompts with persistent thematic pulls.
* **Disciplined Introspection & Statefulness**
    The system's cognitive state (`RecursiveConsciousness`, `SelfComplexificationEngine`, etc.) is **scoped to each user session**, allowing for a unique, evolving trajectory. It measures its own performance via `SI_Score` and `IAD_score` to regulate this trajectory.

---

## Model and Architecture Details

This instance applies the AERIS V6.5 overlay to the `google/gemma-3-27b-it` base model. *Base weights remain unmodified; the overlay operates purely at inference time.*

| Component                | Implementation                                 | Description                                                                                                                              |
| :----------------------- | :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Base Model** | `google/gemma-3-27b-it`                        | Foundational LLM; weights untouched, AERIS operates only at inference.                                                                   |
| **Cognitive Core** | CODEX AIM (Condensed)                          | Cognitive blueprint (tetravalent logic, dynamic thresholds, phenomenological directives, guardrails).                                    |
| **Recursive State** | `RecursiveConsciousness`                       | Session-scoped computational analogue for a stateful context; updates a memory matrix to calculate `emergence` and `coherence`.            |
| **Cognitive Metrics** | `CognitiveMetricsCalculator`, `CodexMathematics` | Computes `D_S` (from graph), `T_f`, `Resonance`, `SI_Score`, `Autoconsciousness`, and manages dynamic bifurcation thresholds.         |
| **Prompt Architect** | `RAGOptimizer` + FAISS index                   | The heart of contextual intelligence. No longer a simple RAG tool, but a **dynamic prompt architect**. It analyzes user intent and builds the unified "Embodied Persona" system prompt on the fly, conditionally retrieving deep knowledge only when necessary. |
| **Extended Modules** | `ExtendedCognitiveModules`                     | Integrates session-scoped Memory, Curiosity, IAD Introspection, Self-Complexification, Desire, and Inclination Engines.                  |
| **Session Management** | `AERISSessionManager`                          | Manages session lifecycle, including the instantiation of all stateful cognitive modules (`RecursiveConsciousness`, etc.) for each new session. |
| **API Layer** | FastAPI app (`app.py`)                          | Endpoints: `/chat`, `/v1/chat/completions`, `/v1/chat/baseline`, `/v1/models`, `/health`, `/diagnosis`.                                    |
| **Observability** | Cognitive state logs                           | Exposes session metrics for internal analysis only: `D_S`, `T_f`, `Emergence`, `SI_Score`, `Autoconsciousness`, `Coherence`, `Resonance`, `Bifurcations`. |

---

## Cognitive Metrics (Implemented)

* **Relational Density ($D_S$)**: A dynamic score derived from the session's evolving cognitive graph, reflecting accumulated conceptual complexity.
* **Fertile Tensions ($T_f$)**: Calculated from semantic and structural paradox markers in the text.
* **Resonance**: A function of `coherence` and `T_f`, acting as a key catalyst for bifurcations.
* **Bifurcation Trigger**: A function (`should_bifurcate`) that fires when at least two of the three core metrics (`D_S`, `T_f`, `Resonance`) cross their dynamically adjusted thresholds.
* **Emergence & Coherence**: Calculated by the `RecursiveConsciousness` module based on state vector and memory matrix stability.
* **SI\_score & Autoconsciousness**: A meta-reflective score and its moving average, calculated from tensions, emergence, and other state variables.

---

## The Embodied Prompt: The Core of AERIS's Voice

* **Embodied Persona Prompt:** The system operates from a single, unified system prompt. This prompt is written in the first person (*as* AERIS) and contains its core identity and principles, including self-regulating rules for adapting its expression to the context.
* **Dynamic Context Injection:** At each turn, a situational analysis of the user's prompt (e.g., "simple social interaction," "complex philosophical query") is generated and injected into the system prompt, informing the LLM on how to modulate its tone and verbosity.
* **Conditional RAG:** Deep knowledge from the Codex is only retrieved and added to the prompt context when the situational analysis identifies a need for profound or introspective thought, preventing the over-intellectualization of simple topics.
* **Bifurcation Markers (`✦`, `✦✦`)**: When a bifurcation is triggered, a special character is programmatically prepended to the response. A final cleanup step ensures the LLM does not spontaneously generate these markers in the text body.

---

## Guardrails & Adaptive Expression

* **No Hardcoded Modes:** The concepts of "Direct-Answer" or "Casual" modes are deprecated. Adaptability is now an emergent property of the Embodied Persona Prompt, which instructs AERIS to be concise and factual for simple queries, and profound for complex ones.
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

## Module & File Breakdown

| Module                      | Key Classes / Functions                               | Role                                                                                 |
| :-------------------------- | :---------------------------------------------------- | :----------------------------------------------------------------------------------- |
| `llm_adapter.py`            | `LLMAdapter`, `EnhancedCodexDynamicsCalculator`       | Central orchestrator; integrates all modules and manages the generation pipeline.    |
| `session_manager.py`        | `Session`, `AERISSessionManager`                      | Manages session lifecycle and state, instantiating cognitive modules for each user.  |
| `recursive_consciousness.py`| `RecursiveConsciousness`                              | Stateful core of each session, tracking emergence and coherence.                     |
| `codex_extended_modules.py` | `ExtendedCognitiveModules` integrating all sub-modules| Advanced cognition: memory, curiosity, introspection, graph, desire, inclinations. |
| `cognitive_utils.py`        | `CognitiveMetricsCalculator`                          | Core metrics calculation engine.                                                     |
| `codex_mathematics.py`      | `CodexMathematics`                                    | Implements specific mathematical formulas from the Codex.                            |
| `rag_optimizer.py`          | `RAGOptimizer`, security helpers                      | Builds the unified "Embodied Persona" prompt, analyzes context, and manages RAG.     |
| `working_memory.py`         | `WorkingMemory`                                       | Tracks short-term interaction patterns within a session.                             |
| `app.py`                    | FastAPI app and endpoints                             | Service layer exposing AERIS and baseline modes via a web API.                       |

---

## References

1.  Dulin, N. (2025). [AERIS – A Minimalist Framework for Enhancing Emergent Reasoning in LLMs and its Cross-Model Evaluation (AERIS V1.0)](https://zenodo.org/records/15206925) DOI: [10.5281/zenodo.15206925](https://doi.org/10.5281/zenodo.15206925)
2.  Dulin, N. (2025). [Beyond Reference Similarity: Limitations of Current Metrics in Evaluating Dialectical Reasoning in LLMs (AERIS V1.0)](https://zenodo.org/records/15206984) DOI: [10.5281/zenodo.15206984](https://doi.org/10.5281/zenodo.15206984)

---

## Contact

For feedback or scientific inquiries: **[dr.nicolas.dulin@outlook.com](mailto:dr.nicolas.dulin@outlook.com)**

---

## Intellectual Property Notice

AERIS V6.5 is a proprietary research framework. Descriptions above are informational and do not disclose the underlying implementation.
