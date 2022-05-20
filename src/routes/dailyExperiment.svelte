<script>
  import { mstData } from '../store';
  import Ep from '../components/mst/Ep.svelte';

  const virturalTheaterLink = 'https://theater.gizmoplex.com/';
</script>

<svelte:head>
  <title>Daily Experiment</title>
</svelte:head>

{#if !$mstData.eps}
  <p>...Loading...</p>
{:else}
  <!-- <button on:click={toggleWit}>Watch It Together! (Spiritually)</button> -->
  <h1>Today's Experiment!</h1>
  <small>...It's one of those "we're all looking up at the same stars" kinda things...</small>
  <Ep ep={$mstData.wit} />
  <p>
    A new episode is automaically selected daily around 9am EST. <br />In the not to distant
    future... there could be a link to a screening bunker in the
    <a href={virturalTheaterLink}>virtual theater</a> where we could actually watch it together!
  </p>
  <!-- <Wit wit={mstData.wit} isOpen={witOpen} {toggleWit} /> -->
{/if}

<style>
  small {
    text-align: center;
  }
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 400;
    margin-bottom: 0;
  }
  p {
    text-align: center;
    max-width: 900px;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 3em;
    }
  }
</style>
