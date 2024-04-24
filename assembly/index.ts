const TEST_FACTOR = 345;

export function addArray(array: Int32Array): Int32Array {
  return array.map((item: i32) => item + TEST_FACTOR);
}

export function multiplyArray(array: Int32Array): Int32Array {
  return array.map((item: i32) => item * TEST_FACTOR);
}

export function divideArray(array: Float64Array): Float64Array {
  return array.map((item: number) => item / TEST_FACTOR);
}

export function subtractArray(array: Float64Array): Float64Array {
  return array.map((item: number) => item - TEST_FACTOR);
}

export function fibonacciArray(array: Int32Array): Int32Array {
  let results = new Int32Array(array.length);

  for(let i = 0; i < array.length; i++) {
    if (i <= 1) {
      results[i] = array[i]
      continue;
    }
    results[i] = results[i - 1] + results[i - 2]
  }

  return results
}
