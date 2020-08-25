<template>
  <header>
    <img src="../assets/logo.png" alt="Logo" />
    <p>
      Bienvenidos al podcast dónde cada semana hablaremos de temas de tecnología
      junto con un pequeño toque de drama, comedia y acción.
    </p>
    <BaseButton
      color="blue"
      href="https://open.spotify.com/show/5kS4rk5hFTcw85NQF7kSh9?si=NaKnR72ITW6ODha6RCMSEg"
      >Ver En Spotify</BaseButton
    >
  </header>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
export default {
  name: 'Header',
  components: { BaseButton }
};
</script>

<style scoped>
header {
  margin-top: 50px;
  text-align: center;
}

img {
  height: 100px;
}

p {
  margin: 20px auto 25px;
  width: 80%;
}

@media (min-width: 728px) {
  p {
    width: 50%;
  }
}
</style>
