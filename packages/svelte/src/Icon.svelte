<script>
  import { DEFAULT_SIZE, getDrawing, svgAttributes } from './shared.js';

  export let icon;
  export let variant = 'outline';
  export let size = DEFAULT_SIZE;
  export let color = undefined;
  export let title = undefined;

  $: drawing = getDrawing(icon, variant, size);
  $: attributes = svgAttributes(icon, drawing, {
    size,
    color,
    title,
    class: $$props.class,
    'aria-label': $$props['aria-label'],
    'aria-labelledby': $$props['aria-labelledby']
  });
</script>

<!-- attributes passed in win over ours, apart from class: theirs are added.
     Events are passed on, so on:click and the like work on the icons (they're
     also passed on by each icon's component, see buildPackages.ts). Svelte 4
     warns about events on an element people can't tab to; the icon is only
     interactive if the app makes it so (in a button, or with a role and
     tabindex), as with any element. -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
  {...attributes}
  {...$$restProps}
  class={attributes.class}
  on:click
  on:dblclick
  on:contextmenu
  on:mousedown
  on:mouseup
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:pointerdown
  on:pointerup
  on:pointerenter
  on:pointerleave
  on:touchstart
  on:touchend
  on:keydown
  on:keyup
  on:focus
  on:blur
>
  {#if title}<title>{title}</title>{/if}
  {#each drawing.nodes as [tag, attrs, children]}
    {#if children}
      <svelte:element this={tag} {...attrs}>
        {#each children as [childTag, childAttrs]}
          <svelte:element this={childTag} {...childAttrs} />
        {/each}
      </svelte:element>
    {:else}
      <svelte:element this={tag} {...attrs} />
    {/if}
  {/each}
  <slot />
</svg>
