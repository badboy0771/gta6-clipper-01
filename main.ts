// gta6-clipper-01 — make.fun entry program.
//
// What this does, in one sentence: it takes the VIDEO.json that sits next
// to this file in the repository and copies it into the output directory
// the grader reads, so the grader learns which YouTube Short is our entry.
//
// The two directories come from the environment, with the defaults the
// grader uses when they are not set:
//   MAKEFUN_BOT_DIR     — where this repository is checked out (default /bot)
//   MAKEFUN_OUTPUT_DIR  — where the result goes (default /output)
//
// Nothing else happens here on purpose. No network calls, no clock reads,
// no files outside the repository: the same input always writes the same
// bytes, which is what the grader's two runs expect. The video itself
// lives on YouTube, not in this repository, and VIDEO.json is the only
// thing that points at it.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
