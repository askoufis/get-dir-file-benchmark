# get-dir-file-benchmark

A comparison of different implementations to get the directory name and file name (without the `.css.*` extension) from a full file path.

## Instructions

Clone the repo, install the dependencies, and run the benchmark:

```sh
git clone git@github.com:askoufis/get-dir-file-benchmark.git \
 && cd get-dir-file-benchmark \
 && pnpm install \
 && pnpm run benchmark
```

Run tests:

```sh
pnpm run test
```

## Results

Benchmarks were run on a MacBook M1 Pro 16-inch, 2021, 32GB, macOS Sonoma 14.6.1

| Name                          | ops/sec      | Average Time (ns)  | Margin   | Samples |
| ----------------------------- | ------------ | ------------------ | -------- | ------- |
| 'original regex short path'   | '231,480'    | 4320.010303042385  | '±0.08%' | 46297   |
| 'original regex long path'    | '1,003'      | 996421.3930348475  | '±0.10%' | 201     |
| 'original regex emoji path'   | '220,701'    | 4531.01307174723   | '±0.20%' | 44141   |
| 'non-greedy regex short path' | '521,380'    | 1917.9833903926774 | '±0.19%' | 104277  |
| 'non-greedy regex long path'  | '3,990'      | 250607.37296621228 | '±0.08%' | 799     |
| 'non-greedy regex emoji path' | '464,851'    | 2151.2247905259733 | '±1.80%' | 92971   |
| 'customSplit1 short path'     | '5,541,457'  | 180.45794971007723 | '±0.69%' | 1108292 |
| 'customSplit1 long path'      | '2,978,957'  | 335.6879162525056  | '±0.61%' | 595792  |
| 'customSplit1 emoji path'     | '5,590,501'  | 178.87481900099067 | '±0.24%' | 1118101 |
| 'customSplit2 long path'      | '6,744,944'  | 148.25919336675912 | '±0.77%' | 1348989 |
| 'customSplit2 short path'     | '6,793,609'  | 147.19716616014043 | '±0.27%' | 1358722 |
| 'customSplit2 emoji path'     | '1,770,922'  | 564.6773776407978  | '±1.13%' | 354185  |
| 'customSplit3 short path'     | '14,453,068' | 69.1894604399322   | '±0.28%' | 2890614 |
| 'customSplit3 long path'      | '14,390,774' | 69.48896480943264  | '±0.31%' | 2878156 |
| 'customSplit3 emoji path'     | '7,285,826'  | 137.25278588681317 | '±0.26%' | 1457166 |
