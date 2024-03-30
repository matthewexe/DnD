export function converterLbToKg(score: number): number {
  if (score < 0) {
    // errore
    return Number.NaN;
  }

  return Math.floor(score / 2);
}
