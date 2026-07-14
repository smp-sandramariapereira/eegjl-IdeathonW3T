# ProvaOnChain — Verifiable Academic Evidence on Ethereum

ProvaOnChain is an early-stage Ethereum pilot for registering and verifying cryptographic proofs of academic evidence. Personal student information, grades, and detailed assessments remain offchain.

## Status

Early-stage Ethereum pilot.

## Problem

Educational teams need a way to prove that an academic artifact existed at a given time and has not been altered, without putting student identity or sensitive school records onchain.

## Solution

The planned MVP records only a non-personal project identifier, a methodology stage, a deterministic hash, a public URI, an issuer address, and a timestamp. The chain is used for verification, not for storing educational records.

## Architecture

- local evidence hashing;
- authorized issuer wallet;
- Solidity smart contract;
- Ethereum Sepolia testnet;
- public verification by hash comparison;
- GitHub documentation and templates.

## Usage flow

1. Prepare an artifact offchain.
2. Generate a deterministic hash locally.
3. Issue the evidence from an authorized wallet.
4. Query the record publicly.
5. Recompute the hash locally and compare it with the onchain value.

## Data model

- `evidenceId`: incremental identifier;
- `projectId`: non-personal project identifier;
- `stage`: integer from 1 to 8;
- `evidenceHash`: `bytes32` hash;
- `evidenceURI`: public artifact URI;
- `issuer`: wallet address;
- `issuedAt`: timestamp.

## Requirements

- register evidence;
- query evidence publicly;
- verify hashes;
- keep personal data offchain;
- use a simple, readable contract;
- support local execution and Sepolia preparation.

## Installation

```bash
npm install
```

## Environment setup

Copy `.env.example` to `.env` and fill only local secrets for your own environment.

```bash
cp .env.example .env
```

Required variables:

- `SEPOLIA_RPC_URL`
- `PRIVATE_KEY`
- `CONTRACT_ADDRESS`

## Run tests

```bash
npm run test
```

## Local node

Start a persistent local network in a separate terminal:

```bash
npm run node
```

## Local compile

```bash
npm run compile
```

## Local deploy

```bash
npm run deploy:local
```

This deploys to the local Hardhat node running at `http://127.0.0.1:8545`.

## Sepolia deploy

```bash
npm run deploy:sepolia
```

## Issue evidence

Set environment variables such as `CONTRACT_ADDRESS`, `PROJECT_ID`, `STAGE`, `EVIDENCE_URI`, and `EVIDENCE_INPUT`, then run:

```bash
npm run issue:evidence
```

For Sepolia, use `npm run issue:evidence:sepolia` with `SEPOLIA_RPC_URL`, `PRIVATE_KEY`, and `CONTRACT_ADDRESS` configured.

The evidence hash uses SHA-256 over UTF-8 bytes from a local file path or direct text input.

## Verify evidence

Set `CONTRACT_ADDRESS`, `EVIDENCE_ID`, and `EVIDENCE_INPUT`, then run:

```bash
npm run verify:evidence
```

For Sepolia, use `npm run verify:evidence:sepolia` with the same environment variables and the target `EVIDENCE_ID`.

Both scripts expect the contract to be reachable on the active network, usually the local Hardhat node for development.

## Privacy

See [docs/PRIVACY-MODEL.md](docs/PRIVACY-MODEL.md) for the onchain/offchain split, risks, and mitigations.

## Limitations

- no frontend yet;
- no Sepolia deployment has been performed in this stage;
- no production integration exists;
- no student data is stored onchain;
- no mainnet deployment is planned for this MVP.

## Roadmap

- local contract prototype;
- automated tests;
- local deployment flow;
- Sepolia preparation;
- evidence issuance and verification scripts;
- minimal classroom pilot documentation.

## License

- Code: MIT
- Educational content: CC BY 4.0

## Related documents

- [Privacy model](docs/PRIVACY-MODEL.md)
- [Classroom activity](docs/CLASSROOM-ACTIVITY.md)
- [Ethereum architecture](implementations/ethereum/ARCHITECTURE.md)
- [Ethereum requirements](implementations/ethereum/REQUIREMENTS.md)