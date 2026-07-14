import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const network = await ethers.provider.getNetwork();
  const factory = await ethers.getContractFactory("LearningEvidence");
  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log(`Network: ${network.name} (${network.chainId.toString()})`);
  console.log(`Deployer: ${await deployer.getAddress()}`);
  console.log(`Contract: ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});