<script>
  import { onMount } from 'svelte';
  import { getAllSponsors } from '../../lib/prismicio';
  import gsap from 'gsap';

  let sponsors = [];
  onMount(() => {
    getAllSponsors()
      .then((data) => {
        sponsors = data;
      })
      .then(() => {
        const slideDelay = 15;
        const slideDuration = 0.7;
        const wrap = true;

        const slides = document.querySelectorAll('.carousel-logo');
        const progressWrap = gsap.utils.wrap(0, 1);

        const numSlides = slides.length;

        gsap.set(slides, {
          xPercent: (i) => i * 100,
        });

        gsap.to(slides, { opacity: 1 });

        const wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
        const timer = gsap.delayedCall(slideDelay, autoPlay);

        const animation = gsap.to(slides, {
          xPercent: '+=' + numSlides * 100,
          duration: 1,
          ease: 'none',
          paused: true,
          repeat: -1,
          modifiers: {
            xPercent: wrapX,
          },
        });

        const proxy = document.createElement('div');
        let slideAnimation = gsap.to({}, {});
        let slideWidth = 0;
        let wrapWidth = 0;

        resize();

        window.addEventListener('resize', resize);

        function animateSlides(direction) {
          timer.restart(true);
          slideAnimation.kill();
          const x = snapX(
            gsap.getProperty(proxy, 'x') + direction * slideWidth
          );

          slideAnimation = gsap.to(proxy, {
            ease: 'back.inOut(1.7)',
            x,
            duration: slideDuration,
            onUpdate: updateProgress,
          });
        }

        function autoPlay() {
          animateSlides(-1);
        }

        function updateProgress() {
          animation.progress(
            progressWrap(gsap.getProperty(proxy, 'x') / wrapWidth)
          );
        }

        function snapX(value) {
          const snapped = gsap.utils.snap(slideWidth, value);
          return wrap
            ? snapped
            : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
        }

        function resize() {
          const norm = gsap.getProperty(proxy, 'x') / wrapWidth || 0;

          slideWidth = slides[0].offsetWidth;
          wrapWidth = slideWidth * numSlides;

          wrap;

          gsap.set(proxy, {
            x: norm * wrapWidth,
          });

          animateSlides(0);
          slideAnimation.progress(1);
        }
      });
  });
</script>

<div class="sponsor-carousel">
  All donations matched by our sponsors
  <div class="logo-container">
    {#each sponsors as sponsor}
      <div class="carousel-logo">
        <img src={sponsor.data.logo.url} alt={sponsor.name} class="" />
      </div>
    {/each}
  </div>
</div>

<style>
  .sponsor-carousel {
    font-weight: 600;
    font-size: 20px;
    color: hsla(223, 78%, 20%, 1);
    display: grid;
    place-items: center;
    padding-inline: 30px;
  }

  .logo-container {
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 50px;
    width: 300px;
    height: 110px;
  }
  .carousel-logo {
    position: absolute;
    width: 340px;
    height: 110px;
    padding: 20px;
  }

  img {
    padding-left: 40px;
    width: 250px;
    margin: auto;
    height: auto;
  }
</style>
