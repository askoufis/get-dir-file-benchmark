# get-dir-file-benchmark

A comparison of different implementations to get the directory name and file name (without the `.css.*` extension) from a full file path.
See https://github.com/vanilla-extract-css/vanilla-extract/pull/1466 for more context.

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

> [!NOTE]
> The `customSplit4` function doesn't have tests in this repo because it handles some edge cases the other functions do not.
> It is tested in Vanilla Extract's test suite instead.

## Results

Benchmarks were run on a MacBook M1 Pro 16-inch, 2021, 32GB, macOS Sonoma 14.6.1.
Each benchmark was given 200ms to run.

```
┬─────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ Task Name                       │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
┼─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'originalRegex shortPath'       │ '232,544'    │ 4300.244232795731  │ '±0.07%' │ 46513   │
│ 'originalRegex longPath'        │ '1,002'      │ 997618.8407960596  │ '±0.16%' │ 201     │
│ 'originalRegex emojiPath'       │ '220,469'    │ 4535.7765001932785 │ '±0.92%' │ 44094   │
│ 'originalRegex loneSurrogates'  │ '233,049'    │ 4290.930122288548  │ '±0.22%' │ 46610   │
│ 'originalRegex shortWorstCase'  │ '9,458,671'  │ 105.72309546505653 │ '±1.08%' │ 1891735 │
│ 'originalRegex longWorstCase'   │ '4,710,188'  │ 212.30570635175894 │ '±0.60%' │ 942038  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'nonGreedyRegex shortPath'      │ '518,908'    │ 1927.1224489804115 │ '±0.16%' │ 103782  │
│ 'nonGreedyRegex longPath'       │ '4,036'      │ 247767.1757425748  │ '±0.06%' │ 808     │
│ 'nonGreedyRegex emojiPath'      │ '465,722'    │ 2147.203274465276  │ '±1.52%' │ 93145   │
│ 'nonGreedyRegex loneSurrogates' │ '509,151'    │ 1964.053686989542  │ '±0.34%' │ 101831  │
│ 'nonGreedyRegex shortWorstCase' │ '9,869,311'  │ 101.32418865882157 │ '±1.06%' │ 1973863 │
│ 'nonGreedyRegex longWorstCase'  │ '4,423,171'  │ 226.08214574453356 │ '±0.62%' │ 884635  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit1 shortPath'        │ '8,762,049'  │ 114.12854518710293 │ '±0.06%' │ 1752411 │
│ 'customSplit1 longPath'         │ '8,685,974'  │ 115.12812493762836 │ '±0.06%' │ 1737195 │
│ 'customSplit1 emojiPath'        │ '8,571,348'  │ 116.667757121009   │ '±0.92%' │ 1714270 │
│ 'customSplit1 loneSurrogates'   │ '8,666,446'  │ 115.38754795838881 │ '±0.06%' │ 1733290 │
│ 'customSplit1 shortWorstCase'   │ '8,110,618'  │ 123.29515499343422 │ '±1.40%' │ 1622124 │
│ 'customSplit1 longWorstCase'    │ '8,022,838'  │ 124.64416715313457 │ '±1.63%' │ 1604568 │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit2 shortPath'        │ '6,067,159'  │ 164.82177328440417 │ '±1.14%' │ 1213432 │
│ 'customSplit2 longPath'         │ '6,105,803'  │ 163.77860249405262 │ '±0.63%' │ 1221161 │
│ 'customSplit2 emojiPath'        │ '1,899,559'  │ 526.4377160049378  │ '±0.22%' │ 379913  │
│ 'customSplit2 loneSurrogates'   │ '2,720,145'  │ 367.6273477579918  │ '±0.17%' │ 544030  │
│ 'customSplit2 shortWorstCase'   │ '7,000,798'  │ 142.84084818928224 │ '±0.05%' │ 1400160 │
│ 'customSplit2 longWorstCase'    │ '779,547'    │ 1282.7960554141414 │ '±1.34%' │ 155910  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit3 shortPath'        │ '11,841,510' │ 84.44868456354928  │ '±0.06%' │ 2368303 │
│ 'customSplit3 longPath'         │ '11,853,456' │ 84.36357527695095  │ '±0.05%' │ 2370692 │
│ 'customSplit3 emojiPath'        │ '8,297,223'  │ 120.52224086987644 │ '±1.76%' │ 1659445 │
│ 'customSplit3 loneSurrogates'   │ '11,068,333' │ 90.34784002852372  │ '±0.09%' │ 2213667 │
│ 'customSplit3 shortWorstCase'   │ '12,146,472' │ 82.32842573773182  │ '±0.81%' │ 2429295 │
│ 'customSplit3 longWorstCase'    │ '2,536,301'  │ 394.27484865054265 │ '±0.51%' │ 507261  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'customSplit4 shortPath'        │ '13,446,824' │ 74.3669977855848   │ '±0.05%' │ 2689365 │
│ 'customSplit4 longPath'         │ '13,382,109' │ 74.72663466312403  │ '±0.05%' │ 2676422 │
│ 'customSplit4 emojiPath'        │ '9,460,165'  │ 105.70639639660314 │ '±1.98%' │ 1892034 │
│ 'customSplit4 loneSurrogates'   │ '12,472,552' │ 80.176050937209    │ '±0.07%' │ 2494511 │
│ 'customSplit4 shortWorstCase'   │ '13,495,387' │ 74.09939023562048  │ '±1.26%' │ 2699078 │
│ 'customSplit4 longWorstCase'    │ '3,077,158'  │ 324.9751312894109  │ '±0.77%' │ 615432  │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'withLruCache shortPath'        │ '23,327,593' │ 42.86768781734863  │ '±0.39%' │ 4665519 │
│ 'withLruCache longPath'         │ '22,860,263' │ 43.74402833864168  │ '±0.56%' │ 4572053 │
│ 'withLruCache emojiPath'        │ '22,755,576' │ 43.94527188494489  │ '±0.81%' │ 4551116 │
│ 'withLruCache loneSurrogates'   │ '23,054,117' │ 43.37619870134022  │ '±1.00%' │ 4610824 │
│ 'withLruCache shortWorstCase'   │ '22,586,928' │ 44.27339439299512  │ '±0.30%' │ 4517386 │
│ 'withLruCache longWorstCase'    │ '22,653,659' │ 44.14297822149291  │ '±0.40%' │ 4530732 │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'withMnemonist shortPath'       │ '22,746,753' │ 43.96231726208055  │ '±0.51%' │ 4549351 │
│ 'withMnemonist longPath'        │ '22,937,407' │ 43.59690653857242  │ '±0.47%' │ 4587482 │
│ 'withMnemonist emojiPath'       │ '22,838,147' │ 43.78638878379315  │ '±0.71%' │ 4567630 │
│ 'withMnemonist loneSurrogates'  │ '23,097,086' │ 43.29550454177481  │ '±0.99%' │ 4619418 │
│ 'withMnemonist shortWorstCase'  │ '23,119,246' │ 43.25400521211071  │ '±0.72%' │ 4623850 │
│ 'withMnemonist longWorstCase'   │ '23,060,896' │ 43.363449172405204 │ '±1.12%' │ 4612180 │
┴─────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
```
