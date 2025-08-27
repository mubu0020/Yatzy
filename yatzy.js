export function yatzeeScore(chance, numbers) {
  return 1 + 2 + 3 + 4 + 5;
}
export function countOnes(numbers) {
  let antallOnes = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      antallOnes++;
    }
  }

  return antallOnes;
}
