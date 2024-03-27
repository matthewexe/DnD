export function calculateModifier(score: number): number {
  if (score < 0) {
    // errore
    return Number.NaN;
  }
  // Calcola il modificatore utilizzando la formula standard di D&D
  return Math.floor((score - 10) / 2);

  // Formatta il risultato come stringa, aggiungendo un segno positivo per i numeri positivi
}

export function modifierToString(modifier: number): string {
  if (isNaN(modifier)) {
    return 'An error has probably occurred.\nThe minimum score allowed is 1.';
  }
  if (modifier >= 0) {
    return `+${modifier}`;
  }
  return `${modifier}`;
}
