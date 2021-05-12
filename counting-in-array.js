let start;
let end;
let step;

function range(start,end,step) {
  let valuesToPrint = [];
  if (step > 0 && end > start && (start !== undefined || end !== undefined || step !== undefined)) { 
    for (let i = start; i <= end; i += step) {
      valuesToPrint.push(i);

    }
    return valuesToPrint; 
  } else {
    return valuesToPrint;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(5,1));