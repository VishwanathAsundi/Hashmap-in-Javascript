// O(n2) time and O(n) space
const findThree = function(a, b, c, sum) {
  let map = {};
  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) {
      map[a[i]] = a[i];
    }
  }
  let res = [];
  for (let i = 0; i < b.length; i++) {
    let current = sum - b[i];
    for (let j = 0; j < c.length; j++) {
      if (
        map[current - c[j]] &&
        JSON.stringify(res).indexOf(
          JSON.stringify([current - c[j], b[i], c[j]])
        ) == -1
      ) {
        res.push([current - c[j], b[i], c[j]]);
        document.write(
          "<br/> ",
          "{",
          current - c[j],
          ", ",
          b[i],
          ", ",
          c[j],
          "}"
        );
      }
    }
  }
};
let a = [1, 2, 3, 4, 5],
  b = [2, 3, 6, 1, 2],
  c = [3, 2, 4, 5, 6];
document.write("Trilets are :");
findThree(a, b, c, 9);
