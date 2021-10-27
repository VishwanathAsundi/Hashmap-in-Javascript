// Time complexity is O(nk) and additional space of O(k)
function distictEls(a, k, n) {
  for (let i = 0; i <= n - k; i++) {
    let temp = a.slice(i, i + k);
    let hm = [];
    for (let j = 0; j < temp.length; j++) {
      if (!hm.includes(temp[j])) {
        hm.push(temp[j]);
      }
    }
    console.log(hm.length);
  }
}
let a = [1, 2, 1, 1, 1, 3, 4, 2, 2, 3];
distictEls(a, 4, a.length);
