// Time complexity is O(n) and additional space is O(n)
function countSubArrays(a, n) {
  a = a.map(item => {
    if (item == 0) return -1;
    return item;
  });

  let sum = 0,
    count = 0;
  let hm = new Map();

  for (let i = 0; i < n; i++) {
    sum += a[i];
    if (sum == 0) {
      count++;
      document.write("<br/>", "{", 0, ", ", i, "}");
    }
    if (hm.has(sum)) {
      hm.get(sum).forEach(index => {
        document.write("<br/>", "{", index + 1, ", ", i, "}");
        count++;
      });

      hm.set(sum, [...hm.get(sum), i]);
    } else {
      hm.set(sum, [i]);
    }
  }

  document.write("<br/>There are ", count, " subarrays with equal 1s and 0s");
}
let a = [1, 0, 0, 1, 0, 1, 1];
countSubArrays(a, a.length);
