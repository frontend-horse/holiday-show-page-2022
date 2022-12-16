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
    console.log(newDonationQueue[0]);

    const tl = gsap.timeline();

    // move the whole thing up and fix rotation
    tl.to('.letter-envelope-container', {
      y: -100,
      rotate: 0,
      duration: 1,
      delay: 3,
      scale: 0.7,
    });
    // Open the flap
    tl.to('.flap', { scaleY: 1, transformOrigin: 'bottom center' });
    // Move the letter up
    tl.to(
      '.new-donation-notification',
      { opacity: 1, duration: 1, y: 50 } // Make much longer
    );
    // close the flap
    tl.to('.flap', { scaleY: 0, transformOrigin: 'bottom center' });
    // move the envelope down and out of sight
    tl.to(
      '.envelope',
      {
        y: 600,
        x: 100,
        rotate: -30,
        duration: 1,
      },
      '<'
    );

    // Move the letter off to the right
    tl.to('.new-donation-notification', {
      duration: 1,
      x: 700,
      delay: 3,
    });
    //reset everything

    tl.to('.new-donation-notification', {
      opacity: 0,

      duration: 1,
      delay: 1,
      onComplete: () => {
        resetAnimation();
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

  function resetAnimation() {
    const tl = gsap.timeline();
    // make everything invisible
    tl.to('.letter-envelope-container', { opacity: 0 });

    // move everything back to where it goes
    tl.to('.new-donation-notification', { y: 230, x: 0 });
    tl.to('.envelope', { y: 0, x: 0, rotate: 0 });
    tl.to('.letter-envelope-container', {
      x: -35,
      y: 300,
      rotate: -30,
      scale: 0.5,
    });

    tl.to('.letter-envelope-container', { opacity: 1 });
    tl.to('.flap', { scaleY: 0, transformOrigin: 'bottom center' });
  }

  onMount(() => {
    function init() {
      console.log('init');
      gsap.set('.donation-list-root', { opacity: 1 });

      resetAnimation();
      onNewDonation();
    }

    init();
  });
</script>

<div class="donation-list-root">
  <div class="letter-envelope-container">
    <div class="letter new-donation-notification">
      <div class="name">
        {newDonationQueue[0]?.name}
      </div>
      <div class="amount">${newDonationQueue[0]?.amount}</div>
      <div class="message">
        {newDonationQueue[0]?.comment}
      </div>
    </div>
    <div class="envelope">
      <svg
        width="429"
        height="541"
        viewBox="0 0 429 541"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="flap"
          d="M228.4 5.9a20 20 0 0 0-28.3 0L5.9 200c-4 4-6 9.3-5.9 14.6h428.4a20 20 0 0 0-5.8-14.6L228.4 5.9Z"
          fill="url(#paint0_radial_5_24)"
        />
        <path
          d="M.2 214.7h428v318a8 8 0 0 1-8 8H8.2a8 8 0 0 1-8-8v-318Z"
          fill="url(#paint1_radial_5_24)"
        />
        <text x="50%" y="363" class="text">New</text>
        <text x="50%" y="413" class="text">Donation</text>
        <defs>
          <radialGradient
            id="paint0_radial_5_24"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-214.2 0 0 -263 214.2 96.8)"
          >
            <stop stop-color="#FFFBEC" />
            <stop offset="1" stop-color="#FBF0C5" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_5_24"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-214 0 0 -399.2 214.2 361.7)"
          >
            <stop stop-color="#FFFBEC" />
            <stop offset="1" stop-color="#FBF0C5" />
          </radialGradient>
        </defs>
        <style>
          .text {
            font-family: Recoleta;
            fill: #800808;
            font-size: 40px;
            font-weight: 700;
            text-anchor: middle;
            dominant-baseline: middle;
          }
        </style>
      </svg>
    </div>
  </div>
  {#if !newDonationQueue.length}
    <DonationListIdle donations={$campaignData?.donations} />
  {/if}
</div>

<style lang="scss">
  .letter-envelope-container {
    display: grid;
    grid-template-areas: 'stack';
  }

  .letter-envelope-container > * {
    grid-area: stack;
  }

  .donation-list-root {
    position: relative;
    width: var(--letter-width);
    height: 100%;
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
    color: #333;
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
    width: 420px;
    padding-bottom: 10px;
    color: #333;
    border-radius: 0.25rem;
    background: wheat;
    padding: 15px;
    height: 300px;

    .name {
      font-family: 'Poppins';
      font-weight: bold;
    }
  }
  .envelope {
    position: absolute;

    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
    width: 421px;

    z-index: 100;

    .flap {
      /* position: absolute; */
      /* top: -64%; */
      transform-origin: bottom center;
      /* left: -0.5px; */
      /* transform: scale(1.005); */
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
