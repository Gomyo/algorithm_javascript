function parseSearch(search) {
  /* 쿼리 문자열 `search`를 파싱하는 함수를 작성해주세요. */
  const parsed = search.split('&')
  const result = {}
  let N = parsed.length
  // if (search === "") {
  //     return {}
  // }
  // 단일
  if (N === 1) {
      let answer = parsed[0].substring(1).split('=')
      result[answer[0]] = answer[1]
      return result
  }
  // 복수
  else {
      let key = ''
      const values = []
      for (let i=0; i<N; i++) {
          if (i === 0) {
              let answer = parsed[i].substring(1).split('=')
              key = answer[0]
              values.push(answer[1])
          } else {
              let answer = parsed[i].split('=')
              values.push(answer[1])
          }
      }
      result[key] = values
      return result;
  }

}

/*
* NOTE: 아래 코드는 코드 동작을 확인하기 위한 코드입니다. 수정하지 말아주세요.
*/
function solution(search) {
  var query = parseSearch(search);
  return submit(query);
}

function submit(answer) {
  return JSON.stringify(answer);
}
