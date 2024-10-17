// Interface representing a level with associated color and emoji
export interface Level {
  color: string;
  emoji: string;
}

// Array of level thresholds and their corresponding colors and emojis
const levelThresholds = [
  { threshold: 100, color: 'purple', emoji: '🚀' },
  { threshold: 50, color: 'red', emoji: '🔥' },
  { threshold: 30, color: 'orange', emoji: '⚡' },
  { threshold: 10, color: 'green', emoji: '👍' },
  { threshold: 0, color: 'blue', emoji: '😊' },
  { threshold: -10, color: 'lightblue', emoji: '🙁' },
  { threshold: -30, color: 'cyan', emoji: '😢' },
  { threshold: -50, color: 'teal', emoji: '😰' },
  { threshold: -Infinity, color: 'navy', emoji: '😱' },
];

/**
 * Determines the level based on the given count
 * @param count - The current count value
 * @returns The corresponding Level object with color and emoji
 */
export function getLevel(count: number): Level {
  const level = levelThresholds.find(l => count >= l.threshold);
  return level ? { color: level.color, emoji: level.emoji } : levelThresholds[levelThresholds.length - 1];
}