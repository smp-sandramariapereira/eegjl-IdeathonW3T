# Decision Log

## ADR-001 — Use Ethereum Sepolia

- Status: Accepted
- Context: The pilot needs a public testnet for validation without using mainnet.
- Decision: Use Ethereum Sepolia for the planned proof-of-evidence workflow.
- Consequences: lower cost and safer validation, but no production-grade assumptions.

## ADR-002 — Store only hashes and non-personal identifiers

- Status: Accepted
- Context: Academic evidence must be verifiable without exposing student data.
- Decision: Keep only minimal proof fields onchain.
- Consequences: privacy is improved, but the system must rely on offchain content management.

## ADR-003 — Keep student data offchain

- Status: Accepted
- Context: Student identity, grades, and detailed feedback are sensitive.
- Decision: Store all personal or sensitive records offchain.
- Consequences: the architecture becomes privacy-preserving and easier to justify in a school setting.

## ADR-004 — Use Solidity and Hardhat

- Status: Accepted
- Context: The future pilot needs an Ethereum-native smart contract workflow.
- Decision: Use Solidity for the contract and Hardhat for local development.
- Consequences: the team gets a standard Ethereum development path and testable structure.

## ADR-005 — No token or NFT in the MVP

- Status: Accepted
- Context: Tokens and NFTs are outside the evidence-verification goal.
- Decision: Exclude tokenized features from the minimum pilot.
- Consequences: the pilot stays focused on proof, privacy, and verifiability.

## ADR-006 — Separate methodology from ecosystem implementation

- Status: Accepted
- Context: The Web3 Ideathon methodology must not depend on a single blockchain.
- Decision: Treat Solana and Ethereum as separate implementations of the same educational method.
- Consequences: the repository stays reusable, adaptable, and technically honest.