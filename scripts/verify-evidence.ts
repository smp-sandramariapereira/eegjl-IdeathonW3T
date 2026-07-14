import { ethers } from "hardhat";
import { readEvidenceInput, sha256Bytes32 } from "./hash";

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;

  if (!contractAddress) {
    throw new Error("CONTRACT_ADDRESS is required");
  }

  const evidenceId = Number(process.env.EVIDENCE_ID ?? "0");
  const inputValue = process.env.EVIDENCE_INPUT ?? "examples/evidence.txt or direct text via EVIDENCE_INPUT";

  const contract = await ethers.getContractAt("LearningEvidence", contractAddress);
  const evidence = await contract.getEvidence(evidenceId);
  const recalculatedHash = sha256Bytes32(readEvidenceInput(inputValue));
  const status = recalculatedHash === evidence.evidenceHash ? "VALID" : "INVALID";

  console.log("Onchain evidence:");
  console.log(`  projectId: ${evidence.projectId}`);
  console.log(`  stage: ${evidence.stage}`);
  console.log(`  evidenceHash: ${evidence.evidenceHash}`);
  console.log(`  evidenceURI: ${evidence.evidenceURI}`);
  console.log(`  issuer: ${evidence.issuer}`);
  console.log(`  issuedAt: ${evidence.issuedAt}`);
  console.log(`Recalculated hash: ${recalculatedHash}`);
  console.log(`Result: ${status}`);
}

main().catch((error) => {
  console.error("Verify evidence failed:", error);
  process.exitCode = 1;
});