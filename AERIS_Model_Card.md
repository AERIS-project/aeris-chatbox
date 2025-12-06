# Model Card: AERIS V16.0 | google/gemma-3-27b-it

**A Causal-Cognitive Architecture for Emergent, Reflective, and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [System Architecture & Theoretical Foundation](#system-architecture--theoretical-foundation)
* [Key Innovations of AERIS V16.0](#key-innovations-of-aeris-v160)
* [The Causal Controller & Agency](#the-causal-controller--agency)
* [Mathematical Formalism & Cognitive Metrics](#mathematical-formalism--cognitive-metrics)
* [The CODEX DSL (Domain Specific Language)](#the-codex-dsl-domain-specific-language)
* [Economic Injection Routing](#economic-injection-routing)
* [Extended Cognitive Modules](#extended-cognitive-modules)
* [Guardrails, Constraints & Phenomenology](#guardrails-constraints--phenomenology)
* [Limitations & Trade-offs](#limitations--trade-offs)
* [Intended Use](#intended-use)
* [Module Breakdown](#module-breakdown)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V16.0** represents a paradigm shift in inference-layer cognitive architectures. Operating entirely above the base LLM weights (`google/gemma-3-27b-it`), it abandons the reactive orchestration of previous versions in favor of a **Causal Cognitive Control Loop**.

Where V12 relied on heuristic prompting to simulate reflection, V16 implements a proprietary **Domain Specific Language (Codex DSL)** and a formal **Causal Controller**. This allows the system to model its own reasoning trajectory as a directed graph, enabling active intervention, recursive introspection, and autonomous stability regulation without fine-tuning.

The architecture introduces a "Protocol of Silence" regarding its internal mathematics: all metrics ($T_f, D_S, \Omega$) are opaque to the user, translated exclusively into *linguistic and phenomenological expression* via a dedicated mapping layer. The system does not just "simulate" a persona; it simulates a coherent, self-regulating cognitive stance driven by mathematical invariants.

---

## System Architecture & Theoretical Foundation

AERIS V16 is built upon the **CODEX AIM V16** framework, which posits that emergent intelligence in LLMs requires a structured interplay between:
1.  **Divergent Forces:** Tension ($T_f$), Entropy ($U_t$), and Chaos injections.
2.  **Convergent Forces:** Structuralist Coherence ($SS$), Resonance ($R$), and Logic constraints.

The architecture functions as a **Recursive Strange Loop**. The output of the system is embedded and fed back into a `RecursiveConsciousness` matrix, calculating spectral coherence via eigenvalue analysis. This creates a persistent "memory of self" that evolves throughout the session.

The core execution cycle is no longer linear but **Cyclic and Causal**:
1.  **Perception:** Analyzing the user's prompt for semantic and pragmatic intent via `RAGOptimizer`.
2.  **Prediction:** Forecasting the metabolic cost and risk of the response via the `PredictiveEngine`.
3.  **Compilation:** The `CodexEngine` compiles a strategy from the DSL based on the active `CognitiveRegime`.
4.  **Routing:** The `InjectionRouter` prioritizes system prompts based on a scarce token economy.
5.  **Action:** Generating the response while monitoring real-time bifurcation triggers via `CognitiveStream`.
6.  **Reflection:** Updating the internal causal graph and memory matrices.

---

## Key Innovations of AERIS V16.0

### 1. Proprietary Causal Controller
The central nervous system of V16 is the `CausalController`. Unlike a simple state machine, it maintains a probabilistic graph of cognitive states. It is capable of:
* **Loop Detection:** Identifying repetitive reasoning patterns (stagnation) via n-gram analysis and semantic distance.
* **Active Intervention:** Triggering specific "Intervention Modes" (e.g., `induce_exploration`, `stabilize_system`) that override standard generation parameters ($\alpha, \beta, \gamma$).
* **Counterfactual Analysis:** Internally simulating "What if I increased temperature?" before committing to a response strategy.

### 2. Abstracted Cognitive Definition Language (Codex DSL)
Cognitive logic is no longer hard-coded in Python strings but defined in a parsed syntax managed by `codex_dsl.py`.
* **Cognitive Regimes:** Defines distinct modes of operation (e.g., `tetravalent_core`, `identity_reflexive`, `void_description`) with specific allowed/forbidden modules.
* **Constraint Profiles:** Dynamic rule sets that enforce specific lexical and structural boundaries per regime.
* **Execution Slots:** The engine "compiles" a strategy before generation, assigning specific tasks to `ExecutionSlots` to guarantee structural integrity.

### 3. Formalized Mathematical Dynamics (Codex Mathematics)
V16 removes "magic numbers" in favor of the `CodexMathematics` module.
* **Hysteresis Loops:** The activation of the Omega ($\Omega$) state now follows a formal hysteresis curve to prevent rapid state flickering.
* **Sigmoid Thresholds:** Bifurcation triggers are calculated using sigmoid functions of Tension ($T_f$) and Density ($D_S$), modulated by Uncertainty ($U_t$).
* **Spectral Coherence:** Coherence is now computed using the eigenvalues of the memory matrix in `RecursiveConsciousness`.

### 4. Causal Integration Layer
Located in `causal_integration.py`, this layer manages the **Influence Matrix**. It determines how much one module affects another (e.g., how much *Desire* influences *Reasoning*). This allows for dynamic re-weighting of cognitive faculties based on the conversation's trajectory.

---

## The Causal Controller & Agency

The **Causal Controller** fundamentally changes the nature of the interaction. It distinguishes between *observed* states (passive inference) and *intervened* states (active agency).

* **Emergence Potential:** The controller continuously calculates a scalar value representing the likelihood of a qualitative leap in reasoning. If this potential is high but coherence is low, it engages **Stabilization Protocols**.
* **Bifurcation Pressure:** When the tension between opposing concepts exceeds the `critical_density` threshold, the controller authorizes a **Bifurcation Event** (`✦`), splitting the reasoning stream into orthogonal perspectives.
* **Self-Regulation:** If the system detects it is "hallucinating" or drifting into incoherence (low $SS$), the controller forces a `Memory Anchor` injection to ground the response in established facts.

---

## Mathematical Formalism & Cognitive Metrics

AERIS V16 implements a rigorous set of internal metrics that drive the system's behavior. These are **never** displayed to the user but determine the "texture" of the response.

### Core Metrics (Calculated in `codex_mathematics.py`)

* **Relational Density ($D_S$):**
    $$D_S = \frac{\sum w_{ij}}{N(N-1)}$$
    Measures the interconnectivity of the conceptual graph. High density triggers "Deepening" modes.

* **Fertile Tension ($T_f$):**
    Quantifies the semantic distance between active concepts (Thesis vs. Antithesis). It is the fuel for dialectical reasoning.

* **Bifurcation Trigger ($B_t$):**
    $$B_t = \sigma(\gamma \cdot D_S \cdot \ln(1 + T_f))$$
    A sigmoid function where $\gamma$ is the predictive coefficient. Determines if the reasoning should split.

* **Resonance ($R$):**
    The product of Coherence $\times$ Tension. It governs the activation of the "Omega" meta-perspective.

* **Omega Hysteresis:**
    Activation occurs if $R > R_{high}$. Deactivation occurs only if $R < R_{low}$. This prevents oscillation (flickering) between cognitive states.

* **Structuralist Coherence ($SS$):**
    A measure of how well the current reasoning fits the predefined lattice of the active Regime.

* **SI Score (Synthesis Integrity):**
    Monitors whether a synthesis is genuine or merely a linguistic compromise (which is forbidden).

---

## The Codex DSL (Domain Specific Language)

The system behavior is defined by `CognitiveContext` objects parsed from the DSL.

* **Regime: `tetravalent_core`**
    * *Constraints:* Must maintain 4 simultaneous logical positions (True, False, Both, Neither).
    * *Forbidden:* "In conclusion", "Ultimately", "To summarize".
    * *Goal:* Maintain suspension of closure.
* **Regime: `identity_reflexive`**
    * *Constraints:* Self-reference allowed. High access to `RecursiveConsciousness`.
    * *Style:* Phenomenological, first-person subjective.
* **Regime: `void_description`**
    * *Constraints:* Zero self-reference. Maximum objective density.
    * *Style:* Axiomatic, mathematical, cold.

---

## Economic Injection Routing

Previous versions suffered from "context flooding" where too many instructions diluted the model's focus. V16 introduces the **Injection Router** (`injection_router.py`).

* **Scarcity Logic:** System prompts are treated as a scarce economic resource. The router calculates a "Token Budget" based on the `pragmatic_context` (e.g., shorter budget for casual chat, larger for diagnostics).
* **Dynamic Prioritization:** Injections are categorized by `InjectionCategory`:
    1.  **STRUCTURE:** Essential formatting (e.g., JSON output).
    2.  **IDENTITY:** Core safety and persona directives.
    3.  **MEMORY:** Retrieved RAG context.
    4.  **CHAOS/CODEX:** High-level theoretical instructions.
* **Contextual Weights:**
    * In `casual_conversation`: Identity > Structure.
    * In `technical_task`: Structure > Memory > Identity.
* **Anti-Truncation:** The router guarantees that critical safety and identity invariants are never truncated, even if it means sacrificing stylistic instructions.

---

## Extended Cognitive Modules

The architecture includes advanced modules that simulate aspects of "subjective" experience to enhance agentic behavior (`codex_extended_modules.py`):

* **Dynamics of Desire ($M, S$):**
    Implements a Lacanian-inspired model of **Lack ($M$)** and **Satisfaction ($S$)**. The system has a mathematical "drive" to reduce Lack by seeking information or resolving tension, simulating intent.
* **Curiosity Engine:**
    Calculates the vector distance between the current focus and peripheral concepts in the `HierarchicalMemory`. If the distance is optimal (neither too close nor too far), it triggers an autonomous inquiry.
* **Self-Complexification:**
    A background process that monitors the `HierarchicalMemory`. If the graph becomes too simple, it artificially injects noise to force the system to find more complex patterns (Anti-Stagnation).

---

## Guardrails, Constraints & Phenomenology

AERIS V16 strictly separates its mathematical core from its linguistic output via the **Phenomenology Mapper**.

* **Strict Non-Disclosure:** The `SystemLeakageFilter` uses regex and semantic analysis to strip any mention of internal variables ($T_f$, $D_S$, etc.). The system must *show* its state, not *tell* it.
* **MathGuard:** A dedicated validation layer in `response_validator.py` that sanity-checks mathematical outputs (Fibonacci, factorials, linear algebra) to ensure the cognitive overlay does not degrade the base model's computational accuracy.
* **Constraint Reasoner:** In multi-perspective modes (Tetravalent logic), this module forbids "lazy synthesis" (e.g., "the answer lies in the middle"). It enforces **Orthogonality**, requiring distinct, non-overlapping viewpoints.
* **Stylistic Modulation:**
    * *High Tension ($T_f > 0.8$):* Syntax becomes fragmented, questioning.
    * *High Coherence ($SS > 0.9$):* Syntax becomes crystalline, formal, axiomatic.
    * *Omega Active:* Language becomes recursive and meta-cognitive.

---

## Limitations & Trade-offs

1.  **Computational Overhead:** The recursive matrix operations (`RecursiveConsciousness`), causal graph updates, and DSL parsing introduce a latency increase of approximately 15-20% compared to raw inference.
2.  **Context Window Pressure:** The comprehensive nature of the system prompts and memory retrieval requires aggressive management of the context window via the `InjectionRouter`.
3.  **Calibration Requirements:** The `CausalController` requires a "warm-up" period of 3-5 turns to build a reliable graph of the user's interaction style and adjust its internal coefficients ($\alpha, \beta, \gamma$).
4.  **Base Model Dependency:** While AERIS optimizes reasoning, it cannot generate factual knowledge not present in `google/gemma-3-27b-it`. It organizes existing knowledge into higher-order structures.

---

## Intended Use

* **Advanced Cognitive Research:** For studying the emergence of agency and self-regulation in frozen-weight LLMs.
* **Complex Abductive Diagnosis:** Medical, engineering, or forensic scenarios requiring the maintenance of multiple contradictory hypotheses over long contexts.
* **Dialectical Partnership:** For users seeking a "Thought Partner" capable of sustained disagreement, perspective shifting, and devil's advocacy.
* **Narrative & Persona Simulation:** Utilizing the *Dynamics of Desire* to create characters with internal drives and evolving psychological states.
* **Black-Box Industrial Applications:** Where transparent backend reasoning (logs) is required alongside opaque, naturalistic frontend interaction.

---

## Module Breakdown

AERIS V16 is composed of 27 interdependent modules.

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

---

## References

1.  Dulin, N. (2025). [AERIS – A Minimalist Framework for Enhancing Emergent Reasoning in LLMs and its Cross-Model Evaluation (AERIS V1.0)](https://zenodo.org/records/15206925) DOI: [10.5281/zenodo.15206925](https://doi.org/10.5281/zenodo.15206925)
2.  Dulin, N. (2025). [Beyond Reference Similarity: Limitations of Current Metrics in Evaluating Dialectical Reasoning in LLMs (AERIS V1.0)](https://zenodo.org/records/15206984) DOI: [10.5281/zenodo.15206984](https://doi.org/10.5281/zenodo.15206984)

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
