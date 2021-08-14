/*
 * `codeOwnersMap`과 `directory`를 입력받아
 * `directory`의 코드 주인 목록을 반환하는 함수를 작성하세요.
 */
function solution(codeOwnersMap, directory) {
  let words = directory.split('/')
  let N = words.length

  let answer = codeOwnersMap[words[0]]

  for (let i=1; i<N; i++) {
      answer = answer[words[i]]
  }
  return answer
}
