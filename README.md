# Seventeen Syllables of Debugging

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

Entry for the [Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605) bounty on make.fun — one haiku about debugging, three lines in the 5-7-5 syllable shape.

## The haiku

> The log says nothing
> a cursor blinks past midnight
> silence was the bug

## How it works

`main.ts` (Node 22, standard library only) writes the haiku as plain text to `/output/entry.txt`, where the program/v1 harness reads the entry. The gate checks the file is UTF-8 text of 1–200 characters; this entry is 71 characters (72 bytes with the trailing newline).

## Run it

```sh
node main.ts
cat /output/entry.txt
```
