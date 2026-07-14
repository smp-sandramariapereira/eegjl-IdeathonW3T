# ProvaOnChain — Verifiable Academic Evidence on Ethereum

## Status

Design and preparation phase.

## Problem

Academic teams need a way to prove that an artifact existed, was issued, and can be verified later without exposing student identity or sensitive school records.

## Proposal

ProvaOnChain is a planned Ethereum pilot for registering and verifying cryptographic proofs of academic evidence while keeping student identities, grades, and detailed assessments offchain.

## Planned scope

- register a proof record for an academic artifact;
- associate a non-personal project identifier;
- record a stage value;
- keep evidence hash and URI minimal;
- record issuer and timestamp;
- support public verification of integrity.

## Onchain data

- projectId;
- stage;
- evidenceHash;
- evidenceURI;
- issuer;
- timestamp.

## Offchain data

- names;
- grades;
- enrollment numbers;
- e-mails;
- detailed feedback;
- school forms and authorizations;
- documents with personal or sensitive data.

## Planned stack

- Ethereum Sepolia;
- Solidity;
- Hardhat;
- TypeScript;
- ethers;
- GitHub for documentation and evidence.

## Initial architecture

- local artifact hashing;
- authorized issuer wallet;
- Solidity contract on Sepolia;
- public verification flow;
- repository-backed documentation;
- optional minimal frontend in a later step.

## Completion criteria

- a minimal Solidity contract exists;
- tests cover the planned behavior;
- local deployment works;
- Sepolia validation is documented;
- evidence issuance and verification are reproducible;
- privacy and security requirements are documented and respected.

## Related documents

- [Roadmap](ROADMAP.md)
- [Requirements](REQUIREMENTS.md)
- [Privacy model](PRIVACY-MODEL.md)
- [Security](SECURITY.md)
- [Architecture](ARCHITECTURE.md)
- [Classroom integration](CLASSROOM-INTEGRATION.md)
- [Decision log](DECISIONS.md)