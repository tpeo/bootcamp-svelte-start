<script>
  export let id;
  export let top;
  export let fixed;
  export let style;

  // TODO: Add fade transition
  // TODO: Add text color from theme
</script>

<style lang="scss">
  div{
    position: absolute;
    top: 4em;
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &.top{
      display: block;
    }

    &.fixed{
      position: fixed;
      top: 4em;
      left: 0;
      right: 0;
      bottom: 0;
      min-height: unset;
    }
  }
</style>

<div style="{style};" {id} class:fixed class:top>
  <slot />
</div>