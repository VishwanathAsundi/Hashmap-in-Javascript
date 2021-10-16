function pairSum(mat, n, sum) {
  let hm = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      hm.set(mat[i][j], [i, j]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Look for remaining sum in hash
      let remSum = sum - mat[i][j];

      // If an element with value equal to remaining sum exists
      if (hm.has(remSum)) {
        // Find row and column numbers of element with
        // value equal to remaining sum.
        let p = hm.get(remSum);
        let row = p[0],
          col = p[1];

        if (row != i && row > i) {
          document.write("(" + mat[i][j] + "," + mat[row][col] + "), ");
        }
      }
    }
  }
}

let n = 4,
  sum = 11;
let mat = [
  [1, 3, 2, 4],
  [5, 8, 7, 6],
  [9, 10, 13, 11],
  [12, 0, 14, 15]
];
pairSum(mat, n, sum);
