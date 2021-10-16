function printCommonElements(mat) {
  let rows = mat.length;
  let cols = mat[0].length;

  let hm = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (hm.has(mat[i][j])) {
        let ele = hm.get(mat[i][j]);
        if (i != ele[ele.length - 1]) {
          hm.set(mat[i][j], [...ele, i]);
        }
      } else {
        hm.set(mat[i][j], [i]);
      }
    }
  }
  hm.forEach((value, key) => {
    if (value.length == rows) {
      document.write(key, ", ");
    }
  });
}
let mat = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9]
];
printCommonElements(mat);
