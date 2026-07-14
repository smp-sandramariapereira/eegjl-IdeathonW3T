// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title LearningEvidence
/// @notice Stores verifiable proofs of academic evidence with privacy-preserving onchain data.
contract LearningEvidence {
    struct Evidence {
        string projectId;
        uint8 stage;
        bytes32 evidenceHash;
        string evidenceURI;
        address issuer;
        uint256 issuedAt;
    }

    error NotOwner();
    error InvalidStage();
    error EmptyProjectId();
    error EmptyEvidenceHash();
    error EmptyEvidenceURI();
    error EvidenceNotFound();
    error ZeroAddress();

    event EvidenceIssued(
        uint256 indexed evidenceId,
        string projectId,
        uint8 indexed stage,
        bytes32 evidenceHash,
        string evidenceURI,
        address indexed issuer,
        uint256 issuedAt
    );

    address private _owner;
    uint256 private _nextEvidenceId;
    mapping(uint256 => Evidence) private _evidences;

    /// @notice Creates the contract and assigns ownership to the deployer.
    constructor() {
        _owner = msg.sender;
    }

    /// @notice Returns the current contract owner.
    function owner() external view returns (address) {
        return _owner;
    }

    /// @notice Returns the total number of issued evidence records.
    function evidenceCount() external view returns (uint256) {
        return _nextEvidenceId;
    }

    /// @notice Issues a new academic evidence record.
    /// @param projectId Non-personal project identifier.
    /// @param stage Methodology stage from 1 to 8.
    /// @param evidenceHash Deterministic hash of the evidence artifact.
    /// @param evidenceURI Public URI pointing to the artifact or commit.
    /// @return evidenceId The incremental identifier of the new evidence record.
    function issueEvidence(
        string calldata projectId,
        uint8 stage,
        bytes32 evidenceHash,
        string calldata evidenceURI
    ) external onlyOwner returns (uint256 evidenceId) {
        if (bytes(projectId).length == 0) {
            revert EmptyProjectId();
        }
        if (stage < 1 || stage > 8) {
            revert InvalidStage();
        }
        if (evidenceHash == bytes32(0)) {
            revert EmptyEvidenceHash();
        }
        if (bytes(evidenceURI).length == 0) {
            revert EmptyEvidenceURI();
        }

        evidenceId = _nextEvidenceId;
        _evidences[evidenceId] = Evidence({
            projectId: projectId,
            stage: stage,
            evidenceHash: evidenceHash,
            evidenceURI: evidenceURI,
            issuer: msg.sender,
            issuedAt: block.timestamp
        });

        _nextEvidenceId = evidenceId + 1;

        emit EvidenceIssued(evidenceId, projectId, stage, evidenceHash, evidenceURI, msg.sender, block.timestamp);
    }

    /// @notice Returns the evidence record for a given identifier.
    /// @param evidenceId Incremental identifier previously issued by the contract.
    /// @return evidence The stored evidence record.
    function getEvidence(uint256 evidenceId) external view returns (Evidence memory evidence) {
        if (evidenceId >= _nextEvidenceId) {
            revert EvidenceNotFound();
        }

        evidence = _evidences[evidenceId];
    }

    /// @notice Transfers ownership to a new owner.
    /// @param newOwner Address that will become the new owner.
    function transferOwnership(address newOwner) external onlyOwner {
        if (newOwner == address(0)) {
            revert ZeroAddress();
        }

        _owner = newOwner;
    }

    modifier onlyOwner() {
        if (msg.sender != _owner) {
            revert NotOwner();
        }
        _;
    }
}