// Time complexity is O(n)
// Space is O(n)
const countDistictSubarray = (a, n) => {
  let set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(a[i]);
  }
  let k = set.size;
  console.log(k);

  let hm = new Map();

  let ans = 0,
    left = 0,
    right = 0,
    window = 0;
  for (left = 0; left < n; left++) {
    while (right < n && window < k) {
      if (hm.has(a[right])) {
        hm.set(a[right], hm.get(a[right]) + 1);
      } else {
        hm.set(a[right], 1);
      }

      if (hm.get(a[right]) == 1) {
        window++;
      }
      right++;
    }

    if (window == k) {
      ans += n - right + 1;
    }

    if (hm.has(a[left])) {
      hm.set(a[left], hm.get(a[left]) - 1);
    }

    if (hm.get(a[left]) == 0) {
      window--;
    }
  }
  return ans;
};
let arr = [2, 4, 4, 2, 4];
document.write(
  "total subarrays with distict elements : ",
  countDistictSubarray(arr, arr.length)
);
