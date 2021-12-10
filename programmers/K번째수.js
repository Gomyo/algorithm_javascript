function solution(array, commands) {
  let answer = [];
  commands.map((command) => {
    let temp = [];
    let [f, e, k] = [command[0], command[1], command[2]];
    for (let i = f - 1; i <= e - 1; i++) {
      temp.push(Number(array[i]));
    }
    let sorted = temp.sort((a, b) => a - b);
    answer.push(sorted[k - 1]);
  });
  return answer;
}
