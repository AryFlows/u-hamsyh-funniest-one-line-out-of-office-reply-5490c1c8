import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office until Monday. My inbox is unsupervised, so please keep your email short - it bites.";

if (ENTRY.length < 1 || ENTRY.length > 160 || !ENTRY.trim()) {
  throw new Error(`entry violates the 1-160 char gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
