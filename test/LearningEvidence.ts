import { expect } from "chai";
import { ethers } from "hardhat";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";

describe("LearningEvidence", function () {
  async function deployFixture() {
    const [owner, other] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("LearningEvidence");
    const contract = await factory.deploy();
    await contract.waitForDeployment();

    return { contract, owner, other };
  }

  async function issueSample(contract: any, owner: any) {
    return contract.connect(owner).issueEvidence(
      "biblioteca-digital-gjl",
      5,
      ethers.keccak256(ethers.toUtf8Bytes("artifact-content")),
      "https://github.com/example/project/commit/abc123"
    );
  }

  it("allows the owner to issue evidence", async function () {
    const { contract, owner } = await deployFixture();

    await expect(issueSample(contract, owner)).to.not.be.reverted;
  });

  it("rejects an unauthorized issuer", async function () {
    const { contract, other } = await deployFixture();

    await expect(
      contract.connect(other).issueEvidence(
        "biblioteca-digital-gjl",
        5,
        ethers.keccak256(ethers.toUtf8Bytes("artifact-content")),
        "https://github.com/example/project/commit/abc123"
      )
    ).to.be.revertedWithCustomError(contract, "NotOwner");
  });

  it("rejects stage 0", async function () {
    const { contract, owner } = await deployFixture();

    await expect(
      contract.connect(owner).issueEvidence(
        "biblioteca-digital-gjl",
        0,
        ethers.keccak256(ethers.toUtf8Bytes("artifact-content")),
        "https://github.com/example/project/commit/abc123"
      )
    ).to.be.revertedWithCustomError(contract, "InvalidStage");
  });

  it("rejects stage above 8", async function () {
    const { contract, owner } = await deployFixture();

    await expect(
      contract.connect(owner).issueEvidence(
        "biblioteca-digital-gjl",
        9,
        ethers.keccak256(ethers.toUtf8Bytes("artifact-content")),
        "https://github.com/example/project/commit/abc123"
      )
    ).to.be.revertedWithCustomError(contract, "InvalidStage");
  });

  it("rejects a zero hash", async function () {
    const { contract, owner } = await deployFixture();

    await expect(
      contract.connect(owner).issueEvidence(
        "biblioteca-digital-gjl",
        5,
        ethers.ZeroHash,
        "https://github.com/example/project/commit/abc123"
      )
    ).to.be.revertedWithCustomError(contract, "EmptyEvidenceHash");
  });

  it("rejects an empty projectId", async function () {
    const { contract, owner } = await deployFixture();

    await expect(
      contract.connect(owner).issueEvidence(
        "",
        5,
        ethers.keccak256(ethers.toUtf8Bytes("artifact-content")),
        "https://github.com/example/project/commit/abc123"
      )
    ).to.be.revertedWithCustomError(contract, "EmptyProjectId");
  });

  it("rejects an empty evidenceURI", async function () {
    const { contract, owner } = await deployFixture();

    await expect(
      contract.connect(owner).issueEvidence(
        "biblioteca-digital-gjl",
        5,
        ethers.keccak256(ethers.toUtf8Bytes("artifact-content")),
        ""
      )
    ).to.be.revertedWithCustomError(contract, "EmptyEvidenceURI");
  });

  it("returns an issued evidence record", async function () {
    const { contract, owner } = await deployFixture();

    await issueSample(contract, owner);

    const evidence = await contract.getEvidence(0);
    expect(evidence.projectId).to.equal("biblioteca-digital-gjl");
  });

  it("returns data matching the issued values", async function () {
    const { contract, owner } = await deployFixture();

    const projectId = "biblioteca-digital-gjl";
    const stage = 5;
    const evidenceHash = ethers.keccak256(ethers.toUtf8Bytes("artifact-content"));
    const evidenceURI = "https://github.com/example/project/commit/abc123";

    await issueSample(contract, owner);

    const evidence = await contract.getEvidence(0);
    expect(evidence.projectId).to.equal(projectId);
    expect(evidence.stage).to.equal(stage);
    expect(evidence.evidenceHash).to.equal(evidenceHash);
    expect(evidence.evidenceURI).to.equal(evidenceURI);
    expect(evidence.issuer).to.equal(await owner.getAddress());
    expect(evidence.issuedAt).to.be.greaterThan(0n);
  });

  it("emits the EvidenceIssued event", async function () {
    const { contract, owner } = await deployFixture();

    const projectId = "biblioteca-digital-gjl";
    const stage = 5;
    const evidenceHash = ethers.keccak256(ethers.toUtf8Bytes("artifact-content"));
    const evidenceURI = "https://github.com/example/project/commit/abc123";

    await expect(
      contract.connect(owner).issueEvidence(projectId, stage, evidenceHash, evidenceURI)
    )
      .to.emit(contract, "EvidenceIssued")
      .withArgs(0, projectId, stage, evidenceHash, evidenceURI, await owner.getAddress(), anyValue);
  });

  it("increments evidenceCount after issuance", async function () {
    const { contract, owner } = await deployFixture();

    expect(await contract.evidenceCount()).to.equal(0n);
    await issueSample(contract, owner);
    expect(await contract.evidenceCount()).to.equal(1n);
  });

  it("rejects an unknown evidenceId", async function () {
    const { contract } = await deployFixture();

    await expect(contract.getEvidence(0)).to.be.revertedWithCustomError(contract, "EvidenceNotFound");
  });
});
