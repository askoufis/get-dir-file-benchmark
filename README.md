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

## Results

Benchmarks were run on a MacBook M1 Pro 16-inch, 2021, 32GB, macOS Sonoma 14.6.1.
Each benchmark was given 200ms to run.

```
┌────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ Name                       │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
├────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'originalRegex shortPath'  │ '223,350'    │ 4477.268362024812  │ '±0.21%' │ 44671   │
│ 'originalRegex longPath'   │ '965'        │ 1035827.9536082366 │ '±0.42%' │ 194     │
│ 'originalRegex emojiPath'  │ '211,506'    │ 4727.98335775975   │ '±1.10%' │ 42302   │
│ 'originalRegex worstCase'  │ '4,434,374'  │ 225.51093446091227 │ '±0.80%' │ 886875  │
│ 'nonGreedyRegex shortPath' │ '500,798'    │ 1996.8112819488958 │ '±0.32%' │ 100160  │
│ 'nonGreedyRegex longPath'  │ '3,611'      │ 276882.4218533727  │ '±0.38%' │ 723     │
│ 'nonGreedyRegex emojiPath' │ '448,325'    │ 2230.5215577793474 │ '±0.32%' │ 89666   │
│ 'nonGreedyRegex worstCase' │ '4,159,884'  │ 240.39131250052927 │ '±1.53%' │ 831977  │
│ 'customSplit1 shortPath'   │ '5,222,592'  │ 191.47580273808808 │ '±0.96%' │ 1044519 │
│ 'customSplit1 longPath'    │ '2,903,685'  │ 344.3898728855609  │ '±0.18%' │ 580738  │
│ 'customSplit1 emojiPath'   │ '5,134,574'  │ 194.75808806023952 │ '±1.17%' │ 1026915 │
│ 'customSplit1 worstCase'   │ '4,689,681'  │ 213.23409211831566 │ '±0.36%' │ 937947  │
│ 'customSplit2 shortPath'   │ '5,990,024'  │ 166.94423061712888 │ '±1.07%' │ 1198005 │
│ 'customSplit2 longPath'    │ '5,923,150'  │ 168.8290623826531  │ '±1.27%' │ 1184631 │
│ 'customSplit2 emojiPath'   │ '1,684,757'  │ 593.5573909638365  │ '±1.61%' │ 336952  │
│ 'customSplit2 worstCase'   │ '721,509'    │ 1385.983319706194  │ '±1.96%' │ 144302  │
│ 'customSplit3 shortPath'   │ '10,905,253' │ 91.69891946401131  │ '±0.23%' │ 2181051 │
│ 'customSplit3 longPath'    │ '10,827,852' │ 92.35442060965302  │ '±0.19%' │ 2165571 │
│ 'customSplit3 emojiPath'   │ '6,199,148'  │ 161.31248316296205 │ '±1.57%' │ 1239830 │
│ 'customSplit3 worstCase'   │ '2,088,806'  │ 478.7423676630173  │ '±0.51%' │ 417762  │
└────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
```
