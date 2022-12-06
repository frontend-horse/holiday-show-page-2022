<script>
  import GeneralObserver from './GeneralObserver.svelte';
  export let youTubeId;
  export let containerClass = '';
  export let imageOverride = null;
  let showVideo = false;

  function toggle() {
    showVideo = true;
  }
</script>

<GeneralObserver>
  {#if !showVideo}
    <button
      on:click={toggle}
      class={`${containerClass} youtube-lazy-load__button`}
      aria-label="Play video"
    >
      <img
        class="youtube-lazy-load__thumbnail"
        src={imageOverride ||
          `https://img.youtube.com/vi/${youTubeId}/maxresdefault.jpg`}
        alt=""
      />
      <div class="youtube-lazy-load__icon-wrapper">
        <svg
          class="youtube-lazy-load__play-icon"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          ><path
            fill="currentColor"
            d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
          /></svg
        >
      </div>
    </button>
  {/if}

  {#if showVideo}
    <iframe
      width={560}
      height={315}
      src={`https://www.youtube-nocookie.com/embed/${youTubeId}`}
      frameborder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="YouTube Video"
    />
  {/if}
</GeneralObserver>

<style lang="scss" global>
  .youtube-lazy-load__button {
    background: transparent;
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
  }

  .youtube-lazy-load__thumbnail {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: var(--space-2xs);
    filter: drop-shadow(0 0 0.5rem rgba(9, 6, 53, 0.5));
  }

  .youtube-lazy-load__icon-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 50;
  }

  .youtube-lazy-load__button:hover .youtube-lazy-load__play-icon {
    filter: drop-shadow(0 0 0.5rem rgb(0, 0, 0));
    transform: scale(1.05);
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
  }

  .youtube-lazy-load__play-icon {
    width: 50%;
    height: 50%;
    opacity: 0.75;
    transition: transform 0.3s cubic-bezier(0.5, 1.75, 0.75, 1.25),
      filter 0.3s cubic-bezier(0.5, 1.75, 0.75, 1.25);
    color: white;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4));
  }
</style>
