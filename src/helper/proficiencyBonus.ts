export function getProfBonus(level: number): number {
  if (level < 1 || level > 20) {
    return 0;
  }

  if (level < 4) return 2;
  if (level < 9) return 3;
  if (level < 13) return 4;
  if (level < 17) return 5;
  return 6;
}
