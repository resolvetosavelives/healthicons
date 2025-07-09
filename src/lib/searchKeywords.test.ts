import { searchKeywords } from './searchKeywords';

describe('searchKeywords', () => {
  test('match single word', () => {
    expect(searchKeywords('quick', 'quickly')).toBe(true);
  });

  test('match multiple words in correct order', () => {
    expect(searchKeywords('quick br', 'quick brown fox')).toBe(true);
  });

  test('match multiple words in different order', () => {
    expect(searchKeywords('fox quick', 'quick brown fox')).toBe(true);
  });

  test('two partial words', () => {
    expect(searchKeywords('qu fo', 'quick brown fox')).toBe(true);
  });

  test('NO match multiple words', () => {
    expect(searchKeywords('bear', 'quick brown fox')).toBe(false);
  });

  test('NO match multiple search terms', () => {
    expect(searchKeywords('brown bear', 'quick brown fox')).toBe(false);
  });

  // New tests for improved functionality
  test('empty search returns true', () => {
    expect(searchKeywords('', 'quick brown fox')).toBe(true);
  });

  test('whitespace-only search returns true', () => {
    expect(searchKeywords('   ', 'quick brown fox')).toBe(true);
  });

  test('partial word match without word boundary', () => {
    expect(searchKeywords('ow', 'quick brown fox')).toBe(true);
  });

  test('multiple partial matches', () => {
    expect(searchKeywords('ick ow', 'quick brown fox')).toBe(true);
  });
});
