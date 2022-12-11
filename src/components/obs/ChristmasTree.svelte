<script>
  import { onMount } from 'svelte';
  import { campaignData } from './stores.js';
  import gsap from 'gsap';

  export let index;

  onMount(() => {
    const tl = gsap.timeline({ defaults: { ease: 'elastic.out(1, 0.3)' } });

    gsap.set(`.tree-${index}.christmastree`, {
      transformOrigin: 'bottom center',
      scale: 0,
    });

    gsap.set(
      `.tree-${index}.ball-1,.tree-${index}.ball-2,.tree-${index}.ball-3,.tree-${index}.ball-4,.tree-${index}.ball-5,.tree-${index}.ball-6`,
      {
        opacity: 1,
        transformOrigin: 'top center',
        scale: 0,
      }
    );
    gsap.set(`.tree-${index}.star`, {
      transformOrigin: 'bottom center',
      scale: 0,
    });
    gsap.set(`.tree-${index}.present`, {
      transformOrigin: 'bottom center',
      scale: 0,
      y: 1,
      x: 9,
    });
    gsap.set(`.tree-${index}.present-2`, {
      transformOrigin: 'bottom center',
      scale: 0,
      x: 20,
    });
    gsap.set(`.tree-${index}.present-3`, {
      transformOrigin: 'bottom center',
      scale: 0,
      x: 38,
    });

    tl.to(`.tree-${index}.christmastree`, { scale: 1, duration: 3 });
    tl.to(`.tree-${index}.ball-1`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.ball-2`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.ball-3`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.ball-4`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.ball-5`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.ball-6`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.present`, { scale: 1, duration: 1 });
    tl.to(`.tree-${index}.present-3`, { scale: 0.85, duration: 1 });
    tl.to(`.tree-${index}.present-2`, { scale: 1.2, duration: 1 });
    tl.to(`.tree-${index}.star`, {
      scale: 1,
      duration: 1,
      y: -6,
      rotation: '360deg',
      transformOrigin: 'center',
    });

    tl.pause();
    tl.progress(0.8);

    // TODO: Write a function to update the progress of the timeline based on the donation and index
    // TODO: Add gsap labels between the tweens to determine where the progress should be
  });
</script>

<svg
  viewBox="0 0 81 117"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="overflow:visible;"
  height="115px"
>
  <g class={`tree-${index} christmastree`} clip-path="url(#clip0_515_7377)">
    <path
      id="Vector"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="#795556"
    />
    <path
      id="Vector_2"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="url(#paint0_radial_515_7377)"
    />
    <path
      id="Vector_3"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="url(#paint1_radial_515_7377)"
    />
    <path
      id="Vector_4"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="url(#paint2_linear_515_7377)"
    />
    <path
      id="Vector_5"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="url(#paint3_linear_515_7377)"
    />
    <path
      id="Vector_6"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="url(#paint4_linear_515_7377)"
    />
    <path
      id="Vector_7"
      d="M52.7 117h-26c-2.1 0-3.8-2.5-3.3-5.1l2.1-11.3H54l2 11.3c.5 2.6-1.1 5.1-3.3 5.1Z"
      fill="url(#paint5_linear_515_7377)"
    />
    <g id="Group" filter="url(#filter0_d_515_7377)">
      <path
        id="Vector_8"
        d="M24.8 73h29.9c8.6 0 12 1.3 16.5 6.1 2.8 3.3 5.5 7 5.2 13.5-.4 7.9-5 11.8-14.3 11.8H17.4c-9.4 0-14-4-14.4-11.8C2.7 86 5.4 82.4 8.2 79c4.5-4.8 8-6 16.6-6Z"
        fill="url(#paint6_radial_515_7377)"
      />
      <path
        id="Vector_9"
        d="M24.8 73h29.9c8.6 0 12 1.3 16.5 6.1 2.8 3.3 5.5 7 5.2 13.5-.4 7.9-5 11.8-14.3 11.8H17.4c-9.4 0-14-4-14.4-11.8C2.7 86 5.4 82.4 8.2 79c4.5-4.8 8-6 16.6-6Z"
        fill="url(#paint7_radial_515_7377)"
      />
      <path
        id="Vector_10"
        d="M24.8 73h29.9c8.6 0 12 1.3 16.5 6.1 2.8 3.3 5.5 7 5.2 13.5-.4 7.9-5 11.8-14.3 11.8H17.4c-9.4 0-14-4-14.4-11.8C2.7 86 5.4 82.4 8.2 79c4.5-4.8 8-6 16.6-6Z"
        fill="url(#paint8_radial_515_7377)"
      />
      <path
        id="Vector_11"
        d="M24.8 73h29.9c8.6 0 12 1.3 16.5 6.1 2.8 3.3 5.5 7 5.2 13.5-.4 7.9-5 11.8-14.3 11.8H17.4c-9.4 0-14-4-14.4-11.8C2.7 86 5.4 82.4 8.2 79c4.5-4.8 8-6 16.6-6Z"
        fill="url(#paint9_linear_515_7377)"
      />
    </g>
    <path
      id="Vector_12"
      d="M24.8 73h29.9c8.6 0 12 1.3 16.5 6.1 2.8 3.3 5.5 7 5.2 13.5-.4 7.9-5 11.8-14.3 11.8H17.4c-9.4 0-14-4-14.4-11.8C2.7 86 5.4 82.4 8.2 79c4.5-4.8 8-6 16.6-6Z"
      fill="url(#paint10_radial_515_7377)"
    />
    <path
      id="Vector_13"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint11_radial_515_7377)"
    />
    <path
      id="Vector_14"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint12_linear_515_7377)"
    />
    <path
      id="Vector_15"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint13_radial_515_7377)"
    />
    <path
      id="Vector_16"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint14_radial_515_7377)"
    />
    <path
      id="Vector_17"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint15_radial_515_7377)"
    />
    <path
      id="Vector_18"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint16_radial_515_7377)"
    />
    <path
      id="Vector_19"
      d="M30 50.7c-4.1 0-7.6 1.4-10.5 4.9l-.4.4a18 18 0 0 0-4.2 9c-.3 5.4 2.3 8 6.9 8h35.7c4.6 0 7.3-2.6 7-8a18 18 0 0 0-4.3-9l-.3-.4c-3-3.5-6.5-4.9-10.6-4.9H30Z"
      fill="url(#paint17_radial_515_7377)"
    />
    <path
      id="Vector_20"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint18_linear_515_7377)"
    />
    <path
      id="Vector_21"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint19_radial_515_7377)"
    />
    <path
      id="Vector_22"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint20_radial_515_7377)"
    />
    <path
      id="Vector_23"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint21_linear_515_7377)"
    />
    <path
      id="Vector_24"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint22_radial_515_7377)"
    />
    <path
      id="Vector_25"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint23_radial_515_7377)"
    />
    <path
      id="Vector_26"
      d="M34.3 23.5a6.2 6.2 0 0 1 10.8 0l10.6 19.3a5.3 5.3 0 0 1-4.6 8H28.4a5.3 5.3 0 0 1-4.7-8l10.6-19.3Z"
      fill="url(#paint24_linear_515_7377)"
    />
    <g id="Group_2" filter="url(#filter1_f_515_7377)">
      <path
        id="Vector_27"
        d="M49.6 99.4c12.7 0 23-4.8 23-10.6 0-6-10.3-10.7-23-10.7s-23 4.8-23 10.7c0 5.8 10.3 10.6 23 10.6Z"
        fill="url(#paint25_radial_515_7377)"
      />
      <path
        id="Vector_28"
        d="M49.6 99.4c12.7 0 23-4.8 23-10.6 0-6-10.3-10.7-23-10.7s-23 4.8-23 10.7c0 5.8 10.3 10.6 23 10.6Z"
        fill="url(#paint26_radial_515_7377)"
      />
    </g>
    <g id="Group_3" filter="url(#filter2_f_515_7377)">
      <path
        id="Vector_29"
        d="M42.8 68.4c10 0 18.2-2.9 18.2-6.5s-8.2-6.5-18.2-6.5-18.2 3-18.2 6.5c0 3.6 8.1 6.5 18.2 6.5Z"
        fill="url(#paint27_radial_515_7377)"
      />
      <path
        id="Vector_30"
        d="M42.8 68.4c10 0 18.2-2.9 18.2-6.5s-8.2-6.5-18.2-6.5-18.2 3-18.2 6.5c0 3.6 8.1 6.5 18.2 6.5Z"
        fill="url(#paint28_radial_515_7377)"
      />
    </g>
    <g id="Group_4" filter="url(#filter3_f_515_7377)">
      <path
        id="Vector_31"
        d="M36 44.5c2.8-1.3 10.3-3 17.5.3-3.1 1-11 2.3-17.5-.3Z"
        fill="url(#paint29_linear_515_7377)"
      />
    </g>
    <g id="Group_5" filter="url(#filter4_f_515_7377)">
      <path
        id="Vector_32"
        d="M42 22.3v23.2h13L42 22.3Z"
        fill="url(#paint30_linear_515_7377)"
      />
    </g>
    <g class={`tree-${index} ball-6`}>
      <g id="Group_6" filter="url(#filter5_f_515_7377)">
        <path
          id="Vector_33"
          d="M63.8 97.7a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
          fill="#72AC3A"
        />
      </g>
      <path
        d="M64.5 97.4a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
        fill="url(#paint31_radial_515_7377)"
      />
    </g>
    <g class={`tree-${index} ball-5`}>
      <g id="Group_7" filter="url(#filter6_f_515_7377)">
        <path
          id="Vector_34"
          d="M39.4 89.9a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
          fill="#539835"
        />
      </g>
      <path
        d="M40.6 89.1a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
        fill="url(#paint32_radial_515_7377)"
      />
    </g>
    <g class={`tree-${index} ball-4`}>
      <g id="Group_8" filter="url(#filter7_f_515_7377)">
        <path
          id="Vector_35"
          d="M19.4 98.8a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
          fill="#4F7068"
        />
      </g>
      <path
        d="M20.1 98.2a5.3 5.3 0 1 0 0-10.5 5.3 5.3 0 0 0 0 10.5Z"
        fill="url(#paint33_radial_515_7377)"
      />
    </g>
    <g class={`tree-${index} ball-3`}>
      <g id="Group_9" filter="url(#filter8_f_515_7377)">
        <path
          id="Vector_36"
          d="M50.7 69.4a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
          fill="#539835"
        />
      </g>
      <path
        d="M51.1 68.9a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
        fill="url(#paint34_radial_515_7377)"
      />
    </g>
    <g class={`tree-${index} ball-2`}>
      <g id="Group_10" filter="url(#filter9_f_515_7377)">
        <path
          id="Vector_37"
          d="M30 65.3a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
          fill="#539835"
        />
      </g>
      <path
        d="M30.7 65.3a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
        fill="url(#paint35_radial_515_7377)"
      />
    </g>
    <g class={`tree-${index} ball-1`}>
      <g id="Group_11" filter="url(#filter10_f_515_7377)">
        <path
          id="Vector_38"
          d="M42 46a5.3 5.3 0 1 0 0-10.6A5.3 5.3 0 0 0 42 46Z"
          fill="#539835"
        />
      </g>

      <path
        d="M43.1 45.3a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z"
        fill="url(#paint36_radial_515_7377)"
      />
    </g>
    <g class={`tree-${index} star`} filter="url(#filter11_d_515_7377)">
      <path
        id="Vector_39"
        d="m43.9 7 3 .4c1.5.2 2 2 1 3l-2.2 2.2a1.8 1.8 0 0 0-.5 1.6l.5 3A1.8 1.8 0 0 1 43 19l-2.6-1.4a1.8 1.8 0 0 0-1.7 0L36 19a1.8 1.8 0 0 1-2.6-2l.5-3a1.8 1.8 0 0 0-.6-1.5l-2.1-2.1a1.8 1.8 0 0 1 1-3.1l3-.5a1.8 1.8 0 0 0 1.4-1l1.3-2.6a1.8 1.8 0 0 1 3.3 0L42.5 6c.3.4.8.8 1.4 1Z"
        fill="url(#paint37_radial_515_7377)"
      />
      <path
        id="Vector_40"
        d="m43.9 7 3 .4c1.5.2 2 2 1 3l-2.2 2.2a1.8 1.8 0 0 0-.5 1.6l.5 3A1.8 1.8 0 0 1 43 19l-2.6-1.4a1.8 1.8 0 0 0-1.7 0L36 19a1.8 1.8 0 0 1-2.6-2l.5-3a1.8 1.8 0 0 0-.6-1.5l-2.1-2.1a1.8 1.8 0 0 1 1-3.1l3-.5a1.8 1.8 0 0 0 1.4-1l1.3-2.6a1.8 1.8 0 0 1 3.3 0L42.5 6c.3.4.8.8 1.4 1Z"
        fill="url(#paint38_radial_515_7377)"
      />
      <path
        id="Vector_41"
        d="m43.9 7 3 .4c1.5.2 2 2 1 3l-2.2 2.2a1.8 1.8 0 0 0-.5 1.6l.5 3A1.8 1.8 0 0 1 43 19l-2.6-1.4a1.8 1.8 0 0 0-1.7 0L36 19a1.8 1.8 0 0 1-2.6-2l.5-3a1.8 1.8 0 0 0-.6-1.5l-2.1-2.1a1.8 1.8 0 0 1 1-3.1l3-.5a1.8 1.8 0 0 0 1.4-1l1.3-2.6a1.8 1.8 0 0 1 3.3 0L42.5 6c.3.4.8.8 1.4 1Z"
        fill="url(#paint39_radial_515_7377)"
      />
      <path
        id="Vector_42"
        d="m43.9 7 3 .4c1.5.2 2 2 1 3l-2.2 2.2a1.8 1.8 0 0 0-.5 1.6l.5 3A1.8 1.8 0 0 1 43 19l-2.6-1.4a1.8 1.8 0 0 0-1.7 0L36 19a1.8 1.8 0 0 1-2.6-2l.5-3a1.8 1.8 0 0 0-.6-1.5l-2.1-2.1a1.8 1.8 0 0 1 1-3.1l3-.5a1.8 1.8 0 0 0 1.4-1l1.3-2.6a1.8 1.8 0 0 1 3.3 0L42.5 6c.3.4.8.8 1.4 1Z"
        fill="url(#paint40_radial_515_7377)"
      />
    </g>
  </g>
  <g class={`tree-${index} present`} id="present">
    <g id="Group_12" filter="url(#filter12_d_515_7377)">
      <path
        id="Vector_43"
        d="M12 102.7h5.5a1.3 1.3 0 0 0 1.3-1.3c0-2.1-2.5-3.2-4-1.7l-2.8 2.6v.4Z"
        fill="#DE2236"
      />
      <path
        id="Vector_44"
        d="M12 102.7h5.5a1.3 1.3 0 0 0 1.3-1.3c0-2.1-2.5-3.2-4-1.7l-2.8 2.6v.4Z"
        fill="url(#paint41_linear_515_7377)"
      />
    </g>
    <g id="Group_13" filter="url(#filter13_d_515_7377)">
      <path
        id="Vector_45"
        d="M12 102.7H6.6a1.3 1.3 0 0 1-1.3-1.3c0-2.1 2.5-3.2 4-1.7l2.7 2.6v.4Z"
        fill="url(#paint42_linear_515_7377)"
      />
      <path
        id="Vector_46"
        d="M12 102.7H6.6a1.3 1.3 0 0 1-1.3-1.3c0-2.1 2.5-3.2 4-1.7l2.7 2.6v.4Z"
        fill="url(#paint43_linear_515_7377)"
      />
      <path
        id="Vector_47"
        d="M12 102.7H6.6a1.3 1.3 0 0 1-1.3-1.3c0-2.1 2.5-3.2 4-1.7l2.7 2.6v.4Z"
        fill="url(#paint44_radial_515_7377)"
      />
    </g>
    <path
      id="Vector_48"
      d="M17.5 116.2h-11a1.3 1.3 0 0 1-1.2-.8V107h13.5v8c0 .7-.6 1.2-1.3 1.2Z"
      fill="url(#paint45_linear_515_7377)"
    />
    <path
      id="Vector_49"
      d="M17.5 116.2h-11a1.3 1.3 0 0 1-1.2-.8V107h13.5v8c0 .7-.6 1.2-1.3 1.2Z"
      fill="url(#paint46_linear_515_7377)"
    />
    <path
      id="Vector_50"
      d="M17.5 116.2h-11a1.3 1.3 0 0 1-1.2-.8V107h13.5v8c0 .7-.6 1.2-1.3 1.2Z"
      fill="url(#paint47_radial_515_7377)"
    />
    <path
      id="Vector_51"
      d="M17.5 116.2h-11a1.3 1.3 0 0 1-1.2-.8V107h13.5v8c0 .7-.6 1.2-1.3 1.2Z"
      fill="url(#paint48_linear_515_7377)"
    />
    <path
      id="Vector_52"
      d="M17.5 116.2h-11a1.3 1.3 0 0 1-1.2-.8V107h13.5v8c0 .7-.6 1.2-1.3 1.2Z"
      fill="url(#paint49_linear_515_7377)"
    />
    <path
      id="Vector_53"
      d="M17.5 116.2h-11a1.3 1.3 0 0 1-1.2-.8V107h13.5v8c0 .7-.6 1.2-1.3 1.2Z"
      fill="url(#paint50_linear_515_7377)"
    />
    <path
      id="Vector_54"
      d="M19.2 102.7H4.8c-.4 0-.8.4-.8.8v2.7c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8v-2.7c0-.4-.4-.8-.8-.8Z"
      fill="url(#paint51_linear_515_7377)"
    />
    <path
      id="Vector_55"
      d="M19.2 102.7H4.8c-.4 0-.8.4-.8.8v2.7c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8v-2.7c0-.4-.4-.8-.8-.8Z"
      fill="url(#paint52_linear_515_7377)"
    />
    <path
      id="Vector_56"
      d="M19.2 102.7H4.8c-.4 0-.8.4-.8.8v2.7c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8v-2.7c0-.4-.4-.8-.8-.8Z"
      fill="url(#paint53_linear_515_7377)"
    />
    <path
      id="Vector_57"
      d="M19.2 102.7H4.8c-.4 0-.8.4-.8.8v2.7c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8v-2.7c0-.4-.4-.8-.8-.8Z"
      fill="url(#paint54_radial_515_7377)"
    />
    <path
      id="Vector_58"
      d="M19.2 102.7H4.8c-.4 0-.8.4-.8.8v2.7c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8v-2.7c0-.4-.4-.8-.8-.8Z"
      fill="url(#paint55_linear_515_7377)"
    />
    <path
      id="Vector_59"
      d="M19.2 102.7H4.8c-.4 0-.8.4-.8.8v2.7c0 .4.4.8.8.8h14.4c.4 0 .8-.4.8-.8v-2.7c0-.4-.4-.8-.8-.8Z"
      fill="url(#paint56_radial_515_7377)"
    />
    <g id="Group_14" filter="url(#filter14_dd_515_7377)">
      <path
        id="Vector_60"
        d="M12 99.6c-1 0-1.8.9-1.8 1.9v14.7h3.6v-14.7c0-1-.8-1.9-1.8-1.9Z"
        fill="url(#paint57_linear_515_7377)"
      />
      <path
        id="Vector_61"
        d="M12 99.6c-1 0-1.8.9-1.8 1.9v14.7h3.6v-14.7c0-1-.8-1.9-1.8-1.9Z"
        fill="url(#paint58_linear_515_7377)"
      />
    </g>
    <g id="Group_15" filter="url(#filter15_f_515_7377)">
      <path
        id="Vector_62"
        d="M17 99.6c.4.1 1.3.7 1.2 2"
        stroke="#FB5157"
        stroke-width=".5"
        stroke-linecap="round"
      />
    </g>
    <g id="Group_16" filter="url(#filter16_f_515_7377)">
      <path
        id="Vector_63"
        d="M8.1 99.5c.1 0 .4 0 .7.4l1.1 1"
        stroke="#FB5157"
        stroke-width=".5"
        stroke-linecap="round"
      />
    </g>
  </g>
  <use href="#present" class={`tree-${index} present-2`} />
  <use href="#present" class={`tree-${index} present-3`} />

  <defs>
    <radialGradient
      id="paint0_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="rotate(70 -49 82.2) scale(12.5 8)"
    >
      <stop offset=".3" stop-color="#5F2F2E" />
      <stop offset="1" stop-color="#5F2F2E" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint1_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-4.7 21.4 -12 -2.6 36.5 98.8)"
    >
      <stop offset=".5" stop-color="#5F2F2E" />
      <stop offset="1" stop-color="#5F2F2E" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint6_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-67.5 0 0 -37.6 73.7 88.8)"
    >
      <stop stop-color="#80C156" />
      <stop offset="1" stop-color="#52915C" />
    </radialGradient>
    <radialGradient
      id="paint7_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 20.6 -93.1 0 39.7 68.2)"
    >
      <stop stop-color="#57A22C" />
      <stop offset="1" stop-color="#57A22C" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint8_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(41.2 0 0 6.5 16.3 104.4)"
    >
      <stop stop-color="#6F708D" />
      <stop offset="1" stop-color="#7F779B" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint10_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-38.9 4.3 -1 -8.9 41.9 71.6)"
    >
      <stop stop-color="#105B0D" />
      <stop offset="1" stop-color="#105B0D" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint11_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-45.7 0 0 -26.9 62.6 61.9)"
    >
      <stop stop-color="#80C156" />
      <stop offset="1" stop-color="#52915C" />
    </radialGradient>
    <radialGradient
      id="paint13_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 14.7 -63 0 39.7 47.2)"
    >
      <stop stop-color="#57A22C" />
      <stop offset="1" stop-color="#57A22C" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint14_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 -7.4 37 0 39.7 74.7)"
    >
      <stop stop-color="#479820" />
      <stop offset="1" stop-color="#479820" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint15_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 -3.5 30.5 0 39.7 73.7)"
    >
      <stop stop-color="#15600B" />
      <stop offset="1" stop-color="#15600B" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint16_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-49.7 -13.5 7.1 -26.3 64.5 74)"
    >
      <stop offset=".9" stop-color="#75947D" stop-opacity="0" />
      <stop offset="1" stop-color="#75947D" />
    </radialGradient>
    <radialGradient
      id="paint17_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 4.4 -30.4 0 35.8 48.5)"
    >
      <stop stop-color="#15600B" />
      <stop offset="1" stop-color="#15600B" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint19_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 -7.4 33 0 39.7 52)"
    >
      <stop stop-color="#3B9017" />
      <stop offset="1" stop-color="#3B9017" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint20_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(16 -3.2 3.8 19 21.2 49.2)"
    >
      <stop stop-color="#608371" />
      <stop offset="1" stop-color="#608371" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint22_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(3.6 -4 7.6 7 24.9 52.6)"
    >
      <stop stop-color="#637374" />
      <stop offset="1" stop-color="#637374" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint23_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(18 -1.6 .4 4 21.8 52.8)"
    >
      <stop stop-color="#15600B" />
      <stop offset="1" stop-color="#15600B" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint25_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-40 0 0 -7.3 74.5 88.8)"
    >
      <stop stop-color="#A2E070" />
      <stop offset="1" stop-color="#A2E070" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint26_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(54 0 0 16.6 18 88.8)"
    >
      <stop offset=".9" stop-color="#9FDF6B" stop-opacity="0" />
      <stop offset="1" stop-color="#9FDF6B" />
    </radialGradient>
    <radialGradient
      id="paint27_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-31.7 0 0 -4.4 62.5 61.9)"
    >
      <stop stop-color="#A2E070" />
      <stop offset="1" stop-color="#A2E070" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint28_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(42.8 0 0 10.1 17.7 61.9)"
    >
      <stop offset=".9" stop-color="#9FDF6B" stop-opacity="0" />
      <stop offset="1" stop-color="#9FDF6B" />
    </radialGradient>
    <radialGradient
      id="paint31_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="rotate(148 20.7 54.7) scale(9.7)"
    >
      <stop stop-color="#FF62A7" />
      <stop offset="1" stop-color="#C23436" />
    </radialGradient>
    <radialGradient
      id="paint32_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-5.8 5.8 -7 -7 43.3 81.9)"
    >
      <stop stop-color="#FFF863" />
      <stop offset="1" stop-color="#E19E4A" />
    </radialGradient>
    <radialGradient
      id="paint33_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="rotate(148 -1.5 48.7) scale(9.7)"
    >
      <stop stop-color="#FF62A7" />
      <stop offset="1" stop-color="#C23436" />
    </radialGradient>
    <radialGradient
      id="paint34_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="rotate(148 18.2 38.5) scale(9.7)"
    >
      <stop stop-color="#FF62A7" />
      <stop offset="1" stop-color="#C23436" />
    </radialGradient>
    <radialGradient
      id="paint35_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-5.8 5.8 -7 -7 33.4 58)"
    >
      <stop stop-color="#FFF863" />
      <stop offset="1" stop-color="#E19E4A" />
    </radialGradient>
    <radialGradient
      id="paint36_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-5.8 5.8 -7 -7 45.8 38)"
    >
      <stop stop-color="#FFF863" />
      <stop offset="1" stop-color="#E19E4A" />
    </radialGradient>
    <radialGradient
      id="paint37_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="rotate(154 23 10.3) scale(17.5 25.6)"
    >
      <stop offset=".1" stop-color="#FFF754" />
      <stop offset=".6" stop-color="#F8CD3D" />
    </radialGradient>
    <radialGradient
      id="paint38_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 5.8 -6 0 39.5 21.5)"
    >
      <stop offset=".4" stop-color="#D2AE38" />
      <stop offset="1" stop-color="#D2AE38" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint39_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(2 7.2 -3.5 1 41.7 3.6)"
    >
      <stop offset=".2" stop-color="#FFF15D" />
      <stop offset="1" stop-color="#FFF15D" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint40_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-5.4 2.3 -.7 -1.7 49.1 8.5)"
    >
      <stop stop-color="#FFF15D" />
      <stop offset="1" stop-color="#FFF15D" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint44_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-1.6 -.2 .5 -4.1 10.5 102.9)"
    >
      <stop offset=".2" stop-color="#BD1123" />
      <stop offset="1" stop-color="#BD1123" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint47_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-1.5 0 0 -11.5 10.5 110.9)"
    >
      <stop stop-color="#C87C28" />
      <stop offset="1" stop-color="#C87C28" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint54_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0 -1.1 8 0 6 107.4)"
    >
      <stop stop-color="#DE7550" />
      <stop offset="1" stop-color="#DE7550" stop-opacity="0" />
    </radialGradient>
    <radialGradient
      id="paint56_radial_515_7377"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(-1.6 0 0 -10.8 10.7 105.5)"
    >
      <stop offset=".2" stop-color="#C57E10" />
      <stop offset="1" stop-color="#C57E10" stop-opacity="0" />
    </radialGradient>
    <linearGradient
      id="paint2_linear_515_7377"
      x1="39.7"
      y1="117.5"
      x2="39.1"
      y2="112.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#7B4064" />
      <stop offset="1" stop-color="#7B4064" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_515_7377"
      x1="21.4"
      y1="108.1"
      x2="27.3"
      y2="108.8"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#826C6A" />
      <stop offset="1" stop-color="#826C6A" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_515_7377"
      x1="56.8"
      y1="107.3"
      x2="53.1"
      y2="108.8"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#826C6A" />
      <stop offset="1" stop-color="#826C6A" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint5_linear_515_7377"
      x1="39.7"
      y1="116"
      x2="39.7"
      y2="117.3"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#8F5790" stop-opacity="0" />
      <stop offset="1" stop-color="#8F5790" />
    </linearGradient>
    <linearGradient
      id="paint9_linear_515_7377"
      x1="44.2"
      y1="105.6"
      x2="44.2"
      y2="102.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#7F779B" />
      <stop offset="1" stop-color="#7F779B" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint12_linear_515_7377"
      x1="19.5"
      y1="61.9"
      x2="43.8"
      y2="61.9"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#529257" />
      <stop offset="1" stop-color="#529257" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint18_linear_515_7377"
      x1="34.1"
      y1="39.4"
      x2="53.6"
      y2="39.4"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#5A9D57" />
      <stop offset="1" stop-color="#7FC43A" />
    </linearGradient>
    <linearGradient
      id="paint21_linear_515_7377"
      x1="23.1"
      y1="35.5"
      x2="29.8"
      y2="38"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#608371" />
      <stop offset="1" stop-color="#608371" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint24_linear_515_7377"
      x1="39.7"
      y1="20.3"
      x2="39.7"
      y2="25.1"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#639E52" />
      <stop offset="1" stop-color="#70A960" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint29_linear_515_7377"
      x1="50.6"
      y1="44.4"
      x2="36.9"
      y2="44.4"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#9DD573" />
      <stop offset="1" stop-color="#9DD573" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint30_linear_515_7377"
      x1="50.1"
      y1="34.5"
      x2="42.1"
      y2="36.6"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#9AD869" />
      <stop offset="1" stop-color="#9AD869" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint41_linear_515_7377"
      x1="16.1"
      y1="103"
      x2="16.1"
      y2="101.8"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#CE280A" />
      <stop offset="1" stop-color="#CE280A" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint42_linear_515_7377"
      x1="9.7"
      y1="99.8"
      x2="8.7"
      y2="102.7"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#DF2332" />
      <stop offset="1" stop-color="#D9213B" />
    </linearGradient>
    <linearGradient
      id="paint43_linear_515_7377"
      x1="7.9"
      y1="103"
      x2="7.9"
      y2="101.8"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#CE280A" />
      <stop offset="1" stop-color="#CE280A" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint45_linear_515_7377"
      x1="5.2"
      y1="112.9"
      x2="18.8"
      y2="112.9"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F1A738" />
      <stop offset="1" stop-color="#FAD42C" />
    </linearGradient>
    <linearGradient
      id="paint46_linear_515_7377"
      x1="12"
      y1="105.8"
      x2="12"
      y2="107.8"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#C97525" />
      <stop offset="1" stop-color="#C97525" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint48_linear_515_7377"
      x1="4.9"
      y1="111.6"
      x2="6.9"
      y2="111.6"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#C2773F" />
      <stop offset="1" stop-color="#C2773F" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint49_linear_515_7377"
      x1="12.3"
      y1="116.6"
      x2="12.3"
      y2="115.6"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#E68370" />
      <stop offset="1" stop-color="#E68370" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint50_linear_515_7377"
      x1="19.2"
      y1="112.4"
      x2="17.5"
      y2="112.4"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FFF733" />
      <stop offset="1" stop-color="#FFF733" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint51_linear_515_7377"
      x1="20"
      y1="105.1"
      x2="4"
      y2="105.1"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F6D729" />
      <stop offset="1" stop-color="#F39B3A" />
    </linearGradient>
    <linearGradient
      id="paint52_linear_515_7377"
      x1="20"
      y1="104.8"
      x2="18.9"
      y2="104.8"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FFF850" />
      <stop offset="1" stop-color="#FFF850" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint53_linear_515_7377"
      x1="12"
      y1="107.2"
      x2="12"
      y2="106.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#E8AF21" />
      <stop offset="1" stop-color="#E8AF21" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint55_linear_515_7377"
      x1="3.8"
      y1="105.1"
      x2="5.2"
      y2="105.1"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#BE7841" />
      <stop offset="1" stop-color="#BE7841" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint57_linear_515_7377"
      x1="12"
      y1="99.6"
      x2="12"
      y2="116.2"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D12136" />
      <stop offset="1" stop-color="#B6246E" />
    </linearGradient>
    <linearGradient
      id="paint58_linear_515_7377"
      x1="12"
      y1="116.4"
      x2="12"
      y2="115.5"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#B3368C" />
      <stop offset="1" stop-color="#B3368C" stop-opacity="0" />
    </linearGradient>
    <filter
      id="filter0_d_515_7377"
      x=".9"
      y="70"
      width="79.6"
      height="37.5"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="1" />
      <feGaussianBlur stdDeviation="1.5" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        values="0 0 0 0 0.486275 0 0 0 0 0.6 0 0 0 0 0.513726 0 0 0 1 0"
      />
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_515_7377" />
      <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow_515_7377"
        result="shape"
      />
    </filter>
    <filter
      id="filter1_f_515_7377"
      x="18.4"
      y="69.9"
      width="62.3"
      height="37.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="4.1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter2_f_515_7377"
      x="16.4"
      y="47.2"
      width="52.8"
      height="29.4"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="4.1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter3_f_515_7377"
      x="31.9"
      y="38.8"
      width="25.7"
      height="11.4"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="2.1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter4_f_515_7377"
      x="38"
      y="18.2"
      width="21.1"
      height="31.5"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="2.1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter5_f_515_7377"
      x="56.5"
      y="85.1"
      width="14.7"
      height="14.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter6_f_515_7377"
      x="32.1"
      y="77.2"
      width="14.7"
      height="14.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter7_f_515_7377"
      x="12"
      y="86.1"
      width="14.7"
      height="14.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter8_f_515_7377"
      x="43.4"
      y="56.7"
      width="14.7"
      height="14.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter9_f_515_7377"
      x="22.6"
      y="52.7"
      width="14.7"
      height="14.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter10_f_515_7377"
      x="34.7"
      y="33.4"
      width="14.7"
      height="14.7"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation="1"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter11_d_515_7377"
      x="29"
      y=".6"
      width="21"
      height="20.3"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset />
      <feGaussianBlur stdDeviation=".8" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        values="0 0 0 0 0.933333 0 0 0 0 0.741176 0 0 0 0 0.333333 0 0 0 1 0"
      />
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_515_7377" />
      <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow_515_7377"
        result="shape"
      />
    </filter>
    <filter
      id="filter12_d_515_7377"
      x="11.6"
      y="98.5"
      width="8.2"
      height="5.2"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx=".3" dy=".3" />
      <feGaussianBlur stdDeviation=".4" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        values="0 0 0 0 0.698039 0 0 0 0 0.235294 0 0 0 0 0.243137 0 0 0 1 0"
      />
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_515_7377" />
      <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow_515_7377"
        result="shape"
      />
    </filter>
    <filter
      id="filter13_d_515_7377"
      x="5.1"
      y="98"
      width="8.2"
      height="5.2"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx=".5" dy="-.3" />
      <feGaussianBlur stdDeviation=".4" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        values="0 0 0 0 0.698039 0 0 0 0 0.235294 0 0 0 0 0.243137 0 0 0 1 0"
      />
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_515_7377" />
      <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow_515_7377"
        result="shape"
      />
    </filter>
    <filter
      id="filter14_dd_515_7377"
      x="9.8"
      y="99.4"
      width="4.5"
      height="17"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx=".2" />
      <feGaussianBlur stdDeviation=".1" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        values="0 0 0 0 0.729412 0 0 0 0 0.101961 0 0 0 0 0.152941 0 0 0 1 0"
      />
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_515_7377" />
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="-.2" />
      <feGaussianBlur stdDeviation=".1" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        values="0 0 0 0 0.894118 0 0 0 0 0.301961 0 0 0 0 0.341176 0 0 0 1 0"
      />
      <feBlend
        in2="effect1_dropShadow_515_7377"
        result="effect2_dropShadow_515_7377"
      />
      <feBlend
        in="SourceGraphic"
        in2="effect2_dropShadow_515_7377"
        result="shape"
      />
    </filter>
    <filter
      id="filter15_f_515_7377"
      x="15.7"
      y="98.4"
      width="3.8"
      height="4.4"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation=".5"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <filter
      id="filter16_f_515_7377"
      x="6.9"
      y="98.3"
      width="4.3"
      height="4"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur
        stdDeviation=".5"
        result="effect1_foregroundBlur_515_7377"
      />
    </filter>
    <clipPath id="clip0_515_7377">
      <path fill="#fff" d="M0 0h81v117H0z" />
    </clipPath>
  </defs>
</svg>
