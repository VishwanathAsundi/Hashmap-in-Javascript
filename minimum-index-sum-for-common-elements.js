function find(list1, list2) {
  // Mapping Strings to their indices
  let map = new Map();
  for (let i = 0; i < list1.length; i++) map.set(list1[i], i);

  // Resultant list
  let res = [];

  let minsum = Number.MAX_VALUE;
  for (let j = 0; j < list2.length; j++) {
    if (map.has(list2[j])) {
      // If current sum is smaller than minsum
      let sum = j + map.get(list2[j]);
      if (sum < minsum) {
        minsum = sum;
        res = [];
        res.push(list2[j]);
      }

      // If index sum is same then put this
      // String in resultant list as well
      else if (sum == minsum) res.push(list2[j]);
    }
  }

  // Print result
  for (let i = 0; i < res.length; i++) document.write(res[i] + " ");
}

// Driver code

// Creating list1
let list1 = [];
list1.push("GeeksforGeeks");
list1.push("Udemy");
list1.push("Coursera");
list1.push("edX");

// Creating list2
let list2 = [];
list2.push("Codecademy");
list2.push("Khan Academy");
list2.push("GeeksforGeeks");

find(list1, list2);
