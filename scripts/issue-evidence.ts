import { ethers } from "hardhat";
import { readEvidenceInput, sha256Bytes32 } from "./hash";

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;

  if (!contractAddress) {
    throw new Error("CONTRACT_ADDRESS is required");
  }

  const inputValue = process.env.EVIDENCE_INPUT ?? "examples/evidence.txt or direct text via EVIDENCE_INPUT";
  const projectId = process.env.PROJECT_ID ?? "biblioteca-digital-gjl";
  const stage = Number(process.env.STAGE ?? "5");
  const evidenceURI = process.env.EVIDENCE_URI ?? "https://github.com/example/project/commit/abc123";

  const evidenceBytes = readEvidenceInput(inputValue);
  const evidenceHash = sha256Bytes32(evidenceBytes);

  const contract = await ethers.getContractAt("LearningEvidence", contractAddress);
  const tx = await contract.issueEvidence(projectId, stage, evidenceHash, evidenceURI);
  const receipt = await tx.wait();

  const event = receipt?.logs
    .map((log) => {
      try {
        return contract.interface.parseLog(log);
      } catch {
        return null;
      }
    })
    .find((parsed) => parsed?.name === "EvidenceIssued");

  const evidenceId = event?.args?.evidenceId?.toString() ?? "unknown";

  console.log(`Transaction hash: ${tx.hash}`);
  console.log(`Evidence ID: ${evidenceId}`);
  console.log(`Evidence hash: ${evidenceHash}`);
  console.log(`Evidence URI: ${evidenceURI}`);
  console.log(`Block number: ${receipt?.blockNumber ?? "unknown"}`);
  console.log("Hash algorithm: SHA-256 over UTF-8 bytes of a local file or direct text input.");
}

main().catch((error) => {
  console.error("Issue evidence failed:", error);
  process.exitCode = 1;
});