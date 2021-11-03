function getSubstringWithEqual012(str) {
  let n = str.length;

  let mp = {};
  mp["00"] = 1;

  let zc = 0,
    oc = 0,
    tc = 0;

  let res = 0;
  for (let i = 0; i < n; ++i) {
    if (str[i] == "0") zc++;
    else if (str[i] == "1") oc++;
    else tc++;

    let tmp = zc - oc + "" + (zc - tc);

    // Count of previous occurrences of above pair
    // indicates that the subarrays forming from
    // every previous occurrence to this occurrence
    // is a subarray with equal number of 0's, 1's
    // and 2's

    if (!mp[tmp]) {
      mp[tmp] = 0;
    }

    res = res + mp[tmp];

    mp[tmp]++;
  }

  return res;
}

let str = "0102010";
document.write("<br/> No of substrings :", getSubstringWithEqual012(str));
