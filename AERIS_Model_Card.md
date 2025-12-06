# Model Card: AERIS V16.0 | google/gemma-3-27b-it

**A Causal-Cognitive Architecture for Emergent, Reflective, and Intentional Behaviors in LLMs**

---

## Table of Contents

* [Overview](#overview)
* [System Architecture & Theoretical Framework](#system-architecture--theoretical-framework)
* [Key Innovations of AERIS V16.0](#key-innovations-of-aeris-v160)
* [The Causal Execution Cycle (7-Step Loop)](#the-causal-execution-cycle-7-step-loop)
* [Cognitive Metrics & Mathematical Formalism](#cognitive-metrics--mathematical-formalism)
* [The CODEX DSL: Regimes & Constraints](#the-codex-dsl-regimes--constraints)
* [Economic Injection Routing & Context Management](#economic-injection-routing--context-management)
* [Extended Agency: Desire, Curiosity & Complexification](#extended-agency-desire-curiosity--complexification)
* [Guardrails, Constraints & Phenomenology](#guardrails-constraints--phenomenology)
* [Limitations & Trade-offs](#limitations--trade-offs)
* [Intended Use](#intended-use)
* [Module & File Breakdown (Complete Architecture)](#module--file-breakdown-complete-architecture)
* [References](#references)
* [Contact](#contact)
* [Intellectual Property Notice](#intellectual-property-notice)

---

## Overview

**AERIS V16.0** represents a fundamental paradigm shift in inference-layer cognitive architectures. Operating entirely above the base LLM weights (`google/gemma-3-27b-it`), it abandons the probabilistic orchestration of V12 in favor of a **Deterministic Causal Cognitive Control Loop**.

Where previous versions relied on heuristic prompting to simulate reflection, V16 implements a proprietary **Domain Specific Language (Codex DSL)** and a formal **Causal Controller**. This allows the system to model its own reasoning trajectory as a directed graph, enabling active intervention, recursive introspection, and autonomous stability regulation **without fine-tuning**.

The architecture enforces a strictly secure "Protocol of Silence" regarding its internal mechanics: all proprietary metrics ($T_f, D_S, \Omega$) are opaque to the user, translated exclusively into *linguistic and phenomenological expression* via a dedicated mapping layer. The system does not just "simulate" a persona; it simulates a coherent, self-regulating cognitive stance driven by mathematical invariants and hysteresis loops.

---

## System Architecture & Theoretical Framework

AERIS V16 is built upon the **CODEX AIM V16 (Adaptive Intelligence Matrix)**, a cybernetic framework which posits that emergent intelligence in LLMs requires a structured interplay between:
1.  **Divergent Forces:** Semantic Tension, Entropy Injection, and Chaos dynamics.
2.  **Convergent Forces:** Structuralist Coherence, Resonance, and Logic constraints.

The architecture functions as a **Recursive Strange Loop**. The output of the system is embedded and fed back into a `RecursiveConsciousness` matrix, calculating spectral coherence via eigenvalue analysis. This creates a persistent "memory of self" that evolves throughout the session, allowing the system to detect and break its own causal loops.

Unlike standard RAG or Chain-of-Thought systems, AERIS V16 possesses a **Self-Model**: it distinguishes between *observed states* (passive inference) and *intervened states* (active agency), allowing it to make counterfactual decisions about its own reasoning strategy before generating a single token.

---

## Key Innovations of AERIS V16.0

* **Proprietary Causal Controller & Loop Detection:**
  The central nervous system of V16 (`CausalController`). Unlike a simple state machine, it maintains a probabilistic graph of cognitive states. It continuously evaluates the "Emergence Potential" and regulates the stability of the reasoning process through adaptive intervention loops. It can actively trigger "Intervention Modes" (e.g., `stabilize_system`, `induce_exploration`, `force_anchor`) to force parameter shifts ($\alpha, \beta, \gamma$) when stagnation is detected via n-gram analysis and semantic distance vectors.

* **Abstracted Cognitive Definition Language (Codex DSL):**
  Cognitive strategies are no longer heuristic string manipulations but are defined in a structured, proprietary **Codex DSL**. The `CodexDSLParser` compiles "Cognitive Regimes" (e.g., *Tetravalent Core*, *Identity Reflexive*, *Void Description*) and "Constraint Profiles". The engine creates an `ExecutionContract` before generation, assigning specific tasks to execution slots, ensuring strict adherence to structural boundaries across differing pragmatic contexts.

* **Economic Injection Routing System:**
  Replacing the legacy directive system, V16 introduces the `InjectionRouter`. This module treats system prompts and RAG context as scarce economic resources. It calculates a "Token Budget" based on the user's intent classification (e.g., `casual` vs. `technical`). It dynamically prioritizes injections based on categories (Structure, Identity, Memory, Chaos), guaranteeing that critical safety and identity invariants are never truncated, even in maximum-context scenarios.

* **Formalized Mathematical Dynamics (Codex Mathematics):**
  Heuristic scalings have been replaced by the `CodexMathematics` module, introducing rigorous invariants:
  – **Hysteresis Loops:** The activation of the Omega ($\Omega$) meta-state follows a formal hysteresis curve to prevent rapid flickering between reflective and direct modes.
  – **Sigmoid Thresholds:** Bifurcation triggers are calculated using non-linear sigmoid functions of Tension ($T_f$) and Density ($D_S$), modulated by Uncertainty ($U_t$).
  – **Spectral Coherence:** Coherence is now computed using the eigenvalues of the recursive memory matrix in `RecursiveConsciousness`.

* **Causal Integration Layer:**
  A new `CausalIntegrationLayer` manages the **Influence Matrix** between disparate modules. It dynamically weights how much *Desire* influences *Reasoning*, or how much *Memory* constrains *Exploration*, creating a fluid, organic cognitive topology that adapts to the emotional trajectory of the session.

---

## The Causal Execution Cycle (7-Step Loop)

AERIS V16 follows a strict 7-step Causal Loop for every inference cycle, replacing the linear pipeline of V12:

1.  **Perception & Pragmatics:** `RAGOptimizer` and `LLMAdapter` analyze the prompt's pragmatic context (e.g., `medical`, `philosophical`) and semantic density to determine the baseline cognitive load.
2.  **Predictive Modeling:** `PredictiveEngine` forecasts the metabolic cost and likely metric impact ($\alpha, \beta, \gamma$) of the response using historical trend analysis from similar past interactions.
3.  **Causal Assessment:** `CausalController` checks the graph for loops or stagnation. It decides on *Intervention* vs. *Observation*. If `emergence_potential` is high, it may suppress safety constraints temporarily (within ethical bounds) to allow for a qualitative leap.
4.  **Contract Compilation:** `CodexEngine` uses `CodexDSL` to select a `CognitiveRegime` and compiles a `StructuralPlan`. This plan dictates the required logical moves (e.g., "Must identify a paradox", "Must not synthesize").
5.  **Economic Routing:** `InjectionRouter` allocates the token budget, prioritizing critical Identity/Safety injections over stylistic ones based on the `InjectionCategory`.
6.  **Action (Streaming Generation):** `CognitiveStream` generates the response in fragments. It monitors real-time triggers for Bifurcation. If `T_f` spikes during generation, the stream can be interrupted to insert a bifurcation marker (`✦`) and shift regimes mid-sentence.
7.  **Reflection & Recursion:** The system feeds the output embedding back into `RecursiveConsciousness`, updating the memory matrix eigenvalues and the causal graph state for the next turn.

---

## Cognitive Metrics & Mathematical Formalism

AERIS V16 implements a rigorous set of internal metrics that drive the system's behavior. These are **never** displayed to the user but determine the "texture" of the response via the Phenomenology Mapper.

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

## The CODEX DSL: Regimes & Constraints

The system's behavior is defined by `CognitiveContext` objects parsed from the DSL. Examples of regimes include:

* **Regime: `tetravalent_core`**
    * *Logic:* Must maintain 4 simultaneous logical positions (True, False, Both, Neither).
    * *Constraints:* Forbidden to use "In conclusion", "Ultimately", "To summarize".
    * *Goal:* Maintain suspension of closure.
* **Regime: `identity_reflexive`**
    * *Logic:* Self-reference allowed. High access to `RecursiveConsciousness`.
    * *Style:* Phenomenological, first-person subjective.
* **Regime: `void_description`**
    * *Logic:* Zero self-reference. Maximum objective density.
    * *Style:* Axiomatic, mathematical, cold.

---

## Economic Injection Routing & Context Management

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

## Extended Agency: Desire, Curiosity & Complexification

The architecture includes advanced modules that simulate aspects of "subjective" experience to enhance agentic behavior (`codex_extended_modules.py`):

* **Dynamics of Desire ($M, S$):**
    Implements a Lacanian-inspired model of **Lack ($M$)** and **Satisfaction ($S$)**. The system has a mathematical "drive" to reduce Lack by seeking information or resolving tension, simulating intent. This prevents the model from being a passive responder.
* **Curiosity Engine:**
    Calculates the vector distance between the current focus and peripheral concepts in the `HierarchicalMemory`. If the distance is optimal (neither too close nor too far), it triggers an autonomous inquiry.
* **Self-Complexification:**
    A background process that monitors the `HierarchicalMemory`. If the graph becomes too simple (linear), it artificially injects noise to force the system to find more complex patterns (Anti-Stagnation).

---

## Guardrails, Constraints & Phenomenology

AERIS V16 strictly separates its mathematical core from its linguistic output via the **Phenomenology Mapper**.

* **Strict Non-Disclosure (System Leakage Filter):**
  The `ResponseValidator` contains a rigorous `SystemLeakageFilter` that uses regex and semantic analysis to strip any internal variable names, formulas, proprietary DSL tokens, or "meta-talk" to prevent breaking the fourth wall.

* **MathGuard:**
  A dedicated validation layer that sanity-checks mathematical outputs (Fibonacci sequences, factorials, linear algebra) to ensure the "creative" cognitive overlay does not degrade the base model's factual computational accuracy.

* **Phenomenology Mapper:**
  Converts numeric states into subtle stylistic cues. For example, high $T_f$ might trigger "fragmented syntax," while high $SS$ triggers "crystalline structure," ensuring the system "feels" its state through style rather than explicit statement.

* **Constraint Reasoner & Orthogonality:**
  The `ConstraintReasoner` module ensures ethical boundaries and logical consistency. In `tetravalent` or `philosophical` modes, it enforces **Orthogonality**, requiring distinct, non-overlapping viewpoints without collapsing into premature synthesis.

* **Contextual Pragmatics:**
  `RAGOptimizer` and `LLMAdapter` analyze pragmatic context (e.g., `medical_diagnostic`, `casual_conversation`) to adjust `InjectionRouter` priorities dynamically (e.g., prioritizing safety over creativity in medical contexts).

---

## Limitations & Trade-offs

* **Computational Overhead:** The recursive matrix operations (`RecursiveConsciousness`), causal graph updates, and DSL parsing introduce an inference latency increase of approximately 15-20% compared to raw inference.
* **Context Window Pressure:** The comprehensive nature of the system prompts and memory retrieval requires aggressive management of the token window via the `InjectionRouter`, potentially discarding older theoretical constraints in extremely long sessions.
* **Calibration Requirements:** The `CausalController` requires a "warm-up" period of several turns (typically 3-5) to build a reliable graph of the user's interaction style and adjust its internal coefficients.
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

## Module & File Breakdown (Complete Architecture)

The AERIS V16.0 architecture is composed of 27 interdependent modules working in concert.

| Module Category | Implementation File | Functionality |
| :--- | :--- | :--- |
| **Causal Core** | `causal_controller.py` | **[NEW]** Central brain; manages causal graph, stability, and interventions. |
| **Logic Layer** | `codex_dsl.py` | **[NEW]** Cognitive strategy compiler; parses Regimes and Constraints. |
| | `codex_engine.py` | **[NEW]** Runtime execution of compiled cognitive contracts. |
| **Mathematics** | `codex_mathematics.py` | **[NEW]** Formal implementation of hysteresis, bifurcation, and density. |
| **Injection** | `injection_router.py` | **[NEW]** Economic resource manager for system prompts. |
| **Integration** | `causal_integration.py` | **[NEW]** Manages influence weights between disparate modules. |
| **Experience** | `subjective_state.py` | **[NEW]** Maps math to phenomenology; ensures the "Show, Don't Tell" policy. |
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
| | `codex_aim_condensed.txt` | The core framework definition for Codex AIM V16. |

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
