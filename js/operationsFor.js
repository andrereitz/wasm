export function addFor(data, factor) {
  const result = [];
  for(let i=0; i<data.length; i++) {
    result.push(data[i] + factor)
  }

  return result
}

export function multiplyFor(data, factor){
  const result = [];
  for(let i=0; i<data.length; i++) {
    result.push(data[i] * factor)
  }

  return result
}

export function divideFor(data, factor){
  const result = [];
  for(let i=0; i<data.length; i++) {
    result.push(data[i] / factor)
  }

  return result
}

export function subtractFor(data, factor){
  const result = [];
  for(let i=0; i<data.length; i++) {
    result.push(data[i] - factor)
  }

  return result
}

export function fibonacciFor(data) {
  const results = [];

  for(let i = 0; i < data.length; i++) {
    if (i <= 1) {
      results.push(data[i])
      continue;
    }

    results.push(results[i - 1] + results[i - 2])
  }
}