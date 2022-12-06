
function solution(num_list, n) {
    let answer = [];
  for (i = 0; i < num_list.length; i += n) {
    let nLengthArr = num_list.slice(i, i + n);
    answer.push(nLengthArr);
  }
  return answer;
}