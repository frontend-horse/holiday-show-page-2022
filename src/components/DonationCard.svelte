<script>
  export let donation;
</script>

<div class="donation-card">
  <div class="heading">
    <span>
      {donation.name}
    </span>
    <span>
      ${donation.amount}
    </span>
  </div>

  <p class="comment">
    {donation.comment}
  </p>
</div>

<style>
  /* Card adapted from */
  /* https://codepen.io/gayane-gasparyan/pen/jOmaBQK */
  @property --rotate {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  :root {
    --border-size: var(--space-2xs);
    --spin-duration: 3.5s;
  }

  .donation-card {
    display: grid;
    background: #ffffff;
    padding: var(--space-xs);
    position: relative;
    border-radius: var(--space-2xs);
    place-items: stretch;
    justify-items: stretch;
    width: 100%;
    color: #333;
    grid-template-rows: min-content auto;
    gap: var(--space-xs);
    max-width: 500px;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    font-size: var(--step--1);
    font-weight: 700;
    width: 100%;
  }

  .comment {
    font-size: var(--step--2);
    width: 100%;
  }

  .donation-card::before {
    content: '';
    width: calc(100% + var(--border-size));
    height: calc(100% + var(--border-size));
    border-radius: var(--space-xs);
    background-image: linear-gradient(
      var(--rotate),
      var(--accent),
      var(--accent-constant-red)
    );
    position: absolute;
    z-index: -1;
    top: calc(-1 * 0.5 * var(--border-size));
    left: calc(-1 * 0.5 * var(--border-size));
    animation: spin var(--spin-duration) ease-in-out infinite;
  }

  .donation-card::after {
    position: absolute;
    opacity: 0;
    content: '';
    inset: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(1.1);
    filter: blur(80px);
    background-image: linear-gradient(
      var(--rotate),
      var(--accent),
      var(--accent-constant-red)
    );

    transition: opacity 200ms ease-in-out;
    animation: spin var(--spin-duration) ease-in-out infinite;
  }

  .donation-card:hover::after {
    opacity: 1;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
</style>
