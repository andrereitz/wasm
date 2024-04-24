let data = null;
let fibData = null;

onmessage = (e) => {
  const {action, factor} = e.data;
  
  if (action == 'payloadArray') {
    data = e.data.data
  }
  if (action == 'payloadFib') {
    fibData = e.data.data
  }
  if (action == 'add') {
    const title = `Add processing in Worker`;
    console.time(title)
    data.map(item => item + factor)
    console.timeEnd(title)

    return
  }
  if (action == 'multiply') {
    const title = `Multiply processing in Worker`;
    console.time(title)
    data.map(item => item * factor)
    console.timeEnd(title)

    return
  }
  if (action == 'divide') {
    const title = `Divide processing in Worker`;
    console.time(title)
    data.map(item => item / factor)
    console.timeEnd(title)

    return
  }
  if (action == 'subtract') {
    const title = `Subtract processing in Worker`;
    console.time(title)
    data.map(item => item - factor)
    console.timeEnd(title)

    return
  }
  if (action == 'fib') {
    const title = `Fibonacci processing in Worker`;
    console.time(title)
    const results = [];
  
    for(let i = 0; i < fibData.length; i++) {
      if (i <= 1) {
        results.push(fibData[i])
        continue;
      }
      results.push(results[i - 1] + results[i - 2])
    }
    console.timeEnd(title)

    return
  }
  if (action == 'done') {
    return postMessage('done');
  }
};
