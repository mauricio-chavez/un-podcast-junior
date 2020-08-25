<template>
  <div class="home">
    <Header />
    <Episodes />
    <Wave />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Episodes from '@/components/Episodes.vue';
import Wave from '@/components/Wave.vue';

export default {
  name: 'Home',
  components: { Header, Episodes, Wave }
};
</script>
