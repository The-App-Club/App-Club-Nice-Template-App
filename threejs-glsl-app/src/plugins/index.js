function randInt(low, high) {
  return low + Math.floor(Math.random() * (high - low + 1));
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

export {randInt, mod};
