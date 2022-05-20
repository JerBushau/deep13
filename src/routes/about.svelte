<script>
  const mstLink = 'https://www.gizmoplex.com/';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<section>
  <h1>Why does this exist?</h1>
  <p>
    This website exists for my own personal use and from a desire to learn about SvelteKit and
    Github Actions. But I would be pleased if it turns out to be useful for others as well.
    <br />
    <br />
    The function of this tool is to quickly search the freely available classic episodes from the
    <a href={mstLink}>Gizmoplex</a>
    and to replace features that I miss from club-mst3k.com, like random episode selection and a daily
    "Watch It Together" episode.
    <br />
    <br />
    I have no intention to monetize, take donations, or otherwise profit from this website in anyway.
    I will be happy to remove it when it is no longer needed or if I am asked to do so.
  </p>
  <h1>How does this work?</h1>
  <p>
    Data is collected from the <a href={mstLink}>Gizmoplex</a> using a scheduled Github Action that
    runs a node.js script. This occurs once per day at around 9<small class="time">AM</small> EST. It
    checks for newly available classic episodes and selects a new "Daily Experiment". This website displays
    the collected data.
  </p>
</section>

<style>
  section {
    max-width: 900px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .time {
    display: contents;
  }
  h1 {
    text-decoration: underline;
  }
  p {
    border-left: 4px solid #333;
    padding: 0 1em;
    display: flex;
    max-width: 900px;
    justify-content: center;
    align-items: center;
    line-height: 1.5em;
  }
  p a:hover {
    text-decoration: underline;
  }
  p a {
    display: contents;
  }
</style>
