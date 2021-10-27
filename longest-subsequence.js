// Time complexity of this solution is O(max-min) where max is maximum element in the array, and min is minimum element in the array
// space O(n)
function longestSubSequence(a, n) {
  document.write("Input : [", a, "] <br/><br/>");
  let max = a[0],
    min = a[0];

  let hm = new Map();

  for (let i = 0; i < n; i++) {
    if (!hm.has(a[i])) {
      hm.set(a[i], a[i]);
    }

    if (a[i] > max) {
      max = a[i];
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  //   console.log(hm, min, max);

  let ans = [];
  let res = [];
  let maxLength = 0;
  let desired;
  while (min <= max + 1) {
    console.log(min, hm.has(min));
    if (hm.has(min)) {
      //   console.log(hm.get(min));
      res.push(hm.get(min));
      if (maxLength < res.length) {
        maxLength = res.length;
        desired = ans.length;
      }
    } else {
      ans.push(res);
      res = [];
    }
    // console.log(res);
    min++;
  }
  document.write(
    "The longest subsequence is of length :",
    maxLength,
    "  [",
    ans[desired],
    " ]"
  );
}
var a = [3, 10, 3, 11, 4, 5, 6, 7, 8, 12];
var n = a.length;
longestSubSequence(a, n);
