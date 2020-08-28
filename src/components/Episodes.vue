<template>
  <section>
    <h2>Issues</h2>
    <Episode
      v-for="episode in episodes"
      :key="episode.id"
      :name="episode.name"
      :date="episode.release_date"
      :description="episode.description"
      :image="episode.images[1].url"
      :url="episode.external_urls.spotify"
    />
  </section>
</template>

<script>
import Episode from '@/components/Episode.vue';

export default {
  name: 'Episodes',
  components: { Episode },
  data() {
    return {
      episodes: []
    };
  },
  async created() {
    const response = await fetch(
      'https://us-central1-un-podcast-junior.cloudfunctions.net/episodes'
    );
    const { items } = await response.json();
    this.episodes = items;
  }
};
</script>

<style scoped>
section {
  margin: 2% 12%;
}

h2 {
  font-size: 2.2rem;
}

@media screen and (max-width: 728px) {
  section {
    margin: 0% 4%;
  }
}
</style>
