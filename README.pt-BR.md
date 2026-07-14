# ProvaOnChain

ProvaOnChain é uma iniciativa educacional para registrar e verificar provas criptográficas de evidências acadêmicas, mantendo dados de estudantes fora da blockchain.

## Visão geral

O projeto organiza um piloto Ethereum para evidências acadêmicas verificáveis em uma escola pública brasileira. A proposta é apoiar práticas pedagógicas com rastreabilidade, integridade e privacidade, sem expor dados pessoais na rede.

## Problema

Em contextos educacionais, é útil comprovar que um artefato acadêmico existiu em determinado momento e que seu conteúdo não foi alterado. Ao mesmo tempo, nomes, notas, matrículas, e-mails e feedbacks detalhados precisam permanecer fora da blockchain.

## Metodologia

O ProvaOnChain se apoia na Metodologia Web3 Ideathon, que é agnóstica ao protocolo. A metodologia define etapas, entregáveis, documentação e critérios de decisão técnica. A blockchain só entra quando houver justificativa concreta.

## Histórico do piloto

A primeira implementação piloto da metodologia ocorreu em Solana. Esse histórico ajudou a validar fluxo pedagógico, colaboração em equipe, documentação por evidências e construção de MVP. Ele não define a metodologia como dependente de Solana.

## Justificativa para Ethereum

Ethereum está sendo planejada para este novo piloto porque oferece uma base madura para timestamp público, integridade verificável, auditabilidade e interoperabilidade futura. A proposta atual trabalha com Ethereum Sepolia, Solidity, Hardhat, TypeScript e ethers, sempre com separação clara entre dados onchain e offchain.

## Status atual

O repositório está na fase de organização documental e preparação da arquitetura. Não há smart contract funcional, deploy em Sepolia, integração com carteira ou frontend funcional nesta etapa.

## Próximos passos

1. Detalhar o requisito mínimo do contrato.
2. Estruturar scripts, testes e documentação técnica.
3. Definir o formato do registro de evidência.
4. Preparar o protótipo local em Solidity e Hardhat.
5. Planejar a validação em testnet pública.

## Licenças

- Código: MIT
- Conteúdo educacional: CC BY 4.0

## Como contribuir

1. Leia a [metodologia](METODOLOGIA.md).
2. Consulte a [implementação Ethereum](implementations/ethereum/README.md).
3. Verifique os arquivos de [privacidade](implementations/ethereum/PRIVACY-MODEL.md) e [segurança](implementations/ethereum/SECURITY.md).
4. Abra issues ou pull requests com mudanças pequenas, justificadas e documentadas.
5. Nunca envie dados pessoais, segredos ou chaves privadas para o repositório.