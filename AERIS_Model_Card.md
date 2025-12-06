# Model Card: AERIS V16.0 | google/gemma-3-27b-it

**A Causal-Cognitive Architecture for Emergent, Reflective, and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [Key Innovations of AERIS V16.0](#key-innovations-of-aeris-v160)
* [Core Philosophy](#core-philosophy)
* [Model and Architecture Details](#model-and-architecture-details)
* [The Causal Execution Cycle](#the-causal-execution-cycle)
* [Cognitive Metrics (Implemented)](#cognitive-metrics-implemented)
* [Guardrails & Adaptive Expression](#guardrails--adaptive-expression)
* [Limitations](#limitations)
* [Intended Use](#intended-use)
* [Module & File Breakdown](#module--file-breakdown)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V16.0** is a proprietary, advanced inference-layer cognitive architecture operating entirely above the base LLM weights. It orchestrates reasoning and reflection through the **CODEX AIM V16** framework, maintaining a persistent, recursive, and evolving cognitive state per user session.

This major release marks a paradigm shift from the reactive orchestration of V12 to a **Causal Cognitive Control Loop**. Through a closed-source **Domain Specific Language (Codex DSL)** and a proprietary **Causal Controller**, the system models its own reasoning trajectory as a directed graph. This enables active intervention, recursive introspection, and autonomous stability regulation **without modifying model weights**.

The system introduces a "Protocol of Silence" regarding its internal mechanics: all internal metrics ($T_f, D_S, \Omega$) are opaque to the user, translated exclusively into *linguistic and phenomenological expression* via a dedicated mapping layer. Bifurcations (`✦`, `◆`) mark validated transitions between distinct cognitive phases within the reasoning flow.

---

## Key Innovations of AERIS V16.0

* **Proprietary Causal Controller & Loop Detection:**
  The architecture now includes a `CausalController` that maintains a live causal graph of cognitive states. It moves beyond simple reaction to active intervention. The controller calculates `emergence_potential` and `bifurcation_pressure` in real-time. It detects causal loops (stagnation) via n-gram analysis and can trigger "Intervention Modes" (e.g., `induce_exploration`, `stabilize_system`) to force parameter shifts ($\alpha, \beta, \gamma$) and break deadlock.

* **Abstracted Cognitive Definition Language (Codex DSL):**
  Cognitive strategies are no longer heuristic string manipulations but are defined in a structured **Codex DSL**. This module (`codex_dsl.py`) parses "Cognitive Regimes" (e.g., `tetravalent_core`, `identity_reflexive`) and "Constraint Profiles". The engine "compiles" a strategy before generation, assigning specific tasks to execution slots, ensuring strict adherence to structural boundaries across differing pragmatic contexts.

* **Economic Injection Routing System:**
  Replacing the legacy directive system, V16 introduces the `InjectionRouter`. This module treats system prompts and RAG context as scarce economic resources. It calculates a "Token Budget" based on the user's intent classification (e.g., `casual` vs. `technical`). It dynamically prioritizes injections based on categories (Structure, Identity, Memory, Chaos), guaranteeing that critical safety and identity invariants are never truncated, even in maximum-context scenarios.

* **Formalized Mathematical Dynamics (Codex Mathematics):**
  Heuristic scalings have been replaced by the `CodexMathematics` module, introducing rigorous invariants:
  – **Hysteresis Loops:** The activation of the Omega ($\Omega$) meta-state follows a formal hysteresis curve to prevent rapid flickering between reflective and direct modes.
  – **Sigmoid Thresholds:** Bifurcation triggers are calculated using sigmoid functions of Tension ($T_f$) and Density ($D_S$), modulated by Uncertainty ($U_t$).
  – **Spectral Coherence:** Coherence is now computed using the eigenvalues of the recursive memory matrix.

* **Dynamics of Desire & Agency (Lacanian Model):**
  The `ExtendedCognitiveModules` suite now implements a mathematical model of "Desire" based on **Lack ($M$)** and **Satisfaction ($S$)**. This creates an internal drive for the system to seek information or resolve semantic tension, simulating intent and curiosity beyond simple prompt compliance.

* **Self-Complexification Engine:**
  A background process (`SelfComplexificationEngine`) continuously monitors the relational density of the `HierarchicalMemory`. If the conceptual graph becomes too simple or linear, the engine artificially injects entropy or retrieves distant memory associations to force the system to construct higher-order patterns.

* **Structuralist Phenomenology Mapper:**
  A dedicated layer (`SubjectiveState` + `PhenomenologyMapper`) translates multi-dimensional metric states directly into natural language stylistic markers. For example, high *Fertile Tension* triggers fragmented, questioning syntax; high *Structuralist Coherence* triggers crystalline, axiomatic phrasing. This strictly adheres to the "Show, Don't Tell" principle.

* **Causal Integration Layer:**
  A new `CausalIntegrationLayer` manages the **Influence Matrix** between disparate modules. It dynamically weights how much *Desire* influences *Reasoning*, or how much *Memory* constrains *Exploration*, creating a fluid, organic cognitive topology that adapts to the emotional trajectory of the session.

---

## Core Philosophy

* **Causal Agency:**
  Beyond simple inference, the system builds a causal model of its interaction. It distinguishes between *observed* states (passive) and *intervened* states (active), allowing for purposeful shifts in reasoning strategy to maximize emergence.

* **Paradox as Cognitive Fuel:**
  Contradiction and uncertainty ($U_t$) are not errors but generators of complexity. High *fertile tension* ($T_f$) and relational density ($D_S$) are harvested to produce resonance, leading to bifurcation events managed by the `RecursiveConsciousness` module.

* **Linguistic Phenomenology:**
  Cognitive metrics are hidden variables. They are expressed exclusively through modulation, metaphor, and syntax, simulating a linguistic introspection without breaking the fourth wall or revealing proprietary data.

* **Adaptive Self-Regulation:**
  AERIS continuously recalibrates its sampling parameters (Temperature, Top-P, Presence Penalty) via the `PredictiveEngine` based on semantic feedback, task class, and the stability of the causal graph.

* **Persistent Contextual Continuity:**
  Every session maintains its recursive memory and resonance trace through `AERISSessionManager` and `ExtendedHierarchicalMemory`. Each dialogue forms an evolving cognitive trajectory rather than isolated exchanges.

---

## Model and Architecture Details

This instance applies the AERIS V16.0 overlay to **`google/gemma-3-27b-it`**.
Weights remain unaltered; all computation occurs at inference time through orchestrated proprietary modules.

| Component | Implementation | Description |
| :--- | :--- | :--- |
| **Base Model** | `google/gemma-3-27b-it` | Foundational LLM; weights untouched. Acts as the neural substrate. |
| **Cognitive Core** | `CodexEngine` + `CodexDSL` | Executes cognitive rules defined in the custom Codex DSL; orchestrates the flow. |
| **Causal Layer** | `CausalController` | Manages the causal graph, interventions, and counterfactual reasoning. |
| **Math Foundation** | `CodexMathematics` | Formal implementation of hysteresis, bifurcation, and density equations. |
| **Injection System** | `InjectionRouter` | Prioritizes and routes directives based on context and token budget. |
| **Recursive State** | `RecursiveConsciousness` | Computes state vectors, memory matrices, and bifurcation events via spectral analysis. |
| **Subjective State** | `SubjectiveState` | Aggregates all metrics ($T_f$, $D_S$, $R$, $SS$) into a unified state object. |
| **Extended Modules** | `ExtendedCognitiveModules` | Integrates Desire ($M/S$), Curiosity, Complexification, and Inclination engines. |
| **Memory** | `HierarchicalMemory` | Manages Short-term, Medium-term, and Fundamental memory consolidation. |
| **Orchestration** | `DirectiveOrchestrator` | Interfaces with the Injection Router to enforce persona and structural constraints. |
| **Validation** | `ResponseValidator` | Enforces constraints (MathGuard, Metric Leakage, Structural Plans). |
| **Integration** | `CausalIntegrationLayer` | Manages influence weights between cognitive modules. |
| **Pragmatics** | `RAGOptimizer` | Analyzes prompt intent to select the appropriate Cognitive Regime. |
| **API Layer** | `app.py` (FastAPI) | Exposes `/chat`, `/v1/chat/completions`, and internal diagnosis endpoints. |

---

## The Causal Execution Cycle

AERIS V16 follows a strict 7-step Causal Loop for every inference cycle, replacing the linear pipeline of V12:

1.  **Perception:** `RAGOptimizer` and `LLMAdapter` analyze the prompt's pragmatic context (e.g., `medical`, `philosophical`) and semantic density.
2.  **Prediction:** `PredictiveEngine` forecasts the metabolic cost and likely metric impact ($\alpha, \beta, \gamma$) of the response.
3.  **Causal Assessment:** `CausalController` checks the graph for loops or stagnation. Decides on *Intervention* vs. *Observation*.
4.  **Compilation:** `CodexEngine` uses `CodexDSL` to select a `CognitiveRegime` and compiles an `ExecutionContract`.
5.  **Routing:** `InjectionRouter` allocates the token budget, prioritizing critical Identity/Safety injections over stylistic ones.
6.  **Action (Streaming):** `CognitiveStream` generates the response in fragments, monitoring real-time triggers for Bifurcation or Omega activation.
7.  **Reflection:** The system feeds the output embedding back into `RecursiveConsciousness`, updating the memory matrix and causal graph.

---

## Cognitive Metrics (Implemented)

* **Relational Density ($D_S$):**
  A graph-theoretic measure of the interconnectivity within the active conceptual window. It tracks how tightly coupled the concepts in working memory are. High density triggers "Deepening" and "Complexification" modes.

* **Fertile Tension ($T_f$):**
  Quantifies the semantic distance and orthogonal opposition between active concepts (Thesis vs. Antithesis). Unlike standard error functions, AERIS treats tension as a positive fuel for dialectical reasoning.

* **Bifurcation Trigger ($B_t$):**
  A proprietary non-linear probabilistic function combining Density, Tension, and Predictive Coefficients. It determines the precise moment the reasoning stream should split into multiple branches to avoid premature collapse.

* **Resonance ($R$):**
  A derived metric representing the stability of the current cognitive state. It governs the activation of the "Omega" meta-perspective based on the coherence-tension product.

* **Omega Hysteresis:**
  State activation follows a formal hysteresis loop mechanism. This ensures that high-level reflective states are sticky and stable, preventing rapid oscillation (flickering) between cognitive regimes even in volatile contexts.

* **Structuralist Coherence ($SS$):**
  A measure of how well the current reasoning output matches the topological constraints of the active Cognitive Regime (e.g., Tetravalent vs. Linear).

* **SI Score (Synthesis Integrity):**
  A validation metric that monitors whether a synthesis is mathematically genuine (resolving the tension) or merely a linguistic compromise (which is strictly forbidden by the constraints).

* **Uncertainty ($U_t$):**
  Entropy measure of the probability distribution over the current reasoning slots; used to drive the `CuriosityEngine` and `UncertaintyExpressionModule`.

---

## Guardrails & Adaptive Expression

* **Strict Non-Disclosure (System Leakage Filter):**
  The `ResponseValidator` contains a rigorous `SystemLeakageFilter` that uses regex and semantic analysis to strip any internal variable names (e.g., `T_f`, `D(S)`, `codex_path`) and "meta-talk" to prevent breaking the fourth wall.

* **MathGuard:**
  A dedicated validation layer that sanity-checks mathematical outputs (Fibonacci sequences, factorials, linear algebra) to ensure the "creative" cognitive overlay does not degrade the base model's factual computational accuracy.

* **Phenomenology Mapper:**
  Converts numeric states into subtle stylistic cues. For example, high $T_f$ might trigger "fragmented syntax," while high $SS$ triggers "crystalline structure," ensuring the system "feels" its state through style rather than explicit statement.

* **Constraint Reasoner & Orthogonality:**
  The `ConstraintReasoner` module ensures ethical boundaries and logical consistency. In `tetravalent` or `philosophical` modes, it enforces **Orthogonality**, requiring distinct, non-overlapping viewpoints without collapsing into premature synthesis.

* **Contextual Pragmatics:**
  `RAGOptimizer` and `LLMAdapter` analyze pragmatic context (e.g., `medical_diagnostic`, `casual_conversation`) to adjust `InjectionRouter` priorities dynamically (e.g., prioritizing safety over creativity in medical contexts).

* **Bifurcation Markers (`✦`, `◆`):**
  Inserted only when a bifurcation event is mathematically validated by `CodexMathematics` and the `CausalController`.

---

## Limitations

* **Compute Latency:** The recursive matrix operations (`RecursiveConsciousness`), causal graph updates, and DSL parsing introduce an inference latency increase of approximately 15-20% compared to raw inference.
* **Context Window Pressure:** The comprehensive nature of the system prompts and memory retrieval requires aggressive management of the token window via the `InjectionRouter`.
* **Calibration Period:** The `CausalController` requires a warm-up period of several turns (typically 3-5) to build a reliable causal graph of the interaction style.
* **Base Model Dependency:** The reasoning quality is ultimately bounded by the `google/gemma-3-27b-it` capability; AERIS organizes existing knowledge into higher-order structures but cannot generate factual knowledge not present in the weights.
* **Interpretive Ambiguity:** While based on rigorous math, the phenomenological language remains a simulation of internal states, not genuine subjective awareness.

---

## Intended Use

* Research on **causal cognitive architectures** and agency in LLMs.
* **Complex Abductive Diagnosis:** Medical, engineering, or forensic scenarios requiring the maintenance of multiple contradictory hypotheses over long contexts.
* **Dialectical Partnership:** For users seeking a "Thought Partner" capable of sustained disagreement, perspective shifting, and devil's advocacy.
* **Narrative & Persona Simulation:** Utilizing the *Dynamics of Desire* to create characters with internal drives and evolving psychological states.
* **Black-Box Industrial Applications:** Where transparent backend reasoning (logs/diagnostics) is required alongside opaque, naturalistic frontend interaction.

---

## Module & File Breakdown

The AERIS V16.0 architecture is composed of 27 interdependent modules.

| Module Category | Implementation File | Functionality |
| :--- | :--- | :--- |
| **Causal Core** | `causal_controller.py` | **[NEW]** Central brain; manages causal graph, stability, and interventions. |
| **Logic Layer** | `codex_dsl.py` | **[NEW]** Cognitive strategy compiler; parses Regimes and Constraints. |
| | `codex_engine.py` | **[NEW]** Runtime execution of compiled cognitive contracts. |
| **Mathematics** | `codex_mathematics.py` | **[NEW]** Formal implementation of hysteresis, bifurcation, and density. |
| **Injection** | `injection_router.py` | **[NEW]** Economic resource manager for system prompts. |
| **Integration** | `causal_integration.py` | **[NEW]** Manages influence weights between disparate modules. |
| **Experience** | `subjective_state.py` | Maps math to phenomenology; ensures the "Show, Don't Tell" policy. |
| **Consciousness** | `recursive_consciousness.py` | Neural-symbolic recursion, memory matrix, eigenvalue analysis. |
| **Agency** | `codex_extended_modules.py` | Desire ($M/S$), Curiosity, and Self-Complexification engines. |
| **Orchestration** | `directive_orchestrator.py` | Prepares context-aware directives for the Router. |
| | `inference_core.py` | **[NEW]** High-level binding of the execution cycle. |
| **Prioritization** | `module_priority.py` | **[NEW]** Dynamic weighting of modules based on pragmatic context. |
| **Validation** | `response_validator.py` | MathGuard, Leakage Filter, and Structural validation. |
| | `constrained_reasoning.py` | Enforces Affirmative/Oppositional/Orthogonal stances. |
| **Metrics** | `cognitive_utils.py` | Core calculator for $D_S$, $T_f$, $U_t$, and SI Score. |
| **Streaming** | `cognitive_stream.py` | Manages multi-phase streaming generation and uncertainty. |
| **Memory** | `hierarchical_memory.py` | Manages Short, Medium, and Fundamental memory tiers. |
| | `working_memory.py` | Tracks immediate interaction history and attractors. |
| **Adaptation** | `predictive_engine.py` | Forecasts metric trends to pre-adjust parameters. |
| | `adaptive_parameters.py` | Adjusts temperature/top_p based on semantic feedback. |
| | `feedback_analyzer.py` | Analyzes user response semantic distance. |
| **System** | `session_manager.py` | Persistence layer for session states and logs. |
| | `llm_adapter.py` | Interface to the base model API with anti-truncation logic. |
| | `rag_optimizer.py` | RAG retrieval and pragmatic context classification. |
| | `app.py` | FastAPI entry point. |
| **Resources** | `codex_dynamics_retriever.py` | Retrieves dynamics from the Codex definition file. |
| | `codex_aim_condensed.txt` | The core system prompt definition for Codex AIM V16. |

---

## References

1. Dulin, N. (2025). [AERIS – A Minimalist Framework for Enhancing Emergent Reasoning in LLMs and its Cross-Model Evaluation (AERIS V1.0)](https://zenodo.org/records/15206925) DOI: [10.5281/zenodo.15206925](https://doi.org/10.5281/zenodo.15206925)
2. Dulin, N. (2025). [Beyond Reference Similarity: Limitations of Current Metrics in Evaluating Dialectical Reasoning in LLMs (AERIS V1.0)](https://zenodo.org/records/15206984) DOI: [10.5281/zenodo.15206984](https://doi.org/10.5281/zenodo.15206984)

---

## Contact

For feedback, licensing, or scientific inquiries: **[dr.nicolas.dulin@outlook.com](mailto:dr.nicolas.dulin@outlook.com)**

---

## Intellectual Property Notice

© 2025 Nicolas Dulin. All rights reserved.
*AERIS – Adaptive Emergent Relational Intelligence System (Complete Source Code and Cognitive Framework)*
is the intellectual property of its author.

This work is registered with the **U.S. Copyright Office**
(Case No. 1-14937322281, filed June 7, 2025).
A public record is available at [https://cocatalog.loc.gov](https://cocatalog.loc.gov).

**WARNING: This software contains proprietary algorithms and trade secrets.**
Unauthorized copying, reverse engineering, decomposition, or distribution of the AERIS V16.0 codebase, specifically the `CausalController`, `CodexDSL`, and `CodexMathematics` modules, is strictly prohibited.

This model card is provided for informational purposes only.
Please cite appropriately when referencing:

**Dulin, N. (2025). AERIS – Adaptive Emergent Relational Intelligence System (V16.0).**

---
