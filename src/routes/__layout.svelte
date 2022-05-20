<script>
  import Nav from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  console.log(
    `%c

                                  MM
                                  MM
                                   MM
                                   .MM
                =M            MM.   MMM
                MMM          MMMMM  .MMM         MM. M
                .M.          MMMMM  .MMM        .MM.MD
                 MM           MMMM  IMMM       .MMMMM
                MMMM          MMMMMMMMMM      MMMM.
                MMMMM.       MMMMMMMMMMN       ..M.
  .MMMMMM,    NMMMMMMMM.  MMMMMMMMMMMMO    .+MMMMMM:     ,MMMMMM.
 MMMMMMMMMM   MMMMMMMMMMM$MMMMMMMMMMMMM  MMMMMMMMMMMM   MMMMMMMMMM
MMMMMMMMMMMM.MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.MMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
%cBE GOOD TO EACH OTHER!`,
    'color: #06283f;',
    'color: #666f84; font-weight: bold; font-size: 3.136em; text-decoration: underline; text-shadow: 2px 2px #000;'
  );
</script>

<div class="container">
  <Nav />
  <main class="content">
    <slot />
  </main>
  <Footer />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
  .content {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 55vh;
  }
  @media (max-width: 900px) {
    .content {
      padding-bottom: 8em;
    }
  }
  @media (max-width: 600px) {
    .content {
      min-height: 25vh;
    }
  }
</style>
