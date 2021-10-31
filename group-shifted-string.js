let ALPHA = 26;

function getDiffString(str) {
  let shift = "";
  for (let i = 1; i < str.length; i++) {
    let dif = str[i] - str[i - 1];
    if (dif < 0) dif += ALPHA;

    shift += dif + "a";
  }

  return shift;
}

function groupShiftedString(str, n) {
  let groupMap = new Map();
  for (let i = 0; i < n; i++) {
    let diffStr = getDiffString(str[i]);
    if (!groupMap.has(diffStr)) groupMap.set(diffStr, []);
    groupMap.get(diffStr).push(i);
  }

  // iterating through map to print group
  for (let [key, value] of groupMap.entries()) {
    let v = value;
    for (let i = 0; i < v.length; i++) document.write(str[v[i]] + " ");
    document.write("<br>");
  }
}

let str = ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"];
let n = str.length;
groupShiftedString(str, n);
