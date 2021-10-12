function find(arr, ele) {
  for (var i = 0; i < arr.length; i++) if (arr[i] === ele) return i;
  return -1;
}

function kTop(a, n, k) {
  var top = new Array(k + 1).fill(0);

  var freq = {};
  for (var i = 0; i < k + 1; i++) freq[i] = 0;
  for (var m = 0; m < n; m++) {
    if (freq.hasOwnProperty(a[m])) freq[a[m]]++;
    else freq[a[m]] = 1;

    top[k] = a[m];

    // search in top vector for same element
    var i = find(top, a[m]);
    i--;

    while (i >= 0) {
      if (freq[top[i]] < freq[top[i + 1]]) {
        var temp = top[i];
        top[i] = top[i + 1];
        top[i + 1] = temp;
      } else if (freq[top[i]] === freq[top[i + 1]] && top[i] > top[i + 1]) {
        var temp = top[i];
        top[i] = top[i + 1];
        top[i + 1] = temp;
      } else break;

      i--;
    }
    for (var j = 0; j < k && top[j] !== 0; ++j) document.write(top[j] + " ");
  }
  document.write("<br>");
}

var k = 4;
var arr = [5, 2, 1, 3, 2];
var n = arr.length;
kTop(arr, n, k);
