<script>
  import { onMount } from 'svelte';
  import { fetchNotionData } from '../../lib/notion';
  let speakers = fetchNotionData();

  onMount(async () => {
    speakers = await fetchNotionData();
    // console.log('🚀 ~ file: NameTag.svelte:7 ~ speakers', speakers);
  });
</script>
