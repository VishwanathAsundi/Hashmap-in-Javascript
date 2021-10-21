function sortElementsByFrequency(a, n) {
  let hm = new Array(n + 1).fill({ key: null, value: 0 });
  console.log(hm);

  for (let i = 0; i < n; i++) {
    if (hm[a[i]].key) {
      hm[a[i]].value++;
    } else {
      hm[a[i]] = { key: a[i], value: 1 };
    }
    // if (hm[a[i]]) hm[a[i]] = {};
  }
  console.log(hm, "hm");
  console.log(hm.sort((a, b) => b.value - a.value));
  hm.sort((a, b) => b.value - a.value).forEach(item => {
    if (item.value !== 0) {
      for (let i = 0; i < item.value; i++) {
        document.write(item.key + ", ");
      }
    }
  });
}
let a = [2, 5, 2, 8, 5, 6, 8, 8];
sortElementsByFrequency(a, a.length);
