<script>
</script>

<div class="f0f-container">
  <h1 class="f0f-dude">(</h1>
  <h1 class="f0f-arm">ノ</h1>
  <h1 class="f0f-dude">ಠ益ಠ)</h1>
  <h1 class="f0f-arm">ノ</h1>
  <h1 class="f0f-wind">彡</h1>
  &nbsp;
  <h1 class="f0f-text">404 not found</h1>
</div>

<style>
  .f0f-container {
    display: flex;
  }

  .f0f-dude {
    animation: move-right 1.5s;
  }

  .f0f-arm {
    animation: swing-arm 1.56s;
    animation-fill-mode: forwards;
  }

  .f0f-wind {
    animation: up 0.3s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .f0f-text {
    animation: flip 1s;
    animation-delay: 1.7s;
    animation-fill-mode: forwards;
  }

  @keyframes swing-arm {
    0% {
      transform: translateX(-55vw);
    }

    97% {
      transform: rotate(90deg);
    }

    100% {
      transform: translateX(0) rotate(0);
    }
  }

  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes move-right {
    from {
      transform: translateX(-55vw);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes flip {
    0% {
      transform: translateY(0);
      transform: rotate(0);
    }

    5% {
      transform: translateY(-100%);
    }

    85% {
      transform: translateY(0);
      transform: rotate(-180deg);
    }

    100% {
      transform: translateY(0);
      transform: rotate(-180deg);
    }
  }
  @media (max-width: 600px) {
    .f0f-dude,
    .f0f-text,
    .f0f-arm,
    .f0f-wind {
      font-size: 1rem;
    }
  }
</style>
