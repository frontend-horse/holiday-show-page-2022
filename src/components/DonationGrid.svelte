<script>
  import { onMount } from 'svelte';
  import { getCampaignData } from '../lib/tiltify';
  import DonationCard from './DonationCard.svelte';

  let donations = [];
  let fundraiserGoalAmount, totalAmountRaised;
  let result;

  onMount(async () => {
    const result = await getCampaignData();

    donations = result.donations;
    fundraiserGoalAmount = result.fundraiserGoalAmount;
    totalAmountRaised = result.totalAmountRaised;
  });
</script>

<ul class="smol-grid">
  {#each donations as donation}
    <li>
      <DonationCard {donation} />
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  .smol-grid {
    --min: 30ch;
    --gap: var(--space-l) var(--space-m);

    display: grid;
    grid-gap: var(--gap);
    /* min() with 100% prevents overflow
  in extra narrow spaces */
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    align-items: stretch;
  }

  li {
    padding-inline: var(--size-5);
    padding-block: var(--size-4);
    border: var(--border-size-1) solid var(--surface-3);
    border-radius: var(--radius-conditional-2);
    box-shadow: var(--shadow-4);
    /* align-self: stretch; */
    display: flex;
  }

  li > span {
    display: block;
  }
</style>
