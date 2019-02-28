module.exports = function getZerosCount(number, base) {
  // your implementation
  let simplBase = factorize(base);
  console.log(simplBase);
  if(isSimple(simplBase)) return zerosSimple(number, base);

  return zerosNotSimple(number, simplBase);
}

function factorize(n) {
  if(n == 2) return {2:1};
  let j = 1;
  let i = 2;
  let a = [];
  
  do {
    if (n % i == 0){
      a[j] = i;
      j++;
      n = n / i;
    }
    else i++;
  } while (i < n);

  a[j] = i;
  let res = {};
  a.forEach(function(e){
    res[e] = 1 + ~~res[e];
  });

  return res;
}

function zerosSimple(number, base) {
  let z = 0, y;
  for(let i = base; i <= number; i += base) {
    y = i;
    while(y % base == 0) {
      z++;
      y /= base;
    }
  }
  return z;
}

function zerosNotSimple(number, base) {
  let count = 0;

  let max = getMaxKey(base);
  console.log(max);
  let y;
  for(i = max; i <= number; i += max) {
    y = i;
    while(y % max == 0) {
      count++;
      y /= max;
    }
  }
  return count = Math.floor(count / base[max]);
}

function isSimple(obj) {
  let k = Object.keys(obj);
  if(k.length == 1 && obj[k[0]] == 1) return true;
  return false;
}

function getMaxKey (base) {
  let k = Object.keys(base);
  if(k.length == 1) return +k[0];
  let curMax = 0, mK, curPow, curMul;

  for(let i = 0; i < k.length - 1; i++) {
    if(base[k[i]] < k[i + 1]) {mK = k[i + 1]; continue;}
    if(base[k[i]] == k[i + 1]) curMul = Math.max(Math.pow(k[i], base[k[i]]), Math.pow(k[i + 1], k[i]));
    else curMul = k[i] * Math.pow(k[i + 1], base[k[i + 1]]);
    
    curPow = Math.pow(k[i], base[k[i]]);
    if(curPow < curMul) {
      if(curMax < curMul) {
        curMax = curMul;
        mK = k[i + 1];
      }
    }
    if(curMax < curPow) {
      curMax = curPow;
      mK = k[i];
    }
  }

  return +mK;
}