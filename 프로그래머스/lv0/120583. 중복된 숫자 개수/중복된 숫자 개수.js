function solution(array, n) {
  var answer = 0;
  for (a of array) {
    if (a === n) {
      answer += 1;
    }
  }
  return answer;
}