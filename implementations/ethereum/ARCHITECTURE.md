# Architecture

## Planned flow

```text
Academic artifact
↓
Local hash generation
↓
Authorized issuer
↓
Solidity contract
↓
Ethereum Sepolia
↓
Public verification
```

## Components

### Academic artifact

The artifact is the educational output being evidenced, such as a project deliverable, report, or code snapshot. The artifact itself stays offchain.

### Hash generation

A local process generates the evidence hash from the artifact or from a normalized representation of it. The goal is integrity verification, not content publication.

### Issuer wallet

An authorized wallet represents the issuing side of the educational process. It should be controlled by the project maintainer or another clearly defined issuer role.

### Smart contract

The contract stores only the minimum fields needed for public verification: non-personal project identifier, stage, hash, URI, issuer, and timestamp.

### Testnet

Ethereum Sepolia is the planned public testnet for validating the architecture before any broader educational use.

### Verification layer

A verification script or lightweight helper will compare the locally generated hash with the onchain record and confirm integrity.

### Public repository

GitHub stores documentation, examples, templates, and evidence of the design process. It should never contain private keys or personal school records.

### Optional frontend

A minimal interface may be added later for demonstration, but it is not part of this stage.

## Why Ethereum?

Ethereum is a suitable planned option for this pilot because it offers:

- public timestamping;
- verifiable integrity;
- independence from a single database owner;
- auditability;
- future interoperability.

These properties fit a public educational proof scenario where the evidence must be independently checkable.

## When Ethereum should not be used

A conventional database should be preferred when:

- there is no need for public verification;
- the data must be erasable;
- the data is personal;
- the solution works well in a centralized design;
- cost and complexity are not justified.

## Architectural rule

The chain proves that an academic artifact existed and was recorded. It does not replace the pedagogical record, the school process, or the responsibility to keep student data private.