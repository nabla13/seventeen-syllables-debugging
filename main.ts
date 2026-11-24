import { mkdirSync, writeFileSync } from "node:fs";

// Seventeen Syllables of Debugging — one haiku, three lines, 5-7-5.
// The program writes the haiku as plain text to /output/entry.txt,
// exactly where the program/v1 harness reads the entry from.
const haiku = [
  "The log says nothing",
  "a cursor blinks past midnight",
  "silence was the bug",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
