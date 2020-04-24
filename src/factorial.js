function productTree(left, right) {
  if (left > right) return 1;
  if (left === right) return right;
  if (right - left === 1) return left * right;
  const mid = Math.trunc((left + right) / 2);
  return productTree(left, mid) * productTree(mid + 1, right);
}

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;
  return productTree(2, n);
}

module.exports = factorial;
