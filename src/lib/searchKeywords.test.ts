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

  test('ignores case', () => {
    expect(searchKeywords('QUICK Fox', 'quick brown fox')).toBe(true);
  });

  test('plurals match singular tags', () => {
    expect(searchKeywords('pills', 'Pill, Drug')).toBe(true);
    expect(searchKeywords('allergies', 'Allergy')).toBe(true);
    expect(searchKeywords('crutches', 'Crutch')).toBe(true);
    expect(searchKeywords('boxes', 'Empty Box')).toBe(true);
    expect(searchKeywords('lungs drugs', 'Lung, Drug')).toBe(true);
    expect(searchKeywords('glasses', 'Glasses')).toBe(true);
  });

  test('plural matching does not loosen other words', () => {
    expect(searchKeywords('virus', 'Viru')).toBe(false);
    expect(searchKeywords('glass', 'Gla')).toBe(false);
    expect(searchKeywords('gas', 'Ga')).toBe(false);
    expect(searchKeywords('pills', 'Drug')).toBe(false);
  });

  test('special characters are matched as text', () => {
    expect(searchKeywords('[', 'quick brown fox')).toBe(false);
    expect(searchKeywords('(', 'blood type (rh+)')).toBe(true);
    expect(searchKeywords('rh+', 'blood type rh+')).toBe(true);
    expect(searchKeywords('*', 'quick brown fox')).toBe(false);
    expect(searchKeywords('.', 'quick brown fox')).toBe(false);
    expect(searchKeywords('a\\', 'quick brown fox')).toBe(false);
  });
});
