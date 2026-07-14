# Privacy Model

## Onchain

- non-personal project identifier;
- methodology stage;
- evidence hash;
- public URI;
- issuer address;
- timestamp.

## Offchain

- student name;
- e-mail;
- enrollment number;
- grade;
- detailed feedback;
- forms;
- school documents;
- any personal or sensitive data.

The blockchain proves the existence and integrity of an academic artifact. It does not store the student’s identity, grade, or detailed assessment.

## Privacy rules

- use testnet only in this pilot;
- do not include personal data in `projectId` or `evidenceURI`;
- anonymize repositories when minors are involved;
- assume anything published onchain cannot be deleted later;
- never publish private keys or `.env` files.

## Main risks

- correlation through public URLs;
- accidental exposure of names in commits or files;
- irreversibility of onchain publication;
- wallet association with public records;
- indexing by explorers and search tools.

## Mitigations

- use anonymous or generic identifiers;
- review records before issuance;
- keep the proof separate from the content;
- limit the pilot to Sepolia;
- minimize the amount of data disclosed anywhere public.