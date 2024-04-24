# WASM vs Main Thread vs Web Worker

This simple projets does some tests with basic operations in JavaScript.

## Results of a random execution:

```
Array Size: 10.000.000 
Factor: 3450 
Fibonacci to: 1.000.000
```

| Test | ES6 JS | WASM | ES5 JS | Web Worker |
|---|---|---|---|---|
| Add | 65.11 | 61.74 | 40.40 | 76.58 |
| Multiply | 331.92 | 61.97 | 130.96 | 359.16 |
| Divide | 347.74 | 72.35 | 58.63 | 342.39 |
| Subtract | 74.73 | 56.67 | 40.38 | 92.77 |
| Fibonatti | 8.00 | 20.17 |  6.64 | 6.94 |

Results in ms.

### Best for each operation

| Operation | Technology |
|---|---|
| Add | ES5 JS |
| Multiply | WASM |
| Divide | ES5 JS |
| Subtract | ES5 JS |
| Fibonatti | ES5 JS |