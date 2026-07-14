# ProvaOnChain

ProvaOnChain is an educational initiative for registering and verifying cryptographic proofs of academic evidence while keeping student data offchain.

## Overview

The project documents a planned Ethereum pilot for verifiable academic evidence in a Brazilian public-school context. It is designed to support teaching and learning with integrity, auditability, and privacy.

## Problem

In education, it is useful to prove that an academic artifact existed at a given time and that its content was not altered. At the same time, names, grades, enrollment numbers, e-mails, detailed feedback, and similar personal data must stay offchain.

## Methodology

ProvaOnChain follows the Web3 Ideathon methodology, which is protocol-independent. The methodology defines stages, deliverables, documentation, and decision criteria. Blockchain is used only when there is a clear technical reason.

## Pilot history

The first pilot implementation of the methodology used Solana. That experience helped validate the educational workflow, team collaboration, evidence-based assessment, and MVP development process. It does not make the methodology Solana-specific.

## Why Ethereum

Ethereum is being planned for this pilot because it provides a mature base for public timestamps, verifiable integrity, auditability, and future interoperability. The planned stack uses Ethereum Sepolia, Solidity, Hardhat, TypeScript, and ethers, with a strict separation between onchain and offchain data.

## Current status

This repository is in the documentation and architecture-preparation phase. There is no functional smart contract, Sepolia deployment, wallet integration, or working frontend in this stage.

## Next steps

1. Define the minimum smart contract requirement.
2. Prepare scripts, tests, and technical documentation.
3. Define the evidence-record format.
4. Prepare the local Solidity and Hardhat prototype.
5. Plan validation on a public testnet.

## Licenses

- Code: MIT
- Educational content: CC BY 4.0

## Contributing

1. Read the [methodology](METODOLOGIA.md).
2. Review the [Ethereum implementation](implementations/ethereum/README.md).
3. Check the [privacy model](implementations/ethereum/PRIVACY-MODEL.md) and [security guidance](implementations/ethereum/SECURITY.md).
4. Open issues or pull requests with small, documented, and justified changes.
5. Never add personal data, secrets, or private keys to the repository.