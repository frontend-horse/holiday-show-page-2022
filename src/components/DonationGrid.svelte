<script>
  import { onMount } from "svelte";
  import { getCampaignData } from "../lib/tiltify";

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
      <span>
        {donation.name}
      </span>
      <span>
        ${donation.amount}
      </span>
      <span>
        {donation.completedAt}
      </span>
      <span>
        {donation.comment}
      </span>
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
    --gap: 1rem;

    display: grid;
    grid-gap: var(--gap);
    /* min() with 100% prevents overflow
  in extra narrow spaces */
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  }

  li {
    padding-inline: var(--size-5);
    padding-block: var(--size-4);
    border: var(--border-size-1) solid var(--surface-3);
    border-radius: var(--radius-conditional-2);
    box-shadow: var(--shadow-4);
  }

  li > span {
    display: block;
  }
</style>
