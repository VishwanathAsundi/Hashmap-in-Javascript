function getSecondMostRepeatedWord(arr, n) {
  let map = new Map(); // O(n)
  for (let i = 0; i < n; i++) {
    map.has(a[i]) ? map.set(a[i], map.get(a[i]) + 1) : map.set(a[i], 1);
  }
  //   let temp = []; //O(n)
  let firstMax = 0,
    secMax = 0;
  for (let [key, value] of map.entries()) {
    if (value > firstMax) {
      secMax = firstMax;
      firstMax = value;
    } else if (value > secMax && value != firstMax) {
      secMax = value;
    }
    // temp.push({ key, value });
  }
  console.log(secMax, "secMax");

  for (let [key, value] of map.entries()) {
    if (value == secMax) {
      document.write("<br/> Second most repeated string is :", key, " ", value);
      return;
    }
  }

  //   temp.sort((a, b) => a.value - b.value); //O(nLogn)

  //   let max = temp[temp.length - 1].value;
  //   let second;
  //   for (let i = temp.length - 2; i >= 0; i--) {
  //     //O(n)
  //     if (temp[i].value < max) {
  //       second = temp[i];
  //       break;
  //     }
  //   }
  //   if (second) {
  //     document.write("<br/> Second most repeated string is : ", second.key);
  //   }
}
function printArray(a, n) {
  for (i = 0; i < n; i++) {
    document.write(a[i], ", ");
  }
}
let a = ["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"];
document.write("Input : ");
printArray(a, a.length);
getSecondMostRepeatedWord(a, a.length);
