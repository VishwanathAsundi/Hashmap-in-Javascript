function findSubarraySum(arr, n, sum) {
  let prevSum = new Map();
  let res = 0;

  // Sum of elements so far.
  let currsum = 0;
  for (let i = 0; i < n; i++) {
    currsum += arr[i];
    if (currsum == sum) res++;

    if (prevSum.has(currsum - sum)) res += prevSum.get(currsum - sum);

    let count = prevSum.get(currsum);
    if (count == null) prevSum.set(currsum, 1);
    else prevSum.set(currsum, count + 1);
  }
  return res;
}

let arr = [10, 2, -2, -20, 10];
let sum = -10;
let n = arr.length;
document.write(findSubarraySum(arr, n, sum));
