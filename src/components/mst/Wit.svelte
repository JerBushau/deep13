<script>
  export let wit;
  export let toggleWit;
  export let isOpen;
  // Maybe the wit is a pop up kinda thing instead of it;s own page?
  // keeping this around just in case
</script>

<div class={!isOpen ? 'hidden' : ''}>
  {#if isOpen}
    <button class="close" on:click={toggleWit}>X</button>
    <h1>Watch It Together</h1>
    <small>It's really more of a 'we're all looking up at the same stars' kinda thing...</small>
    <h2 class="wit-title"><a href={wit.link}>{wit.title}</a></h2>
    <h3>{wit.epNumber} - Season {wit.season}</h3>
    <p>{wit.description}</p>
    <a href={wit.link}>Watch for free at The Gizmoplex!</a>
  {/if}
</div>

<style>
  .close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }
  h1 {
    font-size: 3em;
    margin-bottom: 0;
  }
  h3 {
    font-size: 1.5em;
    margin-bottom: 0;
  }
  .hidden {
    visibility: hidden;
  }
  div {
    max-width: 600px;
    background: #222;
    color: #fff;
    padding: 1em;
    position: absolute;
    top: 1em;
    left: 1em;
  }
</style>
