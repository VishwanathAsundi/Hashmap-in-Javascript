// O(n) time
// O(n) space
function cumulativeFrequencyOfCount(a, n) {
  let hm = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    hm[a[i]]++;
  }
  console.log(hm, "hm");
  for (let i = 0; i < n; i++) {
    if (hm[a[i]] !== 0) {
      document.write(a[i], "-->", hm[a[i]]);
      document.write("<br/>");
    }
    hm[a[i]] = 0;
  }
}
let a = [1, 3, 2, 4, 2, 1];
cumulativeFrequencyOfCount(a, a.length);
