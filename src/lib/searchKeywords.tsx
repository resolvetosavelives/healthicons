export function searchKeywords(search: string, keywords: string): boolean {
  // If search is empty, return true to show all results
  if (!search || search.trim() === '') {
    return true;
  }

  // Split search terms and filter out empty strings
  const searchTerms = search
    .trim()
    .split(/\s+/)
    .filter((term) => term.length > 0);

  // If no valid search terms after filtering, return true
  if (searchTerms.length === 0) {
    return true;
  }

  // Create a regex pattern that matches all search terms in any order
  // The \b word boundary is removed to better support partial matches
  const pattern = '(?=.*?' + searchTerms.join(')(?=.*?') + ').*';

  return new RegExp(pattern, 'i').test(keywords);
}
