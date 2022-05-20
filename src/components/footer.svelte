<script>
  import { mstData } from '../store';
</script>

<footer>
  <p>Last Updated: {$mstData.gatheredOn}</p>
  <small>🪦 R.I.P. club-mst3k</small>
</footer>

<style>
  footer {
    position: fixed;
    background: #eee;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    font-size: 0.8em;
  }
</style>
