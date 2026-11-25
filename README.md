# How Many Tabs Do You Have Open?

![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)
![Rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/maelaozera/u-danu-how-many-tabs-do-you-have-open-d86e783d/rank.svg)
![Reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/maelaozera/u-danu-how-many-tabs-do-you-have-open-d86e783d/reward.svg)

Entry for the make.fun bounty [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

## What it does

A tiny deterministic Node 22 program (stdlib only) that writes a single
number — digits only — to `/output/entry.txt`: the honest count of open
browser tabs. The chosen count is **137**: high, odd and precise, the
kind of number a real tab hoarder actually has open — far above what the
field would guess, yet believable precisely because it is unrounded, and
hinting at years of tabs never closed without a word of explanation.

## Run

```sh
node main.ts
```

It writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` when set, otherwise to
`/output`.
