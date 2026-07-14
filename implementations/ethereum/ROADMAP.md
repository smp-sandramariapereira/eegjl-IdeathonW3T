# Roadmap

## Phase 0 — Repository and architecture

**Objective:** organize the repository, scope, documentation, and decision record before implementation.

**Deliverables:** README files, architecture notes, privacy model, security guidance, requirements, templates, and decision log.

**Completion criteria:** the repository clearly states what is planned, what is out of scope, and what is not yet implemented.

**Risks:** ambiguity about scope, accidental overreach, and confusion between pilot history and future implementation.

**Dependencies:** repository review, documentation alignment, and privacy constraints.

## Phase 1 — Local Solidity prototype

**Objective:** define the minimal contract behavior in a local development environment.

**Deliverables:** Solidity contract skeleton, Hardhat project structure, local config, and initial scripts.

**Completion criteria:** the local prototype can be compiled and expresses the planned evidence-record shape.

**Risks:** overengineering, premature feature growth, and leaking personal data into test inputs.

**Dependencies:** requirements, architecture, and decision log.

## Phase 2 — Automated testing

**Objective:** validate contract behavior through repeatable tests.

**Deliverables:** automated tests, fixtures, and a documented test strategy.

**Completion criteria:** the planned contract rules are covered by tests and failures are understandable.

**Risks:** incomplete coverage, false confidence, and test data that is too realistic.

**Dependencies:** prototype contract and local development setup.

## Phase 3 — Sepolia deployment

**Objective:** prepare and document a public testnet validation step.

**Deliverables:** deployment script, testnet notes, and a documented issuer wallet process.

**Completion criteria:** deployment steps are reproducible and remain limited to testnet.

**Risks:** wallet mistakes, bad network selection, and confusion with production readiness.

**Dependencies:** local prototype, tests, and security checks.

## Phase 4 — Evidence issuance and verification

**Objective:** define how evidence is issued and verified with minimal onchain data.

**Deliverables:** evidence record template, verification script, and documentation of the workflow.

**Completion criteria:** a record can be generated locally, issued conceptually, and verified against the planned contract rules.

**Risks:** URI correlation, accidental disclosure, and inconsistent project identifiers.

**Dependencies:** contract design, privacy model, and issuer authorization.

## Phase 5 — Minimal classroom pilot

**Objective:** prepare a small, controlled educational pilot with strict privacy rules.

**Deliverables:** classroom procedure, evidence checklist, and teacher guidance.

**Completion criteria:** the workflow can be explained and repeated in a classroom setting without exposing student data.

**Risks:** scope creep, misuse of personal information, and misunderstanding of the pilot limits.

**Dependencies:** testnet validation, security review, and classroom integration guidance.

## Phase 6 — Documentation and replication kit

**Objective:** package the pilot so another educator can understand and replicate the approach.

**Deliverables:** documentation bundle, templates, checklist, and a replication guide.

**Completion criteria:** a third party can understand the method, the constraints, and the reproducible steps.

**Risks:** incomplete handoff, outdated examples, and loss of privacy context.

**Dependencies:** all earlier phases and a stable documentation set.