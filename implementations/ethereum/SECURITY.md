# Security

## Baseline rules

- use testnet only;
- never commit private keys to the repository;
- keep secrets in `.env` or another local-only mechanism;
- review permissions before any registration flow;
- use an owner or issuer account with clear responsibility;
- validate inputs before writing any proof record;
- run tests before any public validation step;
- review dependencies before adoption;
- treat phishing and wallet compromise as realistic risks;
- assume onchain records cannot be deleted later.

## Operational cautions

- do not reuse production wallets for the pilot;
- do not store secrets in GitHub issues or pull requests;
- do not treat a testnet transaction as production evidence;
- do not assume a record can be removed once published;
- plan for future correction or revocation only as an offchain process.

## Vulnerability reporting

Please report security concerns privately to the project maintainer before opening a public issue.