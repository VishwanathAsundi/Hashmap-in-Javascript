// O(n^2) solution with constant extra space
function uniqueTriplets(a, n, sum) {
  let tripletFound = false;

  for (let i = 0; i < n - 2; i++) {
    let start = i + 1;
    let end = n - 1;
    let target = sum - a[i];

    while (start < end) {
      if (start > i + 1 && a[start] == a[start - 1]) {
        start++;
        continue;
      }
      if (end < n - 1 && a[end] == a[end + 1]) {
        end--;
        continue;
      }
      if (target == a[start] + a[end]) {
        tripletFound = true;
        document.write("<br/>{", a[start], ", ", a[end], ", ", a[i], "}");
        start++;
        end--;
      } else if (target > a[start] + a[end]) {
        start++;
      } else {
        end--;
      }
    }
  }
  if (!tripletFound) {
    document.write("No Triplets found");
  }
}
let a = [12, 3, 6, 1, 6, 9];
let n = a.length;
let sum = 24;

// O(n*logn)
a.sort();

uniqueTriplets(a, n, sum);
