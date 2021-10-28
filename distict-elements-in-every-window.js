// Time complexity is O(nk) and additional space of O(k)
// function distictEls(a, k, n) {
//   for (let i = 0; i <= n - k; i++) {
//     let hm = [];
//     for (let j = i; j < i + k; j++) {
//       if (!hm.includes(a[j])) {
//         hm.push(a[j]);
//       }
//     }
//     console.log(hm.length);
//   }
// }

function disticts(a, k, n) {
  let dist_count = 0;
  for (let i = 0; i <= n - k; i++) {
    let hm = {};
    let j = i;
    if (hm[a[i]]) {
      delete hm[a[i]];
      dist_count--;
    }
    while (j < i + k) {
      if (hm[a[j]]) {
        hm[a[j]] = hm[a[j]] + 1;
        dist_count++;
      } else {
        hm[a[j]] = 1;
      }
      j++;
    }
    console.log(hm);
    console.log(dist_count);
  }
}
let a = [1, 2, 1, 3, 4, 2, 3];
// distictEls(a, 4, a.length);
disticts(a, 4, a.length);
