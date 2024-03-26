export function calculateModifier(score: number): string {
  if (score < 0) {
    // errore
    return 'An error has probably occurred.\nThe minimum score allowed is 1.';
  }
  // Calcola il modificatore utilizzando la formula standard di D&D
  const modifier = Math.floor((score - 10) / 2);

  // Formatta il risultato come stringa, aggiungendo un segno positivo per i numeri positivi
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}
