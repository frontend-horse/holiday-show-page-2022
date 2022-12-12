<script>
  export let host = false;
  import { currentGuest } from './stores.js';

  $: displayName = host ? 'Alex Trost' : $currentGuest?.name;
  $: fontSize = displayName?.length > 16 ? '24px' : '32px';
</script>

<div class="nametag">
  <svg width="32" height="61" viewBox="0 0 32 61" fill="none" class="tag-hole">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31.1897 0.387695C14.0431 0.387695 0.143066 13.9016 0.143066 30.5719C0.143066 47.2422 14.0431 60.7562 31.1897 60.7562V0.387695ZM17.2722 35.0822C20.4256 35.0822 22.982 32.5969 22.982 29.5311C22.982 26.4653 20.4256 23.98 17.2722 23.98C14.1189 23.98 11.5625 26.4653 11.5625 29.5311C11.5625 32.5969 14.1189 35.0822 17.2722 35.0822Z"
      fill="#FFE7B9"
    />
  </svg>

  <span class="name" style:font-size={fontSize}>
    {displayName}
  </span>
</div>

<style>
  .nametag {
    display: flex;
    width: auto;

    color: hsla(0, 54%, 24%, 1);
    /* font-size: 32px; */
    font-family: 'Recoleta';
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    border-radius: 0 8px 8px 0;
    transform: rotate(4.65deg);
    padding: 10px 10px 10px 20px;

    top: 20px;
    left: 20px;
    filter: drop-shadow(0px 3.44963px 3.44963px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 21.5602px 17.2481px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 12.0737px 8.62407px rgba(0, 0, 0, 0.25));
  }

  .name {
    /* color: hsla(0, 54%, 24%, 1); */
    background: #ffe7b9;
    height: 61px;
    max-height: 61px;
    display: flex;
    align-items: center;
    padding: 0 15px 0 10px;
    border-radius: 0 8px 8px 0;
    transform: translateX(-2px);
  }
</style>
