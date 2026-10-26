# @healthicons/core

[Health Icons](https://healthicons.org) for any website or JavaScript project, without a framework: free, open source icons for health projects. For React, Vue and Svelte there are [@healthicons/react](https://www.npmjs.com/package/@healthicons/react), [@healthicons/vue](https://www.npmjs.com/package/@healthicons/vue) and [@healthicons/svelte](https://www.npmjs.com/package/@healthicons/svelte).

```bash
npm install @healthicons/core
```

## Placeholders in your HTML

```html
<i data-healthicon="blood-bag"></i>
<i data-healthicon="heart" data-variant="filled" data-size="32" class="big"></i>
```

```js
import { createIcons, BloodBag, Heart } from '@healthicons/core';

createIcons({ icons: { BloodBag, Heart } });
```

Each placeholder is replaced by its icon. Placeholders can set `data-variant`, `data-size`, `data-color` and `data-title`, and their other attributes (`class`, `aria-label`...) carry over. Use the icon's name from [healthicons.org](https://healthicons.org) (`blood-bag`).

To use every icon, pass them all (this includes all of them in your bundle):

```js
import { createIcons, icons } from '@healthicons/core';

createIcons({ icons });
```

`createIcons` also takes `attrs` (options for every icon) and `root` (where to look; the whole page by default).

## SVG strings and elements

```js
import { toSvg, createElement, BloodBag } from '@healthicons/core';

const svg = toSvg(BloodBag, { variant: 'filled', size: 32, color: '#6666ff' });
document.body.append(createElement(BloodBag, { title: 'Blood bag' }));
```

## Options

| Option    | Default                | Description                                                                                                        |
| --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `variant` | `"outline"`            | `"outline"` or `"filled"`                                                                                          |
| `size`    | `24`                   | Width and height. Icons with a version drawn for small sizes use it at 24px and below                              |
| `color`   | the current text color | Any CSS color                                                                                                      |
| `title`   |                        | Shown as a tooltip and read by screen readers. Without it (or `aria-label`) the icon is hidden from screen readers |

Any other options (`class`, `style`, `aria-label`...) become attributes of the `<svg>` element.

## Icon names

In JavaScript each icon's name is its name on [healthicons.org](https://healthicons.org) in PascalCase: `blood-bag` is `BloodBag`. Names that can't start a JavaScript name use their title: `0`–`9` are `Number0`–`Number9`, `!` is `ExclamationPoint` and `4x4` is `SUV`.

Health Icons and this package's code are in the public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)).
