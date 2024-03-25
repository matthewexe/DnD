export function ordinaArrayNumeriCasuali(): number[] {
  const numeriCasualiOrdinati: number[] = [];

  for (let i = 0; i < 6; i++) {
    // Genera 4 numeri casuali
    const numeriCasuali: number[] = [];
    for (let j = 0; j < 4; j++) {
      const numeroCasuale = Math.floor(Math.random() * 6) + 1;
      numeriCasuali.push(numeroCasuale);
    }

    // Rimuovi il valore più basso
    numeriCasuali.sort((a, b) => a - b); // Ordina in ordine crescente
    numeriCasuali.shift(); // Rimuove il valore più basso

    // Somma i valori rimanenti e inseriscili nell'array
    const somma = numeriCasuali.reduce((acc, curr) => acc + curr, 0);
    numeriCasualiOrdinati.push(somma);
  }

  // Ordina l'array in ordine decrescente
  numeriCasualiOrdinati.sort((a, b) => b - a);

  return numeriCasualiOrdinati;
}
