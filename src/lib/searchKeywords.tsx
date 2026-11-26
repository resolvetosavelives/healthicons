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
  return searchTerms.every((term) =>
    singularForms(term.toLowerCase()).some((form) => text.includes(form))
  );
}

// Tags are singular ("Pill"), but people often search in the plural
// ("pills"), so a plural also matches its singular. Short words are left
// alone, as are words ending in "ss" ("glass") or "us" ("virus").
function singularForms(term: string): string[] {
  const forms = [term];
  if (term.length <= 3 || /(ss|us)$/.test(term)) {
    return forms;
  }
  if (term.endsWith('ies')) {
    forms.push(term.slice(0, -3) + 'y'); // allergies -> allergy
  }
  if (/(ches|shes|sses|xes|zes)$/.test(term)) {
    forms.push(term.slice(0, -2)); // crutches -> crutch
  }
  if (term.endsWith('s')) {
    forms.push(term.slice(0, -1)); // pills -> pill
  }
  return forms;
}
