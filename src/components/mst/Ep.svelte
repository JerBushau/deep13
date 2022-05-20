<script>
  export let ep;
  const gizLink = 'https://www.gizmoplex.com/';
</script>

<div class="rand-card">
  <h1><a href={ep.link}>{ep.title}</a></h1>
  <h3>{ep.epNumber} - Season {ep.season}</h3>
  <p>{ep.description} <span><a href={gizLink}>- Gizmoplex</a></span></p>
  <a href={ep.link}>Watch for free at The Gizmoplex!</a>
</div>

<style>
  h1 {
    font-size: 3em;
    margin-bottom: 0;
  }
  h3 {
    font-size: 1.5em;
    margin-bottom: 0;
  }
  .rand-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    text-align: center;
    font-size: 1.55em;
    max-width: 1200px;
    padding: 1em;
    display: flex;
    align-items: center;
    min-height: 150px;
    line-height: 1.45em;
  }
  p span {
    display: contents;
    font-size: 0.5em;
  }
  p span a {
    display: contents;
  }
</style>
