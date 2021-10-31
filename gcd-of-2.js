function gcd(a, b) {
  let x, y;
  if (a == b) return a;
  if (a > b) {
    x = a;
    y = b;
  } else {
    x = b;
    y = a;
  }
  while (x % y != 0) {
    let rem = x % y;
    x = y;
    y = rem;
  }
  return y;
}
let a = 18,
  b = 12;
document.write("GCD of 2 numbers ", a, " ", b, " is :", gcd(a, b));
