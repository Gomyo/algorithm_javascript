function solution(participant, completion) {
  const np = participant.length;

  participant.sort();
  completion.sort();

  for (let i=0; i<np; i++) {
      if (participant[i] != completion[i]) {
          return participant[i];
      }
  }
}
