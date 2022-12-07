function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  let xLimit = (board[0] - 1) / 2;
  let yLimit = (board[1] - 1) / 2;
  keyinput.forEach((item) => {
    if (item === "left") {
      if (x === -xLimit) {
        x = x;
      } else {
        x -= 1;
      }
    } else if (item === "right") {
      if (x === xLimit) {
        x = x;
      } else {
        x += 1;
      }
    } else if (item === "up") {
      if (y === yLimit) {
        y = y;
      } else {
        y += 1;
      }
    } else if (item === "down") {
      if (y === -yLimit) {
        y = y;
      } else {
        y -= 1;
      }
    }
  });

  let answer = [x, y];
  return answer;
}