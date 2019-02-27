module.exports = function getZerosCount(number, base) {
  // your implementation
  let simplBase = factorize(base);

  if(isSimple(simplBase)) {
    //it('resolves', (done) => {zerosSimple(number, base);})
    return zerosSimple(number, base);
  }

  return zerosNotSimple(simplBase);
}

function factorize(n) {
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
  for(let i = 1; i <= number; i++) {
    y = i;
    while(y % base == 0) {
      z++;
      y /= base;
    }
  }
  return z;
}

function zerosNotSimple(base) {
  let counts = [];
  for(let i =0; i < Object.keys(base).length; i++) {
    counts[i] = 0;
  }

  let y, j;
  for(i = 1; i <= number; i++) {
    y = i; j = 0;
    for(let key in base) {
      while(y % key == 0) {
        counts[j]++;
        y /= key;
      }
      j++;
    }
  }

  j = 0;
  for(key in base) {
    counts[j] = Math.floor(counts[j] / base[key]);
    j++;
  }
  
  return Math.min.apply(null, counts);
}

function isSimple(obj) {
  let k = Object.keys(obj);
  if(k.length == 1 && obj[k[0]] == 1) return true;
  return false;
}