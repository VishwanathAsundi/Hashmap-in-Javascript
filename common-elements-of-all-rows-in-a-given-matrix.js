function printCommonElements(mat) {
  let rows = mat.length;
  let cols = mat[0].length;

  let hm = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (hm[mat[i][j]]) {
        let ele = hm[mat[i][j]];
        if (i != ele[ele.length - 1]) {
          hm[mat[i][j]] = [...ele, i];
        }
      } else {
        hm[mat[i][j]] = [i];
      }
    }
  }
  console.log(hm);
  for (let key in hm) {
    if (hm[key] && hm[key].length == rows) {
      document.write(key, ", ");
    }
  }
}
let mat = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9]
];
printCommonElements(mat);
