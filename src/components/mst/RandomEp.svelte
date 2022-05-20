<script>
  import { mstData } from '../../store';
  import Ep from './Ep.svelte';

  const rand = (low, high) => Math.floor(Math.random() * (high - low) + low);
  const getRandomEp = (eps) => {
    if (!eps) return;
    return eps[rand(0, eps?.length ?? 0)];
  };

  let randomEp = getRandomEp($mstData.eps);
  const another = () => (randomEp = getRandomEp($mstData.eps));
</script>

<section>
  {#if $mstData.eps}
    <Ep ep={randomEp} />
    <button on:click={another}>Another</button>
  {/if}
</section>

<style>
  button {
    padding: 1em;
    margin: 1em auto;
    cursor: pointer;
  }
  section {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2.2em;
    }
    h3 {
      font-size: 1em;
    }
    p {
      font-size: 1em;
    }
  }
</style>
