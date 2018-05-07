function fatorial(n) {
  var tmp = n;
  while (n-- > 2) {
    tmp *= n;
  }

  return tmp;
}

console.log(fatorial(4));