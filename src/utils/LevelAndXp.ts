function xpFromLevel(level: number): string {
  const xpLevels = [
    0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
    120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000,
  ];

  if (level < 1 || level > 20) {
    return 'Invalid level. Must be between 1 and 20.';
  }
  return `The experience points needed for the level ${level} are ${
    xpLevels[level - 1]
  }.`;
}

function levelFromXP(xp: number): string {
  const levels = [
    {xp: 0, level: 1},
    {xp: 300, level: 2},
    {xp: 900, level: 3},
    {xp: 2700, level: 4},
    {xp: 6500, level: 5},
    {xp: 14000, level: 6},
    {xp: 23000, level: 7},
    {xp: 34000, level: 8},
    {xp: 48000, level: 9},
    {xp: 64000, level: 10},
    {xp: 85000, level: 11},
    {xp: 100000, level: 12},
    {xp: 120000, level: 13},
    {xp: 140000, level: 14},
    {xp: 165000, level: 15},
    {xp: 195000, level: 16},
    {xp: 225000, level: 17},
    {xp: 265000, level: 18},
    {xp: 305000, level: 19},
    {xp: 355000, level: 20},
  ];

  const playerLevel = levels.find(level => xp < level.xp);
  if (playerLevel) {
    return `You are at level ${playerLevel.level - 1}, with ${xp} XP.`;
  } else {
    return 'You are at the maximum level (20), congratulations!';
  }
}
