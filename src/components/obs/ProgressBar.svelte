<script>
  import { onMount } from 'svelte';
  import { campaignData } from './stores.js';

  // console.log($campaignData);

  import gsap from 'gsap';
  import ChristmasTree from './ChristmasTree.svelte';

  onMount(() => {
    const mainTl = gsap.timeline({ defaults: { ease: 'none' } });

    gsap.set(`.christmastree`, {
      transformOrigin: 'bottom center',
      scale: 0,
    });

    gsap.set(`.ball-1,.ball-2,.ball-3,.ball-4,.ball-5,.ball-6`, {
      opacity: 1,
      transformOrigin: 'top center',
      scale: 0,
    });
    gsap.set(`.star`, {
      transformOrigin: 'bottom center',
      scale: 0,
    });
    gsap.set(`.present`, {
      transformOrigin: 'bottom center',
      scale: 0,
      y: 1,
      x: 9,
    });
    gsap.set(`.present-2`, {
      transformOrigin: 'bottom center',
      scale: 0,
      x: 20,
    });
    gsap.set(`.present-3`, {
      transformOrigin: 'bottom center',
      scale: 0,
      x: 38,
    });

    function createTreeTimeline(i) {
      const tl = gsap.timeline({ defaults: { ease: 'elastic.out(1, 0.3)' } });
      tl.to(`.tree-${i} .christmastree`, { scale: 1, duration: 3 });
      tl.to(`.tree-${i} .tree-placeholder`, { opacity: 0, duration: 1 }, '-=3');
      tl.to(`.tree-${i} .ball-1`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .ball-2`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .ball-3`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .ball-4`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .ball-5`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .ball-6`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .present`, { scale: 1, duration: 1 });
      tl.to(`.tree-${i} .present-3`, { scale: 0.85, duration: 1 });
      tl.to(`.tree-${i} .present-2`, { scale: 1.2, duration: 1 });
      tl.to(`.tree-${i} .star`, {
        scale: 1,
        duration: 1,
        y: -6,
        rotation: '360deg',
        transformOrigin: 'center',
      });
      mainTl.add(tl);
    }

    for (let i = 0; i < 10; i++) {
      createTreeTimeline(i);
    }

    // mainTl.pause();
    // mainTl.timeScale(4);
    // mainTl.progress(0.67);

    // TODO: Write a function to update the progress of the timeline based on the donation and index
    // TODO: Add gsap labels between the tweens to determine where the progress should be
  });
</script>

<!-- Create an instance of the svg #christmas-tree with 'use' -->
<!-- loop through and make 9 divs -->

<div class="progress-bar">
  <div class="header-row">
    <div class="header">Fundraiser Progress</div>
    <div class="header">$5,500 / $20,000</div>
  </div>
  <div class="christmastree-container">
    {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as i}
      <ChristmasTree index={i} />
    {/each}
  </div>
</div>

<style>
  .progress-bar {
    display: grid;
    font-size: 20px;
    font-weight: 650;
    color: hsla(223, 78%, 20%, 1);
  }
  .header-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .christmastree-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
    /* height: 100%; */
  }
</style>
