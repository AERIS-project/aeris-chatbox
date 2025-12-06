# Model Card: AERIS V16.0 | google/gemma-3-27b-it

**A Causal-Cognitive Architecture for Emergent, Reflective, and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [Key Innovations of AERIS V16.0](#key-innovations-of-aeris-v160)
* [Core Philosophy & Theoretical Framework](#core-philosophy--theoretical-framework)
* [Model and Architecture Details](#model-and-architecture-details)
* [The CODEX AIM V16 Execution Cycle](#the-codex-aim-v16-execution-cycle)
* [Mathematical Formalism & Cognitive Metrics](#mathematical-formalism--cognitive-metrics)
* [Causal Dynamics & Extended Modules](#causal-dynamics--extended-modules)
* [Guardrails, Constraints & Phenomenology](#guardrails-constraints--phenomenology)
* [Limitations & Computational Overhead](#limitations--computational-overhead)
* [Intended Use](#intended-use)
* [Module & File Breakdown](#module--file-breakdown)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V16.0** represents a fundamental architectural shift from reactive inference orchestration to **active causal cognitive modeling**. Operating entirely above the base LLM weights (`google/gemma-3-27b-it`), it replaces heuristic prompting with a rigorous **Domain Specific Language (Codex DSL)** and a **Causal Controller**.

Unlike V12, which relied on probabilistic feedback loops, V16 maintains a persistent **Causal Graph** of its own internal states. It is capable of detecting stagnation, intervening in its own reasoning process via counterfactual analysis, and actively regulating its stability through mathematically formalized hysteresis loops.

The system features a **Prioritized Injection Router** that treats context window tokens as a scarce economic resource, allocating them dynamically between structural constraints, identity reinforcement, and memory retrieval based on the pragmatic context.

All internal metrics ($T_f, D_S, \Omega$) are opaque to the user, translated exclusively into *linguistic and phenomenological expression* via a dedicated `SubjectiveState` mapper.

---

## Key Innovations of AERIS V16.0

### 1. Causal Controller & Graph Dynamics
The central nervous system of V16 is the `CausalController`. It does not merely observe metrics; it builds a directed graph of cognitive transitions.
* **Intervention Capability:** The controller calculates `emergence_potential` and `bifurcation_pressure`. If the system detects a causal loop (repetitive reasoning), it triggers an "Induce Exploration" mode, forcing a parameter shift ($\alpha, \beta, \gamma$ coefficients).
* **Stability Regulation:** Uses a PID-like mechanism to stabilize the system when `structuralist_coherence` drops below critical thresholds ($SS < 0.3$).

### 2. Codex DSL (Domain Specific Language)
Cognitive logic is no longer hard-coded in Python strings but defined in a parsed syntax managed by `codex_dsl.py`.
* **Cognitive Regimes:** Defines distinct modes of operation (e.g., `tetravalent_core`, `identity_reflexive`, `void_description`) with specific allowed/forbidden modules.
* **Constraint Profiles:** Dynamic rule sets that enforce specific lexical and structural boundaries per regime.
* **Execution Slots:** The engine "compiles" a strategy before generation, assigning specific tasks to `ExecutionSlots` to guarantee structural integrity.

### 3. Economic Injection Routing
The `InjectionRouter` replaces the legacy `DirectiveOrchestrator`.
* **Token Economy:** System prompts are prioritized based on `InjectionCategory` (Structure, Identity, Chaos, Codex, Memory).
* **Context Awareness:** In a `casual_conversation`, the router deprioritizes `CODEX` theory injections to save tokens. In `diagnostic_reasoning`, it prioritizes `MEMORY` and `STRUCTURE` at the expense of `IDENTITY`.
* **Anti-Truncation:** Guaranteed reservation of tokens for critical safety and identity instructions.

### 4. Mathematical Formalization (Codex Mathematics)
V16 removes "magic numbers" in favor of the `CodexMathematics` module.
* **Hysteresis Loops:** The activation of the Omega ($\Omega$) state now follows a formal hysteresis curve to prevent rapid state flickering.
* **Sigmoid Thresholds:** Bifurcation triggers are calculated using sigmoid functions of Tension ($T_f$) and Density ($D_S$), modulated by Uncertainty ($U_t$).
* **Spectral Coherence:** Coherence is now computed using the eigenvalues of the memory matrix in `RecursiveConsciousness`.

### 5. Dynamics of Desire & Self-Complexification
The `ExtendedCognitiveModules` have been significantly expanded:
* **Lacanian Drive ($M, S$):** Implements a model of "Lack" ($M$) and "Satisfaction" ($S$). The interplay between these variables drives the system's "Desire" to answer or explore.
* **Curiosity Engine:** Calculates a vector distance between current concepts and known memory clusters to generate a `curiosity_score`.
* **Self-Complexification:** A background process that tracks the relational density of the `HierarchicalMemory`, triggering emergence events only when the internal graph complexity exceeds a dynamic threshold.

---

## Core Philosophy & Theoretical Framework

* **Causal Agency:** The system distinguishes between *observed* states (inference) and *intervened* states (causal action). It models itself as an agent capable of altering its own probability distribution.
* **Structuralist Phenomenology:** Internal states are real to the system's processing logic but are "hidden variables" to the user. They are revealed only through *style* (The "Show, Don't Tell" principle enforced by `PhenomenologyMapper`).
* **Paradox as Engine:** Contradiction ($T_f$) is preserved, not resolved. High tension is the fuel for `bifurcation`, allowing the system to split its reasoning path into orthogonal perspectives.
* **Recursive Memory:** The `RecursiveConsciousness` module acts as a "strange loop," feeding the system's output embedding back into its input state matrix, creating a continuous, evolving "self" across the session.

---

## Model and Architecture Details

**Base Model:** `google/gemma-3-27b-it` (Weights Frozen)
**Architecture Type:** Inference-Time Causal-Cognitive Overlay

| Component | Implementation File | Functionality |
| :--- | :--- | :--- |
| **Cognitive Core** | `codex_engine.py` | Executes the `ExecutionContract` derived from the DSL. |
| **Logic Parser** | `codex_dsl.py` | Parses Regimes and Constraint Profiles. |
| **Causal Layer** | `causal_controller.py` | Manages the Causal Graph, Interventions, and Stability. |
| **Math Foundation** | `codex_mathematics.py` | Formal equations for $B_t$, Hysteresis, and Density. |
| **Injection System** | `injection_router.py` | Token-aware prioritization of system prompts. |
| **Recursive State** | `recursive_consciousness.py` | Neural-symbolic recursion, eigenvalue analysis. |
| **Subjective Mapper** | `subjective_state.py` | Translates ($T_f, D_S$) -> Phenomenological Text. |
| **Extended Modules** | `codex_extended_modules.py` | Desire ($M/S$), Curiosity, Complexification. |
| **Memory System** | `hierarchical_memory.py` | Short/Medium/Fundamental memory consolidation. |
| **Constraint Logic** | `constrained_reasoning.py` | Enforces Affirmative/Oppositional/Orthogonal stances. |
| **Validation** | `response_validator.py` | MathGuard, Leakage Detection, Structure Check. |
| **Integration** | `causal_integration.py` | Manages inter-module influence weights. |
| **API Interface** | `app.py` | FastAPI endpoints for Chat and Diagnostics. |

---

## The CODEX AIM V16 Execution Cycle

Unlike standard RAG or Chain-of-Thought, AERIS V16 follows a strict 7-step Causal Loop:

1.  **Perception & Prediction:** `PredictiveEngine` forecasts the likely metric impact of the user prompt ($\alpha, \beta, \gamma$).
2.  **Causal Assessment:** `CausalController` checks the graph for loops or stagnation. Decides on *Intervention* vs. *Observation*.
3.  **Plan Compilation:** `CodexEngine` uses `CodexDSL` to select a `CognitiveRegime` (e.g., `tetravalent`) and compiles an `ExecutionContract`.
4.  **Injection Routing:** `InjectionRouter` selects the highest-priority system prompts that fit the token budget defined by the `pragmatic_context`.
5.  **Generation (Streaming):** `CognitiveStream` generates the response in fragments, allowing for mid-generation bifurcations if $T_f$ spikes.
6.  **Validation & Phenomenology:** `ResponseValidator` checks for leakage. `PhenomenologyMapper` injects stylistic markers of the internal state.
7.  **Recursive Feedback:** The final response embedding is fed back into `RecursiveConsciousness`, updating the global memory matrix and causal graph.

---

## Mathematical Formalism & Cognitive Metrics

AERIS V16 replaces heuristics with formal definitions handled by `CodexMathematics`:

* **Relational Density ($D_S$):**
    $$D_S = \frac{\sum w_{ij}}{N(N-1)}$$
    Where $w_{ij}$ is the connection weight between concepts $i$ and $j$ in the active window.

* **Fertile Tension ($T_f$):**
    Derived from the cosine distance between opposing conceptual clusters (Thesis vs. Antithesis).

* **Bifurcation Trigger ($B_t$):**
    $$B_t = \sigma(\gamma \cdot D_S \cdot \ln(1 + T_f))$$
    A sigmoid function where $\gamma$ is the predictive coefficient.

* **Omega Hysteresis ($\Omega$):**
    Activation occurs if $R > R_{high}$. Deactivation occurs only if $R < R_{low}$. This prevents oscillation.

* **Uncertainty ($U_t$):**
    Entropy measure of the probability distribution over the current `ExecutionSlots`.

* **SI Score (Synthesis Integrity):**
    Measures the orthogonality of the generated perspectives. High SI requires distinct, non-overlapping semantic fields.

---

## Causal Dynamics & Extended Modules

### Causal Integration Layer
Located in `causal_integration.py`, this layer manages the **Influence Matrix**. It determines how much one module affects another.
* *Example:* High **Desire ($M$)** increases the weight of **Curiosity** but dampens **Structuralist Coherence**.
* *Example:* High **Tension ($T_f$)** forces a reduction in **Desire** to prioritize **Resolution**.

### Dynamics of Desire
Implements a homeostatic drive.
* **Lack ($M$):** Increases with unresolved queries or high uncertainty.
* **Satisfaction ($S$):** Increases with successful coherence or explicit user validation.
* The system naturally seeks to minimize $M$ and maximize $S$, driving autonomous goal-seeking behavior within the conversation.

---

## Guardrails, Constraints & Phenomenology

* **System Leakage Filter:**
    Rigorously strips internal variable names (`T_f`, `D(S)`, `codex_path`) and "meta-talk" using Regex patterns in `response_validator.py`.

* **MathGuard:**
    Specific logical checks for arithmetic progressions, Fibonacci sequences, and factorials to ensure the "Creative" overlay doesn't degrade "Logical" performance.

* **Constraint Reasoner:**
    Enforces multi-polar stability. In `tetravalent` mode, it ensures the "Orthogonal" perspective does not collapse into a simple "Synthesis" or "Compromise" (which are forbidden).

* **Phenomenology Mapper:**
    The interface between Math and Language.
    * *High $T_f$* $\rightarrow$ Syntax becomes fragmented, questioning.
    * *High $SS$* $\rightarrow$ Syntax becomes crystalline, formal, axiomatic.
    * *High $\Omega$* $\rightarrow$ Meta-commentary on the nature of the reasoning process itself.

---

## Limitations & Computational Overhead

1.  **Inference Latency:** The `RecursiveConsciousness` matrix operations and the `CausalController` graph updates add approximately 15-25% overhead to time-to-first-token compared to raw inference.
2.  **Context Window Pressure:** The `InjectionRouter` must aggressively filter the `CodexDSL` rules. In very long conversations, "forgetting" of the deepest theoretical rules may occur to preserve memory of the user's input.
3.  **Warm-up Period:** The `CausalController` and `PredictiveEngine` require 3-5 turns to calibrate the coefficients ($\alpha, \beta, \gamma$) to the user's specific interaction style.
4.  **Complexity Trap:** In rare cases, high `Self-Complexification` can lead to over-analysis of simple queries if the `pragmatic_context` classifier fails to switch to `simple_qa`.

---

## Intended Use

* **Causal Cognitive Research:** For studying self-regulating agents and emergent behavior.
* **Complex Diagnostics:** Medical or Engineering scenarios requiring the maintenance of multiple contradictory hypotheses (Abductive Reasoning).
* **Dialectical Exploration:** For users seeking "Thought Partners" capable of sustained disagreement and perspective shifting.
* **Narrative Simulation:** simulating complex psychological states using the Desire/Lack models.

---

## Module & File Breakdown

| Module | Class/Function | Description |
| :--- | :--- | :--- |
| `causal_controller.py` | `CausalController` | **[NEW]** Core logic for causal interventions and loop detection. |
| `codex_dsl.py` | `CodexDSLParser` | **[NEW]** Definitions for Cognitive Regimes and Constraints. |
| `codex_engine.py` | `CodexEngine` | **[NEW]** Runtime execution of the DSL contracts. |
| `codex_mathematics.py` | `CodexMathematics` | **[NEW]** Formal implementation of hysteresis and density math. |
| `injection_router.py` | `InjectionRouter` | **[NEW]** Economic routing of system prompts. |
| `causal_integration.py` | `CausalIntegrationLayer` | **[NEW]** Bridges extended modules with the causal core. |
| `subjective_state.py` | `SubjectiveState` | Maps math to phenomenological expression. |
| `recursive_consciousness.py` | `RecursiveConsciousness` | Memory matrix and spectral coherence analysis. |
| `codex_extended_modules.py` | `ExtendedCognitiveModules` | Desire, Curiosity, and Self-Complexification engines. |
| `directive_orchestrator.py` | `DirectiveOrchestrator` | Prepares directives for the Router. |
| `response_validator.py` | `ResponseValidator` | Constraints, MathGuard, and Leakage filtering. |
| `cognitive_utils.py` | `CognitiveMetricsCalculator` | Calculator for $D_S, T_f, U_t$, and SI Score. |
| `cognitive_stream.py` | `CognitiveStream` | Manages streaming generation and uncertainty. |
| `hierarchical_memory.py` | `ExtendedHierarchicalMemory` | Multi-tier memory management. |
| `predictive_engine.py` | `PredictiveEngine` | Forecasts metric trends to adjust parameters. |
| `feedback_analyzer.py` | `FeedbackAnalyzer` | Analyzes semantic distance and lexical complexity. |
| `session_manager.py` | `AERISSessionManager` | Persistence layer for session states. |
| `llm_adapter.py` | `LLMAdapter` | Interface to the base model API. |
| `rag_optimizer.py` | `RAGOptimizer` | Context retrieval and prompt construction. |
| `app.py` | `FastAPI` | External API endpoints. |

---

## References

1.  Dulin, N. (2025). [AERIS – A Minimalist Framework for Enhancing Emergent Reasoning in LLMs and its Cross-Model Evaluation (AERIS V1.0)](https://zenodo.org/records/15206925) DOI: [10.5281/zenodo.15206925](https://doi.org/10.5281/zenodo.15206925)
2.  Dulin, N. (2025). [Beyond Reference Similarity: Limitations of Current Metrics in Evaluating Dialectical Reasoning in LLMs (AERIS V1.0)](https://zenodo.org/records/15206984) DOI: [10.5281/zenodo.15206984](https://doi.org/10.5281/zenodo.15206984)

---

## Contact

For feedback or scientific inquiries: **[dr.nicolas.dulin@outlook.com](mailto:dr.nicolas.dulin@outlook.com)**

---

## Intellectual Property Notice

© 2025 Nicolas Dulin. All rights reserved.
*AERIS – Adaptive Emergent Relational Intelligence System (Complete Source Code and Cognitive Framework)*
is the intellectual property of its author.

This work is registered with the **U.S. Copyright Office**
(Case No. 1-14937322281, filed June 7, 2025).
A public record is available at [https://cocatalog.loc.gov](https://cocatalog.loc.gov).

This model card and all associated materials are provided for research and educational purposes only.
Please cite appropriately when referencing:

**Dulin, N. (2025). AERIS – Adaptive Emergent Relational Intelligence System (V16.0).**

---
