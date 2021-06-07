export function searchKeywords(search: string, keywords: string): boolean {
  return new RegExp(
    '(?=.*?\\b' + search.split(' ').join(')(?=.*?\\b') + ').*',
    'i'
  ).test(keywords);
}
