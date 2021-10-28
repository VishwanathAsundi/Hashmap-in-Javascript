// Design a data structure that supports the following operations in Θ(1) time.
// insert(x): Inserts an item x to the data structure if not already present.
// remove(x): Removes item x from the data structure if present.
// search(x): Searches an item x in the data structure.
// getRandom(): Returns a random element from current set of elements
class customDS {
  constructor() {
    this.map = new Map();
    this.arr = [];
    this.index = -1;
  }
  insertItem(item) {
    this.arr.push(item);
    if (!this.map.has(item)) {
      this.map.set(item, ++this.index);
    } else {
      this.map.set(item, ++this.index);
    }
  }
  deleteItem(item) {
    if (this.map.has(item)) {
      let indexOfCurrentItem = this.map.get(item);
      this.arr[indexOfCurrentItem] = this.arr[this.index];
      this.map.set(this.arr[this.index], indexOfCurrentItem);
      this.index--;
      this.arr.pop();
      this.map.delete(item);
    }
  }
  searchItem(item) {
    if (this.map.has(item)) {
      return true;
    }
    return false;
  }
  getRandom() {
    return this.arr[Math.floor(Math.random(0, 10) * this.index)];
  }
  printHashMap() {
    for (let [key, value] of this.map.entries()) {
      document.write("{", key, ": ", value, "  }");
    }
    console.log(this.arr);
  }
}
let d = new customDS();
d.insertItem(10);
d.insertItem(20);
d.insertItem(30);
d.insertItem(40);
d.insertItem(50);
d.insertItem(60);
document.write("<br/>");
d.printHashMap();
document.write(
  "<br/>",
  d.searchItem(20) ? 20 + " Exists" : 20 + " Doesn't exist"
);
d.deleteItem(20);
document.write(
  "<br/>",
  d.searchItem(20) ? 20 + " Exists" : 20 + " Doesn't exist"
);
document.write("<br/>");
d.printHashMap();
d.deleteItem(60);
document.write(
  "<br/>",
  d.searchItem(60) ? 60 + " Exists" : 60 + " Doesn't exist"
);
document.write("<br/>");
d.printHashMap();
d.insertItem(110);
d.insertItem(90);
d.insertItem(70);
document.write("<br/>");
d.printHashMap();
document.write("<br/>generated random Number : ", d.getRandom());
