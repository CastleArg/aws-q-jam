import { getLevel } from '../levelUtils';

describe('getLevel', () => {
  it('should return the correct level for various counts', () => {
    expect(getLevel(150)).toEqual({ color: 'purple', emoji: '🚀' });
    expect(getLevel(75)).toEqual({ color: 'red', emoji: '🔥' });
    expect(getLevel(40)).toEqual({ color: 'orange', emoji: '⚡' });
    expect(getLevel(20)).toEqual({ color: 'green', emoji: '👍' });
    expect(getLevel(5)).toEqual({ color: 'blue', emoji: '😊' });
    expect(getLevel(-5)).toEqual({ color: 'lightblue', emoji: '🙁' });
    expect(getLevel(-20)).toEqual({ color: 'cyan', emoji: '😢' });
    expect(getLevel(-40)).toEqual({ color: 'teal', emoji: '😰' });
    expect(getLevel(-100)).toEqual({ color: 'navy', emoji: '😱' });
  });
});