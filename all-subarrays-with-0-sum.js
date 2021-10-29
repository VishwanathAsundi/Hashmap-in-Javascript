function findSubsetWithSum0(a, n) {
  let hm = new Map();

  let sum = 0;
  let found = false;
  for (let i = 0; i < n; i++) {
    sum += a[i];

    if (sum == 0 || hm.has(sum)) {
      found = true;
      if (sum != 0) {
        let temp = hm.get(sum);
        for (let k = 0; k < temp.length; k++) {
          document.write(
            "<br/> Subarray found from index ",
            temp[k] + 1,
            " to ",
            i,
            " : ",
            a.slice(temp[k] + 1, i + 1)
          );
        }
      } else {
        document.write("<br/> Subarray found from index ", 0, " to ", i);
      }
    }
    if (hm.has(sum)) {
      let current = hm.get(sum);
      current.push(i);
      hm.set(sum, current);
    } else {
      hm.set(sum, [i]);
    }
  }
  return found;
}
const arr = [6, 3, -1, -3, 4, -2, 0, 2, 4, 6, -12, -7];
if (findSubsetWithSum0(arr, arr.length))
  document.write("<br/><br/>Found a subarray with 0 sum");
else document.write("<br/>No Such Sub Array Exists!");
