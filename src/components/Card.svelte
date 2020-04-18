<!-- JavaScript -->
<script>

  import { writable } from 'svelte/store';
  import { colors, night } from '../stores/theme';


  function clickAction(){
    console.log("Here");
    night.set(true);
  }
</script>

<!-- Style -->
<style>
  .card{
    border: 4px solid #000;
    padding: 2em;
    border-radius: 1em;
    width: 100%;
    box-sizing: border-box;

  }
</style>

<!-- Markup -->
<div
  class="card"
  style="border-color: {$colors.foreground}; color: {$colors.foreground}; background-color: {$colors.background}"
  on:click={clickAction}
>
  <slot />
</div>