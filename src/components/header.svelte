<script>
  import { page } from '$app/stores';
</script>

<header>
  <a href="/" class:active={$page.url.pathname === '/'}>Available Classics</a>
  <span class="big">&bull;</span>
  <a href="/random" class:active={$page.url.pathname.includes('/random')}>Random</a>
  <span class="big">&bull;</span>
  <a href="/dailyExperiment" class:active={$page.url.pathname.includes('/dailyExperiment')}
    >Daily Experiment</a
  >
  <span class="big">&bull;</span>
  <a href="/about" class:active={$page.url.pathname.includes('/about')}>About</a>
</header>

<style>
  .active {
    color: tomato;
  }
  header {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }
  header a {
    margin: 0 1rem 0;
  }
  header a:first-child {
    margin-left: 0;
  }
  span {
  }
  @media (max-width: 600px) {
    header {
      flex-direction: column;
    }

    header a {
      padding: 0 1rem 1rem;
      margin: 0;
    }
    .big {
      display: none;
    }
  }
</style>
