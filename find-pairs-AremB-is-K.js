// O(n) space
// O(n*sqrt(max)) time, max is maximum element in the array
function findDivisors(n) {
  let v = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n / i == i) v.push(i);
      else {
        v.push(i);
        v.push(Math.floor(n / i));
      }
    }
  }
  return v;
}
function printPairs(arr, n, k) {
  let occ = new Map();
  for (let i = 0; i < n; i++) occ.set(arr[i], true);

  let isPairFound = false;
  for (let i = 0; i < n; i++) {
    if (occ.get(k) && k < arr[i]) {
      document.write("(" + k + ", " + arr[i] + ") ");
      isPairFound = true;
    }

    if (arr[i] >= k) {
      let v = findDivisors(arr[i] - k);

      for (let j = 0; j < v.length; j++) {
        if (arr[i] % v[j] == k && arr[i] != v[j] && occ.get(v[j])) {
          document.write("(" + arr[i] + ", " + v[j] + ") ");
          isPairFound = true;
        }
      }
      v = [];
    }
  }

  return isPairFound;
}
let arr = [3, 1, 2, 5, 4];
let k = 2;
if (printPairs(arr, arr.length, k) == false)
  document.write("No such pair exists");
