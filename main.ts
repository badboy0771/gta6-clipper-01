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

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Validate VIDEO.json before copying: the gate refuses a malformed file
// or a url that is not a YouTube video address, so fail loudly here
// instead of handing the grader a file it will reject. The checked
// shapes are the gate's own: youtube.com/shorts/<id>,
// youtube.com/watch?v=<id> (www. or m.), or youtu.be/<id>, the id 11
// of [A-Za-z0-9_-].
const videoPath = join(botDir, "VIDEO.json");
const parsed = JSON.parse(readFileSync(videoPath, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("VIDEO.json must be an object with a string url");
}
const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}([?#].*)?$/;
if (!YOUTUBE_URL.test(parsed.url)) {
  throw new Error(`VIDEO.json url is not a YouTube video address: ${parsed.url}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoPath, join(outputDir, "VIDEO.json"));
