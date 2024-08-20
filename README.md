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

> [!NOTE]: `customSplit4` doesn't have tests in this repo because it handles some edge cases the other functions do not.
> It is tested in Vanilla Extract's test suite instead.

## Results

Benchmarks were run on a MacBook M1 Pro 16-inch, 2021, 32GB, macOS Sonoma 14.6.1.
Each benchmark was given 200ms to run.

```
┌─────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ Task Name                       │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'originalRegex shortPath'       │ '223,780'    │ 4468.6670911819665 │ '±0.21%' │ 44757   │
│ 'originalRegex longPath'        │ '959'        │ 1041961.322916663  │ '±0.45%' │ 192     │
│ 'originalRegex emojiPath'       │ '211,591'    │ 4726.079160662154  │ '±0.97%' │ 42319   │
│ 'originalRegex loneSurrogates'  │ '223,121'    │ 4481.863036417766  │ '±0.22%' │ 44625   │
│ 'originalRegex shortWorstCase'  │ '8,753,737'  │ 114.23691245116692 │ '±1.10%' │ 1750748 │
│ 'originalRegex longWorstCase'   │ '4,418,431'  │ 226.32465685606218 │ '±0.93%' │ 883961  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'nonGreedyRegex shortPath'      │ '497,219'    │ 2011.1833494241948 │ '±0.20%' │ 99444   │
│ 'nonGreedyRegex longPath'       │ '3,857'      │ 259202.8575129615  │ '±0.34%' │ 772     │
│ 'nonGreedyRegex emojiPath'      │ '434,532'    │ 2301.322862369584  │ '±0.31%' │ 86907   │
│ 'nonGreedyRegex loneSurrogates' │ '483,732'    │ 2067.2568348380823 │ '±0.41%' │ 96747   │
│ 'nonGreedyRegex shortWorstCase' │ '9,267,102'  │ 107.90859159170247 │ '±1.26%' │ 1853440 │
│ 'nonGreedyRegex longWorstCase'  │ '4,173,960'  │ 239.58063735572227 │ '±1.03%' │ 834793  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit1 shortPath'        │ '8,285,540'  │ 120.6921892286453  │ '±0.21%' │ 1657109 │
│ 'customSplit1 longPath'         │ '8,273,807'  │ 120.86334519788561 │ '±0.21%' │ 1654790 │
│ 'customSplit1 emojiPath'        │ '7,734,871'  │ 129.2846270951292  │ '±2.24%' │ 1546975 │
│ 'customSplit1 loneSurrogates'   │ '8,144,681'  │ 122.77951080977948 │ '±0.21%' │ 1628937 │
│ 'customSplit1 shortWorstCase'   │ '7,610,708'  │ 131.393819367668   │ '±1.65%' │ 1522142 │
│ 'customSplit1 longWorstCase'    │ '7,776,682'  │ 128.5895429738938  │ '±1.94%' │ 1555337 │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit2 shortPath'        │ '5,890,930'  │ 169.75246968488892 │ '±1.11%' │ 1178187 │
│ 'customSplit2 longPath'         │ '5,907,656'  │ 169.27186144749894 │ '±1.24%' │ 1181532 │
│ 'customSplit2 emojiPath'        │ '1,869,698'  │ 534.845673102299   │ '±0.38%' │ 373940  │
│ 'customSplit2 loneSurrogates'   │ '2,609,727'  │ 383.1818310709946  │ '±0.40%' │ 521946  │
│ 'customSplit2 shortWorstCase'   │ '6,867,613'  │ 145.6109843084241  │ '±0.22%' │ 1373523 │
│ 'customSplit2 longWorstCase'    │ '744,369'    │ 1343.4192068473349 │ '±2.32%' │ 148874  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit3 shortPath'        │ '11,464,087' │ 87.22892309901842  │ '±0.19%' │ 2292818 │
│ 'customSplit3 longPath'         │ '11,343,824' │ 88.15369330796598  │ '±0.19%' │ 2268765 │
│ 'customSplit3 emojiPath'        │ '7,859,318'  │ 127.23748874005459 │ '±1.87%' │ 1571864 │
│ 'customSplit3 loneSurrogates'   │ '10,429,084' │ 95.88569754599575  │ '±0.30%' │ 2085817 │
│ 'customSplit3 shortWorstCase'   │ '11,254,097' │ 88.85652873166032  │ '±1.52%' │ 2250820 │
│ 'customSplit3 longWorstCase'    │ '2,389,244'  │ 418.54235543388273 │ '±1.14%' │ 477849  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit4 shortPath'        │ '12,535,244' │ 79.77506622443484  │ '±0.20%' │ 2507049 │
│ 'customSplit4 longPath'         │ '12,446,844' │ 80.34164547652637  │ '±0.22%' │ 2489370 │
│ 'customSplit4 emojiPath'        │ '8,393,999'  │ 119.13272158743979 │ '±3.39%' │ 1678800 │
│ 'customSplit4 loneSurrogates'   │ '11,860,581' │ 84.31289645351727  │ '±0.20%' │ 2372117 │
│ 'customSplit4 shortWorstCase'   │ '11,910,105' │ 83.96231520903211  │ '±2.29%' │ 2382022 │
│ 'customSplit4 longWorstCase'    │ '2,840,267'  │ 352.0794748380534  │ '±1.55%' │ 568054  │
└─────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
```
