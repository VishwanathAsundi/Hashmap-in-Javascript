function printItinerary(a, n) {
  let hm = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!hm.has(a[i][1])) {
      hm.set(a[i][1], a[i][0]);
    }
  }
  let rHm = new Map();
  let start;
  for (let i = 0; i < a.length; i++) {
    if (!rHm.has(a[i][0])) {
      rHm.set(a[i][0], a[i][1]);
    }
    if (!hm.has(a[i][0])) {
      start = a[i];
    }
  }
  while (rHm.has(start[0])) {
    document.write(start[0], " --> ", start[1], ",  ");
    start = [start[1], rHm.get(start[1])];
  }
}
let a = [
  ["Chennai", "Banglore"],
  ["Bombay", "Delhi"],
  ["Goa", "Chennai"],
  ["Delhi", "Goa"]
];

printItinerary(a, a.length);
