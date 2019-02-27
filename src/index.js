module.exports = function getZerosCount(number, base) {
  // your implementation
  let simplBase = factorize(base);

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

  let kk = Object.keys(base);
  let max = Math.max.apply(null, kk);
  let y;
  for(i = max; i <= number; i += max) {
    y = i;
    while(y % max == 0) {
      count++;
      y /= max;
    }
  }
  return count = Math.floor(count / base[max]);
  /*
  let counts = [];
  for(let i =0; i < Object.keys(base).length; i++) {
    counts[i] = 0;
  }

  let y, j = 0;
  for(let key in base) {
    for(i = +key; i <= number; i += +key) {
      y = i;
      
      while(y % key == 0) {
        counts[j]++;
        y /= key;
      }
      
    }
    j++;
  }

  j = 0;
  for(key in base) {
    counts[j] = Math.floor(counts[j] / base[key]);
    j++;
  }
  
  return Math.min.apply(null, counts);
  */
}

function isSimple(obj) {
  let k = Object.keys(obj);
  if(k.length == 1 && obj[k[0]] == 1) return true;
  return false;
}