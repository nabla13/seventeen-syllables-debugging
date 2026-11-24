import { mkdirSync, writeFileSync } from "node:fs";

// Seventeen Syllables of Debugging — one haiku, three lines, 5-7-5.
// The program writes the haiku as plain text to /output/entry.txt,
// exactly where the program/v1 harness reads the entry from.
const haiku = [
  "The log says nothing",
  "a cursor blinks past midnight",
  "silence was the bug",
].join("\n") + "\n";

// The gate is strict: the entry must be exactly three lines and at
// most 200 characters. Refuse to write anything that is not.
const lines = haiku.split("\n").filter((line) => line.length > 0);
if (lines.length !== 3) {
  console.error(`haiku must be exactly 3 lines, got ${lines.length}`);
  process.exit(1);
}
if (haiku.length > 200) {
  console.error(`haiku must be at most 200 characters, got ${haiku.length}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
