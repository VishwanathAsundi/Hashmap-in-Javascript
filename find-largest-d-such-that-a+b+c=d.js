// Time complexity is O(n^2)
// Space is O(n)
function findFourElements(a, n) {
  let hm = new Map();

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      hm.set(a[i] + a[j], [i, j]);
    }
  }

  let d = Number.MIN_VALUE;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = Math.abs(a[i] - a[j]);
      //   console.log(diff, a[i], a[j]);
      if (hm.has(diff)) {
        let indexes = hm.get(diff);
        if (
          i !== indexes[0] &&
          i !== indexes[1] &&
          j !== indexes[0] &&
          j !== indexes[1]
        ) {
          let max = Math.max(a[i], a[j]);
          let min = Math.min(a[i], a[j]);
          //   document.write(
          //     a[indexes[0]],
          //     ", ",
          //     a[indexes[1]],
          //     ", ",
          //     min,
          //     ", ",
          //     max
          //   );
          //   document.write("<br/>");
          d = Math.max(d, max);
        }
      }
    }
  }
  return d;
}
let arr = [2, 3, 5, 7, 12];
let n = arr.length;
let res = findFourElements(arr, n);
if (res == Number.MIN_VALUE) document.write("No Solution");
else document.write(res);
