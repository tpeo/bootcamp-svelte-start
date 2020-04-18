<script>
  import { colors } from '../stores/theme';
  // TODO: import background color and dynamically update background
  $: style =`
    background-color: ${$colors.background}
  `;
</script>

<style lang="scss">
  @import "./GlobalStyle/theme.scss";
  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    transition: background-color 0.2s;
  }
</style>

<div {style}>
  <slot />
</div>
