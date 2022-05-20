<script>
  import { mstData } from '../store';
  import Random from '../components/mst/RandomEp.svelte';
  import Wit from '../components/mst/Wit.svelte';

  let witOpen = true;
  const toggleWit = () => (witOpen = !witOpen);
</script>

<svelte:head>
  <title>Random Episode</title>
</svelte:head>

<section>
  {#if !$mstData.eps}
    <p>...Loading...</p>
  {:else}
    <!-- <button on:click={toggleWit}>Watch It Together! (Spiritually)</button> -->
    <h1>Random MST3K Episode!</h1>
    <Random />
    <!-- <Wit wit={mstData.wit} isOpen={witOpen} {toggleWit} /> -->
  {/if}
</section>

<style>
  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 400;
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 3em;
    }
  }
</style>
