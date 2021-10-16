class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

function top3Repeated(arr, n) {
  // There should be atleast two elements
  if (n < 3) {
    document.write("Invalid Input");
    return;
  }

  arr.sort((a, b) => a - b);
  let freq = new Map();
  for (let i = 0; i < n; i++)
    if (freq.has(arr[i])) freq.set(arr[i], 1 + freq.get(arr[i]));
    else freq.set(arr[i], 1);

  let x = new Pair();
  let y = new Pair();
  let z = new Pair();
  x.first = y.first = z.first = 0;

  for (let curr of freq) {
    if (parseInt(curr[1]) > x.first) {
      // Update second and third largest
      z.first = y.first;
      z.second = y.second;
      y.first = x.first;
      y.second = x.second;

      x.first = parseInt(curr[1]);
      x.second = parseInt(curr[0]);
    } else if (parseInt(curr[1]) > y.first) {
      // Modify values of third largest
      z.first = y.first;
      z.second = y.second;

      // Modify values of second largest
      y.first = parseInt(curr[1]);
      y.second = parseInt(curr[0]);
    } else if (parseInt(curr[1]) > z.first) {
      // Modify values of z Number
      z.first = parseInt(curr[1]);
      z.second = parseInt(curr[0]);
    }
  }

  document.write(
    "Three largest elements are " + x.second + " " + y.second + " " + z.second
  );
}

let arr = [3, 4, 2, 3, 16, 3, 15, 16, 15, 15, 16, 2, 3];
let n = arr.length;
top3Repeated(arr, n);
