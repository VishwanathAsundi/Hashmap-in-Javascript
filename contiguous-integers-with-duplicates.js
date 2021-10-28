function areElementsContiguous(a, n) {
  let set = new Set();
  for (let i = 0; i < n; i++) set.add(a[i]);

  console.log(set);

  let current = a[0] - 1;
  let count = 1;

  while (set.has(current)) {
    count++;
    current--;
  }

  current = a[0] + 1;

  while (set.has(current)) {
    count++;
    current++;
  }
  return count == set.size ? true : false;
}
let arr = [5, 2, 3, 6, 4, 4, 6, 6];
let n = arr.length;

if (areElementsContiguous(arr, n)) document.write("Yes");
else document.write("No");
