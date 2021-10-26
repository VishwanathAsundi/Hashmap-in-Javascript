// O(n^2) solution with O(n) space
// function largestSubArray(a, k, n) {
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += a[j];
//       console.log(a.slice(i, j + 1));
//       if (sum % k == 0) {
//         res.push(a.slice(i, j + 1));
//       }
//     }
//   }
//   let largest = 0;
//   let ans;
//   for (let i = 0; i < res.length; i++) {
//     if (res[i].length > largest) {
//       largest = res[i].length;
//       ans = res[i];
//     }
//   }
//   console.log(
//     "Largest sub array whose sum is divisible by ",
//     k,
//     " is ",
//     ans,
//     " and its length is ",
//     largest
//   );
// }

// O(n) time & O(n) space

function longSubarrWthSumDivByK(arr, n, k) {
  // unordered map 'um' implemented as
  // hash table
  var um = new Map();

  // 'mod_arr[i]' stores (sum[0..i] % k)
  var max = 0,
    mod;
  var curr_sum = 0;

  for (var i = 0; i < n; i++) {
    curr_sum += arr[i];

    // as the sum can be negative, taking modulo twice
    mod = ((curr_sum % k) + k) % k;
    // if true then sum(0..i) is divisible
    // by k
    if (mod == 0)
      // update 'max'
      max = i + 1;
    // if value 'mod_arr[i]' not present in 'um'
    // then store it in 'um' with index of its
    // first occurrence
    else if (!um.has(mod)) um.set(mod, i);
    // if true, then update 'max'
    else if (max < i - um.get(mod)) {
      max = i - um.get(mod);
      console.log(a.slice(um.get(mod) + 1, i + 1));
    }
  }

  // required length of longest subarray with
  // sum divisible by 'k'
  return max;
}
let a = [2, 7, 6, 1, 4, 5];
let k = 3;
// largestSubArray(a, k, a.length);
document.write(longSubarrWthSumDivByK(a, a.length, k));
