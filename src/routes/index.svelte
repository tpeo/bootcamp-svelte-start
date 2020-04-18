<script>
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';
  import Wrapper from '../components/Wrapper.svelte';
  import Button from '../components/Button.svelte';

  import { writable } from 'svelte/store';
  import { colors, night } from '../stores/theme';

  // Define Store with default value
  // Reference title store in markup
  // Update store in changeTitle

  let title = writable("Welcome to the tutorial")

  function changeTitle(){
    title.set($title + '!');
  }

  function toggleNight(){
    night.set(!$night);
  }
</script>

<style lang='scss'>
  @import '../components/GlobalStyle/theme.scss';

  .flex{
    display: flex;
    margin: 2em 0;
    justify-content: space-between;
  }

  .third{
    width: 30%;
  }

  .title{
    text-align: center;
    font-size: 2em;
    font-weight: 700;
  }

  .button{
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    display: block;
    text-align: center;
    padding: 0.75em 1.5em;
    color: inherit;
  }

</style>

<Wrapper>
  <Container>
    <Card>
      <h1 class="title">{$title}</h1>
    </Card>
    <div class="flex">
      <div class="third">
        <Card>
          <Button href="/community">
            Community
          </Button>
        </Card>
      </div>
      <div class="third">
        <Card>
          <Button on:click={changeTitle}>
            Change Title
          </Button>
        </Card>
      </div>
      <div class="third">
        <Card>
          <Button on:click={toggleNight}>
            Night mode
          </Button>
        </Card>
      </div>
    </div>
  </Container>
</Wrapper>