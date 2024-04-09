export function hp(con: number, hit_die: number, level: number) {
  if (level === 1) {
    return maxHp(hit_die, con, level);
  }

  return (
    new Array<number>(level)
      .fill(0)
      .map(() => Math.round(Math.random() * (hit_die - 1) + 1))
      .reduce((acc, curr) => acc + curr, 0) +
    con * level
  );
}

export function maxHp(con: number, hit_die: number, level: number) {
  return (hit_die + con) * level;
}
