# GTA 6 Clipper — make.fun bounty entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/badboy0771/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/badboy0771/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 36-second vertical Short cut from Rockstar's official Grand Theft Auto VI
launch trailer, made for [make.fun](https://make.fun/bounty/gta6-clipper-01)'s `gta6-clipper-01` bounty ($500, top 20
videos by views). The clip opens on the trailer's best moment, then turns
to the viewer with make.fun's pitch.

## The moment

Lucia and Jason cruising Leonida in a red convertible, about 25 seconds into
the launch trailer: Lucia leaning on the passenger door, looking straight at
the camera, Jason driving beside her. It is the one shot in the trailer that
shows both protagonists together, faces clear, in bright daylight — instantly
recognisable to anyone who has waited for GTA 6, and it works as the very
first frame of a Short. From there the clip follows the trailer's own run of
action (the swamp heist, the club, the beach plane, the street explosion)
until it closes on the explosion at about 62 seconds.

## The pitch

On-screen text, in the lower safe area so YouTube's buttons never cover it:

- `GTA 6 IS HERE` (first seconds, over the hook)
- `Make clips like this with AI` / `and earn money on make.fun`
- `make.fun/bounty/gta6-clipper-01` (held on screen to the end)

## How the clip was made

The source is the official trailer
(`https://www.youtube.com/watch?v=rz1B4B2yBZY`), trimmed to 25.5–62.0 s
with ffmpeg, letterbox bars cropped out, converted to vertical 1080×1920
with a blurred fill behind the sharp 16:9 picture (so neither Lucia nor
Jason is ever cut off), text laid over with ffmpeg's drawtext, encoded
libx264 + AAC. The finished file is `clip.mp4` next to this repository —
it is deliberately not committed here; the repo holds code only.

## How to upload (for the channel owner)

1. Upload `clip.mp4` to YouTube as a **public** Short (under 60 seconds,
   vertical — it will be treated as a Short automatically).
2. Title: `GTA 6 IS HERE — Lucia & Jason Are Back #Shorts`
3. Description — paste exactly:

   ```
   GTA 6 IS HERE. Lucia & Jason cruising Leonida — the moment every GTA fan waited 13 years for.

   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

   Play code: makefun-crab-kernel-costume

   #GTA6 #GTA6Shorts #Shorts #ViceCity #RockstarGames
   ```

   The middle paragraph must stay word for word, and the play code must
   stay in the description (or the channel description) until results are
   out. Keep the video public until the bounty ends (23 Nov 2026, 08:00 WIB).
4. Copy the Short's address from Share, and put it in `VIDEO.json` in place
   of the placeholder, as `{"url": "https://www.youtube.com/shorts/<id>"}`.

## This repository

- `main.ts` — the entry program. It copies `VIDEO.json` from the repo root
  into `$MAKEFUN_OUTPUT_DIR` (default `/output`; repo root is
  `$MAKEFUN_BOT_DIR`, default `/bot`). Node 22, standard library only, no
  network, no clock, deterministic.
- `VIDEO.json` — the entry's video address (placeholder until the upload
  in step 4 above is done).
- `AGENT.md` — the bounty brief this entry was built from.
- `LICENSE` — MIT.

## Grader check

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and writes `out/VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=k699ajzx&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
