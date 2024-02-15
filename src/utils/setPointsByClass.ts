function randomNumberGeneration(): number[] {
  const numeriCasuali: number[] = [];

  for (let i = 0; i < 6; i++) {
    const numeroCasuale = Math.floor(Math.random() * 6) + 1;
    numeriCasuali.push(numeroCasuale);
  }

  return numeriCasuali;
}
