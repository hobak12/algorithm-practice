function solution(num_list) {
    var answer = [];
    num_list.forEach((item)=>
    answer.unshift(item)
    )
    return answer;
}