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
┌─────────────────────────────────┬──────────────┬────────────────────┬──────────┬─────────┐
│ Task Name                       │ ops/sec      │ Average Time (ns)  │ Margin   │ Samples │
├─────────────────────────────────┼──────────────┼────────────────────┼──────────┼─────────┤
│ 'originalRegex shortPath'       │ '221,495'    │ 4514.761670429218  │ '±0.37%' │ 44300   │
│ 'originalRegex longPath'        │ '963'        │ 1037445.424870469  │ '±0.45%' │ 193     │
│ 'originalRegex emojiPath'       │ '211,722'    │ 4723.174093752827  │ '±0.33%' │ 42345   │
│ 'originalRegex loneSurrogates'  │ '223,487'    │ 4474.5135129076725 │ '±0.30%' │ 44698   │
│ 'originalRegex worstCase'       │ '4,395,799'  │ 227.48988238786498 │ '±0.81%' │ 879160  │
│ 'nonGreedyRegex shortPath'      │ '495,592'    │ 2017.7853691026132 │ '±0.22%' │ 99119   │
│ 'nonGreedyRegex longPath'       │ '3,871'      │ 258311.52774194407 │ '±0.31%' │ 775     │
│ 'nonGreedyRegex emojiPath'      │ '446,731'    │ 2238.4809562695887 │ '±0.33%' │ 89347   │
│ 'nonGreedyRegex loneSurrogates' │ '494,015'    │ 2024.227915873304  │ '±1.44%' │ 98804   │
│ 'nonGreedyRegex worstCase'      │ '4,169,137'  │ 239.85777882223042 │ '±0.90%' │ 833828  │
│ 'customSplit1 shortPath'        │ '5,118,422'  │ 195.37269667899417 │ '±1.14%' │ 1023685 │
│ 'customSplit1 longPath'         │ '2,856,319'  │ 350.10093056764157 │ '±0.20%' │ 571264  │
│ 'customSplit1 emojiPath'        │ '5,084,616'  │ 196.67167654609844 │ '±0.98%' │ 1016924 │
│ 'customSplit1 loneSurrogates'   │ '5,096,661'  │ 196.20688332524978 │ '±1.26%' │ 1019333 │
│ 'customSplit1 worstCase'        │ '4,780,978'  │ 209.16218536811957 │ '±0.29%' │ 956196  │
│ 'customSplit2 shortPath'        │ '5,757,792'  │ 173.6776639320139  │ '±1.10%' │ 1151559 │
│ 'customSplit2 longPath'         │ '5,758,389'  │ 173.65965313195701 │ '±1.11%' │ 1151678 │
│ 'customSplit2 emojiPath'        │ '1,835,798'  │ 544.7220421613067  │ '±0.33%' │ 367160  │
│ 'customSplit2 loneSurrogates'   │ '2,569,676'  │ 389.153972479127   │ '±0.28%' │ 513936  │
│ 'customSplit2 worstCase'        │ '730,222'    │ 1369.445807798302  │ '±1.57%' │ 146045  │
│ 'customSplit3 shortPath'        │ '10,678,087' │ 93.64972855671905  │ '±0.19%' │ 2135618 │
│ 'customSplit3 longPath'         │ '10,538,386' │ 94.89118926134688  │ '±0.24%' │ 2107678 │
│ 'customSplit3 emojiPath'        │ '7,350,797'  │ 136.0396569076506  │ '±2.28%' │ 1470160 │
│ 'customSplit3 loneSurrogates'   │ '9,859,772'  │ 101.42221653091804 │ '±1.10%' │ 1971955 │
│ 'customSplit3 worstCase'        │ '2,079,226'  │ 480.9480480758741  │ '±0.72%' │ 415846  │
└─────────────────────────────────┴──────────────┴────────────────────┴──────────┴─────────┘
```
