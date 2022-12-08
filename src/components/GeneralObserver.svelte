<script>
  import { onMount } from 'svelte';

  export let once = false;
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;
  export let center = false;
  // TODO: Make this take a height so it maintains the space of the child component.
  export let height = 400;

  let intersecting = false;
  let container;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

      const observer = new IntersectionObserver(
        (entries) => {
          intersecting = entries[0].isIntersecting;
          if (intersecting && once) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
        }
      );

      observer.observe(container);
      return () => observer.unobserve(container);
    }

    function handler() {
      const bcr = container.getBoundingClientRect();
      console.log(bcr.top, bcr.bottom);
      if (center) {
        intersecting =
          bcr.bottom + bottom > 0 &&
          bcr.right + right > 0 &&
          bcr.top - top < window.innerHeight &&
          bcr.left - left < window.innerWidth;
      } else {
        intersecting =
          bcr.bottom + bottom > 0 &&
          bcr.right + right > 0 &&
          bcr.top - top < window.innerHeight &&
          bcr.left - left < window.innerWidth;
      }

      if (intersecting && once) {
        window.removeEventListener('scroll', handler);
      }
    }

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<div bind:this={container} style="--observer-height:{height}px;">
  <slot {intersecting} />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    min-height: var(--observer-height) px;
  }
</style>
