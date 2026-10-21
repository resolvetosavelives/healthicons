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

  // Every search term must appear somewhere in the keywords, in any order and
  // as part of a word. Plain text matching, so any character can be searched
  // for (a regular expression broke on characters like "[" or "(")
  const text = keywords.toLowerCase();
  return searchTerms.every((term) => text.includes(term.toLowerCase()));
}
