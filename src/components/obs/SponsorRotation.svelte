<script>
  import { getAllSponsors } from '../../lib/prismicio';

  let sponsors = getAllSponsors();

  // TODO: Animate the logos rotating in and out
</script>

<div style="background:black">
  Sponsored by
  <div>
    {#await sponsors then sponsors}
      {#each sponsors as sponsor}
        <img src={sponsor.data.logo.url} alt={sponsor.name} />
      {/each}
    {/await}
  </div>
</div>
