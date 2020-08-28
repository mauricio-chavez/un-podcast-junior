<template>
  <div class="home">
    <Header />
    <Episodes />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Episodes from '@/components/Episodes.vue';

export default {
  name: 'Home',
  components: { Header, Episodes }
};
</script>
