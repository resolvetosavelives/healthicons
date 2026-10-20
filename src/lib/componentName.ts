// An icon's name in the packages (@healthicons/react and the others), used
// by the package build (src/scripts/buildPackages.ts) and shown in the icon
// modal so it can be copied.

function pascalCase(text: string) {
  return text
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
}

// names for icons whose usual name wouldn't fit with similar icons
const COMPONENT_NAMES: Record<string, string> = {
  // like Network4g and Network5g (from network-4g and network-5g)
  '2g': 'Network2g',
  '3g': 'Network3g'
};

// BloodBag from blood-bag. Names that can't be JavaScript names (0, 4x4, !)
// come from the title instead (Number0, SUV, ExclamationPoint).
export function componentName(id: string, title: string) {
  if (COMPONENT_NAMES[id]) {
    return COMPONENT_NAMES[id];
  }
  const valid = (name: string) => /^[A-Z][A-Za-z0-9]*$/.test(name);
  for (const name of [pascalCase(id), pascalCase(title)]) {
    if (valid(name)) {
      return name;
    }
  }
  if (valid(`Number${pascalCase(id)}`)) {
    return `Number${pascalCase(id)}`;
  }
  throw new Error(`No component name for "${id}" (${title})`);
}
