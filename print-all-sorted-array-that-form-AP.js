function printAllAPTriplets(a, n) {
  document.write("Triplets are in AP : ");
  for (let i = 1; i < n - 1; i++) {
    for (let j = i - 1, k = i + 1; (j >= 0) & (k < n); ) {
      if (a[j] + a[k] === 2 * a[i]) {
        document.write("<br/>{", a[j], ", ", a[i], ", ", a[k], "}");
        k++;
        j--;
      } else if (a[j] + a[k] < 2 * a[i]) {
        k++;
      } else {
        j--;
      }
    }
  }
}
let arr = [2, 6, 9, 12, 17, 22, 31, 32, 35, 42];
let n = arr.length;
printAllAPTriplets(arr, n);
