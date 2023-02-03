function solution(money) {
    var answer = [];
    const coffee = Math.floor(money/5500)
    answer.push(coffee)
    const left = money- (coffee*5500)
    answer.push(left)
    return answer;
}