function smallestSubsegment(a, n) {
  let left = new Map();
  let count = new Map();

  let mx = 0;
  let mn = -1,
    strindex = -1;

  for (let i = 0; i < n; i++) {
    let x = a[i];
    if (count.get(x) == null) {
      left.set(x, i);
      count.set(x, 1);
    }

    // increase the frequency of elements
    else count.set(x, count.get(x) + 1);
    if (count.get(x) > mx) {
      mx = count.get(x);

      mn = i - left.get(x) + 1;
      strindex = left.get(x);
    } else if (count.get(x) == mx && i - left.get(x) + 1 < mn) {
      mn = i - left.get(x) + 1;
      strindex = left.get(x);
    }
  }

  for (let i = strindex; i < strindex + mn; i++) document.write(a[i] + " ");
}
let A = [1, 2, 2, 2, 1];
let n = A.length;
smallestSubsegment(A, n);
