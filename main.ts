// How Many Tabs Do You Have Open? — entry program.
//
// The competition asks for one number, digits only: the honest count of
// open browser tabs. The sealed gate requires /output/entry.txt to be
// UTF-8 text of 1 to 5 characters, not only white space. The judge then
// compares two counts at a time and picks the more surprising one,
// weighing, most important first:
//   1. it reads as a real count of open browser tabs,
//   2. it is exactly one number in digits, no words or punctuation,
//   3. it is surprising, far higher, far lower or stranger than the
//      field would guess,
//   4. it is believable as an honest answer, not an absurd figure
//      picked to shock,
//   5. it hints at a life behind it, without a word of explanation.
// Size for its own sake does not count.
//
// Candidates considered (in my own words):
//   "1"    — extreme minimalist. Surprising in the low direction, but
//            too trivial: it hints at almost no life beyond minimalism,
//            and a single tab reads more like a fresh browser than a
//            confession.
//   "0"    — strange, but risks failing the first criterion: zero open
//            tabs reads as "no browser open at all", not as a count of
//            tabs someone has open.
//   "42"   — the meme answer to everything. It reads as picked for the
//            joke, not counted honestly, so it loses on believability.
//   "137"  — high, odd and precise. A real hoarder's count is almost
//            never a round number; 137 looks counted, not chosen. It is
//            far above what the field would guess (most people sit at
//            5-30 tabs), yet still a number a real person could have
//            open right now. It hints at a whole life: years of tabs
//            never closed, articles saved "to read later", a browser
//            that has become a second memory.
//   "1000" — huge, but round. A round thousand screams "picked to
//            shock", and the brief says size for its own sake does not
//            count; it loses on believability to any precise count.
//   "64"   — a power of two. Nerdy and tidy, which makes it read as
//            chosen rather than counted; a real count would not land
//            on such a clean number.
//
// Selection: "137". It is the candidate that best satisfies the brief
// in order — a real, single, digits-only count; surprising (far above
// the field's guess); believable precisely because it is odd and
// unrounded; and it hints at a tab-hoarding life without a word of
// explanation. Round numbers and meme numbers lose to it on criteria
// 4 and 5, and the low numbers lose to it on criterion 3.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CHOSEN_COUNT = "137";

// The sealed gate requires 1 to 5 characters, UTF-8 text, not only
// white space, and the brief requires digits only. Fail loudly rather
// than writing an entry the gate would refuse.
if (!/^[0-9]{1,5}$/.test(CHOSEN_COUNT)) {
  throw new Error(`Chosen count ${JSON.stringify(CHOSEN_COUNT)} fails the gate`);
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const entryPath = join(outputDir, "entry.txt");
  writeFileSync(entryPath, CHOSEN_COUNT, "utf8");
}

main();
