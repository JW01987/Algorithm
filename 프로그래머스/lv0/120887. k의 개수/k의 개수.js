function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    count += num.toString().split(k.toString()).length - 1;
  }
  return count;
}