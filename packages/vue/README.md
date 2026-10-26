# @healthicons/vue

[Health Icons](https://healthicons.org) as Vue 3 components: free, open source icons for health projects.

```bash
npm install @healthicons/vue
```

```vue
<script setup>
import { BloodBag, Heart } from '@healthicons/vue';
</script>

<template>
  <BloodBag />
  <Heart variant="filled" :size="32" color="#6666ff" title="Favorite" />
</template>
```

Only the icons you import end up in your app.

## Props

| Prop      | Default                | Description                                                                                                        |
| --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `variant` | `"outline"`            | `"outline"` or `"filled"`                                                                                          |
| `size`    | `24`                   | Width and height. Icons with a version drawn for small sizes use it at 24px and below                              |
| `color`   | the current text color | Any CSS color                                                                                                      |
| `title`   |                        | Shown as a tooltip and read by screen readers. Without it (or `aria-label`) the icon is hidden from screen readers |

Other attributes and listeners (`class`, `style`, `@click`...) go on the `<svg>` element.

## Icon names

Each icon's name is its name on [healthicons.org](https://healthicons.org) in PascalCase: `blood-bag` is `BloodBag`, `blister-pills_oval_x14` is `BlisterPillsOvalX14`. Names that can't start a component use their title: `0`–`9` are `Number0`–`Number9`, `!` is `ExclamationPoint` and `4x4` is `SUV`.

Health Icons and this package's code are in the public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)).
