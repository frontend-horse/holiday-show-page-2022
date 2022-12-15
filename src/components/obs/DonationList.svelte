<script>
  import gsap from 'gsap';
  import { onMount } from 'svelte';
  import { campaignData } from './stores.js';
  import DonationListIdle from './DonationListIdle.svelte';

  $: newDonationQueue = [];
  let resolvedDonationQueue = [];
  let registeredDonationIDs = [];

  $: $campaignData, checkForNewDonations();

  function checkForNewDonations() {
    if ($campaignData?.donations) {
      const fiveMinutesAgo = Date.now() - 1000 * 60 * 5;
      // Check if any donations in $campaignData.donations need to be processed
      // If so, add them to newDonationQueue
      $campaignData.donations.forEach((donation) => {
        if (!registeredDonationIDs.includes(donation.id)) {
          if (
            donation.completedAt > fiveMinutesAgo ||
            donation.updatedAt > fiveMinutesAgo
          ) {
            newDonationQueue.push(donation);
          } else {
            resolvedDonationQueue.push(donation);
          }

          registeredDonationIDs.push(donation.id);
        }
      });

      onNewDonation();
    }
  }

  let animationState = 'PAUSED';

  function onNewDonation() {
    if (newDonationQueue.length) {
      if (animationState === 'PAUSED') {
        animationState = 'PLAYING';
        cycleDonationNotification();
      }
    }
  }

  function cycleDonationNotification() {
    console.log('Called');
    const tl = gsap.timeline();
    tl.fromTo(
      '.new-donation-notification',
      { opacity: 0 },
      { opacity: 1, duration: 0.1 } // Make much longer
    );
    tl.to('.new-donation-notification', {
      opacity: 0,
      duration: 0.1,
      delay: 0.5,
      onComplete: () => {
        const [first, ...rest] = newDonationQueue;
        newDonationQueue = rest;
        resolvedDonationQueue = [...resolvedDonationQueue, first];
        if (newDonationQueue.length) {
          cycleDonationNotification();
        } else {
          animationState = 'PAUSED';
        }
      },
    });
  }

  onMount(() => {
    function init() {
      console.log('init');
      gsap.set('.envelope', { y: 600 });

      gsap.set('.new-donation-notification', { opacity: 0 });
      gsap.set('.donation-list-root', { opacity: 1 });
      onNewDonation();
    }

    init();
  });
</script>

<div class="donation-list-root">
  {#if newDonationQueue.length}
    <div>
      <div class="envelope">
        <svg class="flap" viewBox="0 0 430 215" fill="none">
          <path
            d="M229.1 6.1a20 20 0 0 0-28.2 0L6.6 200.4c-4 4-6 9.3-5.8 14.6h428.4a20 20 0 0 0-5.8-14.6L229 6Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div class="letter new-donation-notification">
        <div class="eyebrow">New donation</div>
        <div class="name">
          {newDonationQueue[0].name}
          {newDonationQueue.length}
        </div>
        <div class="amount">${newDonationQueue[0].amount}</div>
        <div class="message">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  {:else}
    <DonationListIdle donations={$campaignData?.donations} />
  {/if}
</div>

<style lang="scss">
  :root {
    --letter-width: 330px;
  }
  .donation-list-root {
    position: relative;
    width: var(--letter-width);
    height: 100%;
    border: 1px solid red;
    opacity: 0;
  }

  .donation-list {
    background: wheat;
    border-radius: 3px;
    width: 105%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 5;
    padding: 20px;
    color: #000;
    transform: rotate(-3deg) translate(5px, 10px);
    box-shadow: 0 5px 20px rgba($color: #000000, $alpha: 0.5);
  }
  .letters {
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin-bottom: 10px;
    opacity: 0.3;
  }
  .letter {
    width: 120%;
    padding-bottom: 10px;
    color: #000;
    border-radius: 0.25rem;

    .name {
      font-family: 'Poppins';
      font-weight: bold;
    }
  }
  .envelope {
    position: absolute;
    background: cornflowerblue;
    box-shadow: 0 2px 4px rgba($color: #000000, $alpha: 0.5);
    /* bottom: -400px; */
    /* right: 0; */
    width: 320px;

    padding: 2px;
    z-index: 100;
    /* transform: rotate(-2deg) translateX(10px) translateY(-200%); */
    /* transform-origin: 100% 100%; */
    .flap {
      position: absolute;
      top: -65%;
      transform-origin: bottom center;

      z-index: -1;
    }
    .letter {
      background: wheat;
      width: 100%;
      padding: 15px;
      max-height: 240px;
      // overflow: hidden;
      box-shadow: 0 5px 20px rgba($color: #000000, $alpha: 0.5);
      text-align: center;
      display: flex;
      flex-direction: column;
      // translate: 0% -100%;
      padding-bottom: 200px;
      gap: 10px;
      .name {
        font-size: 150%;
        line-height: 1.1;
      }
      .amount {
        /* color: red; */
      }
      .message {
        font-size: 85%;
        text-align: left;
      }
    }
  }
</style>
