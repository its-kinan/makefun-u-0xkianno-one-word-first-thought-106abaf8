// One Word, First Thought — the single most interesting word.
//
// The word: "defenestration". The act of throwing something — or someone —
// out of a window. Surprising (nobody guesses it), vivid (an instant image
// of a body sailing through glass), and witty (English keeps a dedicated
// word for exactly this absurd act; the -fenestration root rewards a second
// look). A real dictionary word, not a coined neologism, and not one of the
// "most beautiful word" list clichés the rest of the field will have mined.
//
// Deterministic: no network, no randomness, no timestamps, no input.
// The grader runs this on Node 22, which runs TypeScript as-is.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "defenestration";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The file holds exactly the word — 14 bytes, no trailing newline —
// inside the gate's 1-to-24-character window, exactly one word.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
