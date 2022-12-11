<script>
  import { onMount } from 'svelte';
  import { fetchNotionData } from '../../lib/notion';
  let speakers;

  onMount(async () => {
    speakers = await fetchNotionData();
    console.log('🚀 ~ file: NameTag.svelte:7 ~ speakers', speakers);
    // fetch notion data every 10 seconds
    setInterval(async () => {
      speakers = await fetchNotionData();
    }, 10000);
  });
  // Find next item in speakers array with speaker.complete === false
  $: currentSpeaker = speakers?.find((speaker) => speaker.complete === false);
</script>

<div>
  {#if currentSpeaker}
    {currentSpeaker.name}
  {/if}
</div>
