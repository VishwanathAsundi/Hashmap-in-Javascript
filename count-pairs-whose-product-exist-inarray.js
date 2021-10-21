// O(n^2) space
// O(n) time
function countPairsWhoseProductExists(a, n) {
  let temp = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    temp[a[i]] = a[i];
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let p = a[i] * a[j];
      if (temp[p]) {
        document.write("{", a[i], ", ", a[j], "}, ");
        count++;
      }

      // second solution without using hashing
      //   if (a.includes(p)) {
      //     document.write("{", a[i], ", ", a[j], "}, ");
      //     count++;
      //   }
    }
  }
  document.write("<br/> Count :", count);
}
let a = [6, 2, 4, 12, 5, 3];
countPairsWhoseProductExists(a, a.length);
