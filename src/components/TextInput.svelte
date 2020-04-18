<script>
  export let label;
  export let name;
  export let errors = [];
  export let value;
  export let required = false;
  export let id = '__' + Math.floor(Date.now() * Math.random());
  import { writable } from 'svelte/store';


  $: hasError = errors.length > 0

  let focused = writable(false)

  function blur(){
    focused.set(false)
  }

  function focus(){
    focused.set(true)
  }


</script>

<style lang="scss">
  @import './GlobalStyle/theme.scss';

  label{
    font-size: 1.5em;
    font-weight: 700;
    display: block;
    font-family: $heading-font-family;
    color: inherit;
  }

  input{
    position: relative;
    display: block;
    width: 100%;
    padding: 0.5em;
    font-size: 1.25em;
    border: none;
    outline: none;
    background-color: transparent;
    color: inherit;
    box-sizing: border-box;
    font-family: inherit;
    font-family: $heading-font-family;
    letter-spacing: 2px;
    margin: 1em 0;
    overflow: hidden;
  }

  .indicator{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    overflow: hidden;

    &:after{
      position: absolute;
      width: 300%;
      height: 100%;
      content: "";
      right: 0;
      top: 0;
      transition: transform 0.5s;
      background-image: linear-gradient(to right, hsl(40,100%,60%) 0%, hsl(40,100%,60%) 33%, #999 66%, #999 100%);
    }

    &.focused{
      &:after{
        transform: translateX(66%);
      }
    }
  }

  .input-field{
    position: relative;
    margin: 1em 0;
    /* border: 1px solid #fff; */
  }
</style>

<div class="input-field">
  <label for={id}>
    {label}
    {#if required}
      <!-- Good practice for accessibility -->
      <abbr title="required" aria-label="required">*</abbr>
    {/if}
  </label>
  {#if hasError}
    <!-- Good practice for accessibility -->
    <div role="alert" class="error-container">
      <ul>
        {#each errors as e, i}
          <li> {e} </li>
        {/each}
      </ul>
    </div>
  {/if}
  <!-- TODO: Connect input focus to indicator -->
  <input type="text" bind:value={value} {name} {id} aria-invalid={hasError}/>
  <div class="indicator"></div>
</div>