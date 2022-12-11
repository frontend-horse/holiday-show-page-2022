<script>
  import { campaignData } from './stores.js';
</script>

<!-- Use the store in your component -->
<ul>
  {#if $campaignData}
    {#each $campaignData?.donations as item}
      <li>{item.name}</li>
    {/each}
  {/if}
</ul>
