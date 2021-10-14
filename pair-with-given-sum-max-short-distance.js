function pairWithSum(arr, n, k) {
  let hm = {};
  let start = 0;
  let end = n + 1;
  let max = n;

  for (let i = 0; i < n; i++) {
    if (hm[k - arr[i]]) {
      let a = hm[k - arr[i]];
      let b = arr[i];

      console.log(a.key, ", ", b, " who sum is ", k);

      let b_left = Math.abs(start - (i + 1));
      let b_right = Math.abs(end - (i + 1));

      let bShort = b_left;
      if (b_left < b_right) {
        bShort = b_left;
      } else {
        bShort = b_right;
      }

      let a_left = Math.abs(start - a.index);
      let a_right = Math.abs(end - a.index);

      let aShort = a_left;
      if (a_left < a_right) {
        aShort = a_left;
      } else {
        aShort = a_right;
      }

      if (aShort >= bShort) {
        if (aShort < max) {
          max = aShort;
        }
      } else {
        if (bShort < max) {
          max = bShort;
        }
      }
    } else {
      hm[arr[i]] = {
        key: arr[i],
        index: i + 1
      };
    }
  }
  return max;
}
let a = [3, 5, 8, 6, 7];
let K = 11;
let n = a.length;
document.write("Hello ", pairWithSum(a, n, K));
