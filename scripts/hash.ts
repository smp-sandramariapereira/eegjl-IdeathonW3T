import { createHash } from "crypto";
import { readFileSync, existsSync } from "fs";

export function readEvidenceInput(inputPathOrText: string): Buffer {
  if (existsSync(inputPathOrText)) {
    return readFileSync(inputPathOrText);
  }

  return Buffer.from(inputPathOrText, "utf8");
}

export function sha256Bytes32(input: Buffer): string {
  return `0x${createHash("sha256").update(input).digest("hex")}`;
}