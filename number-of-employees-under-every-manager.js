function numberOfEmployees(a, n) {
  let hm = new Map();
  for (let i = 0; i < n; i++) {
    if (hm.has(a[i][1])) {
      let count = hm.get(a[i][1]).count + 1;
      let below = [...hm.get(a[i][1]).below, a[i][0]];
      hm.set(a[i][1], { count, below });
    } else {
      hm.set(a[i][1], { count: 1, below: [a[i][0]] });
    }
  }
  console.log(hm);
  for (let i = 0; i < n; i++) {
    if (!hm.has(a[i][0])) {
      document.write(a[i][0], " -> ", 0);
      document.write("<br/>");
    } else {
      let employeeCount = 0;
      let current = hm.get(a[i][0]);
      for (let j = 0; j < current.count; j++) {
        let temp = current;
        if (hm.has(temp.below[j]) && temp.below[j] != a[i][0]) {
          employeeCount += hm.get(temp.below[j]).count;
        }
        employeeCount++;
      }
      document.write(a[i][0], " -> ", employeeCount);
      document.write("<br/>");
    }
  }
}
let a = [
  ["A", "C"],
  ["B", "C"],
  ["C", "F"],
  ["D", "E"],
  ["E", "F"],
  ["F", "F"]
];
numberOfEmployees(a, a.length);
