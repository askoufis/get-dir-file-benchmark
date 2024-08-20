# get-dir-file-benchmark

A comparison of different implementations to get the directory name and file name (without the `.css.*` extension) from a full file path.

## Instructions

Ensure your Node.js and PNPM versions match those defined in `package.json`.

Run benchmarks:

```sh
pnpm run benchmark
```

Run tests:

```sh
pnpm run test
```

> [!NOTE]: `customSplit4` doesn't have tests in this repo because it handles some edge cases the other functions do not. It is tested in Vanilla Extract.

## Results

Benchmarks were run on a MacBook M1 Pro 16-inch, 2021, 32GB, macOS Sonoma 14.6.1.
Each benchmark was given 200ms to run.

```
┌─────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ Task Name                       │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'originalRegex shortPath'       │ '222,889'    │ 4486.530956974614  │ '±0.22%' │ 44578   │
│ 'originalRegex longPath'        │ '963'        │ 1037835.5181347037 │ '±0.44%' │ 193     │
│ 'originalRegex emojiPath'       │ '211,382'    │ 4730.753459324889  │ '±0.22%' │ 42277   │
│ 'originalRegex loneSurrogates'  │ '221,072'    │ 4523.400361867694  │ '±0.34%' │ 44215   │
│ 'originalRegex shortWorstCase'  │ '8,359,471'  │ 119.624780862668   │ '±1.29%' │ 1671895 │
│ 'originalRegex longWorstCase'   │ '4,445,834'  │ 224.9296273933304  │ '±0.96%' │ 889167  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'nonGreedyRegex shortPath'      │ '494,066'    │ 2024.0197745234987 │ '±0.20%' │ 98814   │
│ 'nonGreedyRegex longPath'       │ '3,872'      │ 258217.93935483816 │ '±0.32%' │ 775     │
│ 'nonGreedyRegex emojiPath'      │ '432,691'    │ 2311.112908630498  │ '±0.50%' │ 86539   │
│ 'nonGreedyRegex loneSurrogates' │ '478,781'    │ 2088.6366740825306 │ '±1.64%' │ 95757   │
│ 'nonGreedyRegex shortWorstCase' │ '8,677,604'  │ 115.23918235502758 │ '±1.40%' │ 1735521 │
│ 'nonGreedyRegex longWorstCase'  │ '4,014,765'  │ 249.0805467758173  │ '±1.32%' │ 802962  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit1 shortPath'        │ '7,892,657'  │ 126.70003648985909 │ '±0.21%' │ 1578532 │
│ 'customSplit1 longPath'         │ '7,911,972'  │ 126.3907248183099  │ '±0.19%' │ 1582395 │
│ 'customSplit1 emojiPath'        │ '7,621,177'  │ 131.2133227233814  │ '±1.49%' │ 1524268 │
│ 'customSplit1 loneSurrogates'   │ '7,932,487'  │ 126.06385321661992 │ '±0.24%' │ 1586498 │
│ 'customSplit1 shortWorstCase'   │ '7,272,122'  │ 137.5114426667784  │ '±1.92%' │ 1454425 │
│ 'customSplit1 longWorstCase'    │ '7,402,381'  │ 135.0916503309908  │ '±2.22%' │ 1482406 │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit2 shortPath'        │ '5,528,542'  │ 180.879507175895   │ '±1.11%' │ 1105709 │
│ 'customSplit2 longPath'         │ '5,507,881'  │ 181.55800366201368 │ '±0.99%' │ 1101577 │
│ 'customSplit2 emojiPath'        │ '1,824,657'  │ 548.0480281258673  │ '±0.20%' │ 364932  │
│ 'customSplit2 loneSurrogates'   │ '2,520,876'  │ 396.6874008280863  │ '±0.32%' │ 504176  │
│ 'customSplit2 shortWorstCase'   │ '6,335,163'  │ 157.8491294221514  │ '±0.32%' │ 1267033 │
│ 'customSplit2 longWorstCase'    │ '749,018'    │ 1335.080064618619  │ '±1.98%' │ 149804  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit3 shortPath'        │ '9,417,140'  │ 106.18934294848135 │ '±0.19%' │ 1883429 │
│ 'customSplit3 longPath'         │ '9,377,497'  │ 106.6382575319415  │ '±0.20%' │ 1875500 │
│ 'customSplit3 emojiPath'        │ '6,874,001'  │ 145.4756833904221  │ '±1.91%' │ 1374801 │
│ 'customSplit3 loneSurrogates'   │ '8,885,938'  │ 112.53735282980278 │ '±0.33%' │ 1777188 │
│ 'customSplit3 shortWorstCase'   │ '9,393,014'  │ 106.46209550316028 │ '±1.28%' │ 1878603 │
│ 'customSplit3 longWorstCase'    │ '2,020,028'  │ 495.0426404553966  │ '±0.73%' │ 404006  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit4 shortPath'        │ '10,111,933' │ 98.8930506373828   │ '±0.21%' │ 2022387 │
│ 'customSplit4 longPath'         │ '10,148,667' │ 98.53510410662426  │ '±0.20%' │ 2029734 │
│ 'customSplit4 emojiPath'        │ '7,489,692'  │ 133.51683680112546 │ '±1.26%' │ 1497939 │
│ 'customSplit4 loneSurrogates'   │ '9,607,004'  │ 104.09072333608378 │ '±0.20%' │ 1921402 │
│ 'customSplit4 shortWorstCase'   │ '9,885,098'  │ 101.16237165172805 │ '±1.96%' │ 1977020 │
│ 'customSplit4 longWorstCase'    │ '2,358,641'  │ 423.9729018145984  │ '±0.93%' │ 471729  │
└─────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
```
