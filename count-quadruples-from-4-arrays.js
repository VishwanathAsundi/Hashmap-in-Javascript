// Time complexity of this approach is O(n^2)+O(n^2)=O(n^2)
// Additional space O(n^2)

function countQuadruples(a, b, c, d, n, sum) {
  let hm = new Map();
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let s = a[i] + b[j];
      if (hm.has(s)) {
        hm.set(s, hm.get(s) + 1);
      } else {
        hm.set(s, 1);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let s = c[i] + d[j];

      if (hm.has(sum - s)) {
        count += hm.get(sum - s);
      }
    }
  }
  return count;
}

let arr1 = [1, 4, 5, 6];
let arr2 = [2, 3, 7, 8];
let arr3 = [1, 4, 6, 10];
let arr4 = [2, 4, 7, 8];
let n = arr1.length;
let x = 30;
document.write("Count = " + countQuadruples(arr1, arr2, arr3, arr4, n, x));
