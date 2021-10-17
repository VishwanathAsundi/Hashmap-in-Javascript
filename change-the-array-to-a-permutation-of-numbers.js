const makePermutation = (a, n) => {
  let countHm = new Map();

  for (let i = 0; i < n; i++) {
    if (countHm.has(a[i])) {
      countHm.set(a[i], countHm.get(a[i]) + 1);
    } else {
      countHm.set(a[i], 1);
    }
  }

  let missingNumber = 1;
  for (let i = 0; i < n; i++) {
    if (countHm.get(a[i]) !== 1 || a[i] > n || a[i] < 1) {
      countHm.set(a[i], countHm.get(a[i]) - 1);

      while (countHm.has(missingNumber)) {
        missingNumber++;
      }

      a[i] = missingNumber;
      countHm.set(missingNumber, 1);
    }
  }
};
var A = [2, 2, 3, 3];
var n = A.length;
makePermutation(A, n);
for (var i = 0; i < n; i++) document.write(A[i] + " ");
