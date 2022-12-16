<script>
  import gsap from 'gsap';
  export let donations = [];
  import { onMount } from 'svelte';
  import DoctorsWithoutBordersLogo from './DoctorsWithoutBordersLogo.svelte';

  $: currentDonation = [];

  // Create a list of unique donor names, removing duplicates
  // Sort the list by the sum of all donations made by each donor
  $: uniqueDonorNames = currentDonation
    ? currentDonation
        .map((donation) => donation.name)
        .filter((name, index, self) => self.indexOf(name) === index)
        .sort((a, b) => {
          const aSum = currentDonation
            .filter((donation) => donation.name === a)
            .reduce((acc, donation) => acc + donation.amount, 0);
          const bSum = currentDonation
            .filter((donation) => donation.name === b)
            .reduce((acc, donation) => acc + donation.amount, 0);
          return bSum - aSum;
        })
        .filter((name) => name !== 'Anonymous')
    : [];

  const animate = () => {
    // Update and freeze current donations on each cycle
    currentDonation = donations;

    const tl = gsap.timeline({
      repeat: 0,
      repeatDelay: 3,
      repeatRefresh: true,
    });

    const latestDonationsState = {
      active: {
        x: 0,
        y: 0,
        rotation: -2,
        transformOrigin: 'top left',
        duration: 1,
      },
      inactive: {
        x: 400,
        y: 50,
        rotation: 0,
        transformOrigin: 'top left',
        duration: 1,
      },
    };

    const allDonorsState = {
      active: {
        x: 0,
        y: 0,
        rotation: -2,
        transformOrigin: 'top left',
        duration: 1,
      },
      inactive: {
        x: 400,
        y: 50,
        rotation: 0,
        transformOrigin: 'top left',
        duration: 1,
      },
    };

    const promotionCardState = {
      active: {
        x: 0,
        y: 0,
        rotation: -2,
        transformOrigin: 'top left',
        duration: 1,
      },
      inactive: {
        x: 400,
        y: 50,
        rotation: 0,
        transformOrigin: 'top left',
        duration: 1,
      },
      resetScroll: { y: 0, duration: 0 },
    };

    // Show Latest donations list
    tl.to('.latest-donations-list', latestDonationsState.active);
    tl.to('.all-donors-list', allDonorsState.inactive, '0');
    tl.to('.promotion-card', promotionCardState.inactive, 0);

    // Show All donors list
    if (uniqueDonorNames.length) {
      tl.to('.all-donors-list', allDonorsState.active, '+=3');
    }
    tl.to('.latest-donations-list', latestDonationsState.inactive, '<');
    tl.to('.promotion-card', promotionCardState.inactive, '<');

    if (uniqueDonorNames.length) {
      //Scroll All Donors List
      tl.to(
        '.donor-list',
        {
          ease: 'none',
          y: () => Math.min(uniqueDonorNames.length * -40, 0),
          duration: () => uniqueDonorNames.length * 0.7,
        },
        '+=0.5'
      );
    }

    // Show Promotion card
    tl.to('.promotion-card', promotionCardState.active, '+=1');
    tl.to('.all-donors-list', allDonorsState.inactive, '<');
    tl.to('.latest-donations-list', latestDonationsState.inactive, '<');
    tl.to('.donor-list', promotionCardState.resetScroll, '1');

    tl.timeScale(1.2);

    // We're forced to loop the timeline manually because duration cannot be recomputed
    // See: https://greensock.com/forums/topic/30393-update-timeline-variables-when-refreshed/?do=findComment&comment=151767
    tl.eventCallback('onComplete', () => {
      setTimeout(animate, 3000);
    });
  };

  onMount(() => {
    animate();
  });
</script>

<div>
  <div class="donation-list latest-donations-list">
    <h3>Latest Donations</h3>
    <div class="letters">
      {#if donations?.length}
        {#each donations as donation}
          <div class="letter">
            <div class="name">{donation.name} - ${donation.amount}</div>
            {#if donation.comment}
              <div class="comment">
                {donation.comment}
              </div>
            {/if}
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <div class="donation-list all-donors-list">
    <h3>All {uniqueDonorNames.length} Donors</h3>
    <div class="donor-list-container">
      <div class="donor-list">
        {#each uniqueDonorNames as name}
          <div class="name">{name}</div>
        {/each}
      </div>
    </div>
  </div>

  <div class="donation-list promotion-card">
    <div class="donation-promo">
      To donate visit:
      <span class="url">fundraiser.horse</span>
      <DoctorsWithoutBordersLogo />
      <span class="promo-details"
        >Your donations will be matched by our sponsors until we hit our goal.</span
      >
    </div>
  </div>
</div>

<style lang="scss">
  .donation-list {
    background: wheat;
    border-radius: 3px;
    width: 85%;

    top: 0;
    left: 0;
    position: absolute;
    z-index: 5;
    padding: 20px;
    display: block;
    color: hsl(0, 30%, 9%);

    transform: rotate(-3deg) translate(5px, 10px);
    box-shadow: 0 5px 20px rgba($color: #000000, $alpha: 0.5);
  }
  .letters {
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    color: hsl(0, 100%, 29%);
  }

  .letter {
    box-sizing: border-box;

    width: 100%;

    text-align: center;
    display: grid;

    gap: 10px;
  }

  .name {
    font-size: 20px;
    line-height: 1.1;
    font-family: 'Poppins';
    font-weight: bold;
  }
  .amount {
  }
  .comment {
    font-size: 16px;
    text-align: left;
  }

  .all-donors-list {
    height: 400px;
  }

  .donor-list-container {
    position: relative;
    overflow: hidden;
    height: 340px;
    padding-block-start: 30px;
    margin-block-start: -5px;
    z-index: -1;
  }

  .donor-list-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(rgba(245, 222, 179, 0), rgba(245, 222, 179, 1));
  }

  .donor-list-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    z-index: 1;
    background: linear-gradient(rgba(245, 222, 179, 1), rgba(245, 222, 179, 0));
  }

  .donor-list {
    box-sizing: border-box;

    position: absolute;
    display: grid;
    gap: 16px;
    text-align: center;
    width: calc(100%);
  }

  .donor {
    font-size: 20px;
    line-height: 1.1;
  }

  .donation-promo {
    font-size: 28px;
    text-align: center;
    color: hsl(0, 100%, 29%);
    font-family: 'Recoleta';
    font-weight: 600;
    display: grid;
    padding: 10px 0;
  }

  .url {
    font-family: 'Poppins', monospace;
    font-size: 28px;

    color: hsl(0, 30%, 9%);
    font-weight: 700;
    display: block;
    margin-bottom: 26px;
  }
  .promo-details {
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    margin-top: 30px;
    color: hsl(0, 30%, 19%);
    line-height: 1.5;
  }
</style>
