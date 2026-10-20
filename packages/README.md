# Health Icons packages

The icons as packages for websites and apps, like [Lucide's](https://lucide.dev/packages):

| Package                       | For                       |
| ----------------------------- | ------------------------- |
| [@healthicons/core](core)     | Any website or JavaScript |
| [@healthicons/react](react)   | React                     |
| [@healthicons/vue](vue)       | Vue 3                     |
| [@healthicons/svelte](svelte) | Svelte 4 and 5            |

They're built from the icons in `public/icons` (the same ones as the site and the `healthicons` package), so build them after updating the icons.

## How they're made

`src/scripts/buildPackages.ts` reads `public/icons/meta-data.json` and the SVGs and writes each package's `dist` folder: one module per icon holding its drawings (outline, filled, and the 24px versions where there are any), plus a little code per framework to draw them. The hand-written parts are:

- `shared/shared.js`: picking the drawing for a size, and the `<svg>` element's attributes (used by every package)
- `<package>/src`: each package's code and its TypeScript types (`index.d.ts`, with a line per icon added by the build)
- `<package>/package.json` and `README.md`: what npm shows

`dist` folders aren't committed.

## Publishing

1. Update the icons (`yarn update-icons`) and build the packages:

   ```bash
   yarn build-packages
   ```

2. Raise the version in each package's `package.json` (they share a version): the middle number for new icons, the first for renamed or removed ones.
3. Publish each package from its folder, logged in to npm as a member of the healthicons organization:

   ```bash
   cd packages/react && npm publish
   ```
