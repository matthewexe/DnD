export function convertFootToMeters(piedi: number): string {
  // Conversione da piedi a metri
  const output = piedi * 0.3048; // 1 piede = 0.3048 metri
  return ` ${output} meters`;
}
