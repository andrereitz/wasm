export function add(data, factor) {
  return data.map(item => item + factor)
}

export function multiply(data, factor){
  return data.map(item => item * factor)
}

export function divide(data, factor){
  return data.map(item => item / factor)
}

export function subtract(data, factor){
  return data.map(item => item - factor)
}

export function fibonacci(data) {
  return data.map((item, index) => {
    if(index <= 1) {
      return item
    }

    return data[index-1] + data[index-2]
  })
}