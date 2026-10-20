# @healthicons/svelte

[Health Icons](https://healthicons.org) as Svelte components (Svelte 4 and 5): free, open source icons for health projects.

```bash
npm install @healthicons/svelte
```

```svelte
<script>
  import { BloodBag, Heart } from '@healthicons/svelte';
</script>

<BloodBag />
<Heart variant="filled" size={32} color="#6666ff" title="Favorite" />
```

Only the icons you import end up in your app.

## Props

| Prop      | Default                | Description                                                                                                        |
| --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `variant` | `"outline"`            | `"outline"` or `"filled"`                                                                                          |
| `size`    | `24`                   | Width and height. Icons with a version drawn for small sizes use it at 24px and below                              |
| `color`   | the current text color | Any CSS color                                                                                                      |
| `title`   |                        | Shown as a tooltip and read by screen readers. Without it (or `aria-label`) the icon is hidden from screen readers |

Any other attributes (`class`, `style`...) go on the `<svg>` element.

For clicks and other events, use `onclick` in Svelte 5, or `on:click` (Svelte 4 and 5). Common mouse, pointer, touch, keyboard and focus events are passed on, like `on:mouseenter` and `on:keydown`.

## Icon names

Each icon's name is its name on [healthicons.org](https://healthicons.org) in PascalCase: `blood-bag` is `BloodBag`, `blister-pills_oval_x14` is `BlisterPillsOvalX14`. Names that can't start a component use their title: `0`–`9` are `Number0`–`Number9`, `!` is `ExclamationPoint` and `4x4` is `SUV`.

Health Icons are in the public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)); the code is MIT licensed.
