class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
function verticalSumUtil(node, distance, hm) {
  if (node == null) return;

  verticalSumUtil(node.left, distance - 1, hm);

  if (hm[distance]) {
    hm[distance] += node.data;
  } else {
    hm[distance] = node.data;
  }

  verticalSumUtil(node.right, distance + 1, hm);
}

function verticalSum(node) {
  if (node == null) return;
  let hm = {};

  verticalSumUtil(node, 0, hm);

  for (let key in hm) {
    console.log(key, hm[key]);
  }
}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

verticalSum(root);
