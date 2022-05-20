<script>
  import { mstData } from '../store';
  let query = '';
  const filterByQuery = (data, searchQuery) => data.filter((e) => fuzzy(e.title, searchQuery));
  const filterBySeason = (list, season) => list.filter((e) => e.season === season.toString());
  const fuzzy = (string, s) => {
    var hay = string.toLowerCase(),
      i = 0,
      n = -1,
      l;
    s = s.trim().toLowerCase();
    for (; (l = s[i++]); ) if (!~(n = hay.indexOf(l, n + 1))) return false;
    return true;
  };
</script>

<svelte:head>
  <title>Available Classics</title>
</svelte:head>

<section class="list">
  {#if !$mstData.eps}
    <p>...loading...</p>
  {:else}
    <input type="text" bind:value={query} placeholder="Search available episodes" />
    {#each Array.from(Array(10)) as _, i}
      {#if filterBySeason(filterByQuery($mstData.eps, query), i + 1).length}
        <h2>Season {i + 1}</h2>
      {/if}
      {#each filterBySeason(filterByQuery($mstData.eps, query), i + 1) as ep}
        <p><a href={ep.link}>{ep.title}</a></p>
        <small>{ep.epNumber}</small>
      {/each}
    {/each}
    {#if !filterByQuery($mstData.eps, query).length}
      <div class="img-container">
        <img src="https://i.gifer.com/5Ixp.gif" alt="coily, no springs" />
      </div>
    {/if}
  {/if}
</section>

<style>
  .list {
    min-width: 900px;
    margin-bottom: auto;
  }
  img {
    width: 500px;
    margin: 3em auto;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin-bottom: 0;
  }
  h2 {
    border-bottom: 1px solid #222;
  }
  .sad {
    font-size: 3em;
  }
  input {
    display: flex;
    margin-left: auto;
    padding: 0.8em;
    border-width: 1px;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    .list {
      min-width: 0;
    }
    img {
      width: 300px;
    }
  }
</style>
