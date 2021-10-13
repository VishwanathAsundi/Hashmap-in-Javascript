// O(n) & O(n) time & space complexity
function symmetricPairs(arr, n) {
  let hm = new Map();

  for (let i = 0; i < n; i++) {
    if (hm.get(arr[i][1]) == arr[i][0]) {
      document.write("{", arr[i][1], ", ", arr[i][0], "} ");
    } else {
      hm.set(arr[i][0], arr[i][1]);
    }
  }
  return -1;
}
let arr = [
  [11, 20],
  [30, 40],
  [5, 10],
  [40, 30],
  [10, 5]
];
symmetricPairs(arr, arr.length);
