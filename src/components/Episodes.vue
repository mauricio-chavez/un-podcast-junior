<template>
  <section>
    <div class="loader-container" v-if="isLoading">
      <fulfilling-square-spinner :size="50" color="#013db4" />
    </div>
    <template v-else>
      <h2>Issues</h2>
      <Episode
        v-for="episode in episodes"
        :key="episode.id"
        :name="episode.name"
        :date="episode.release_date"
        :description="episode.description"
        :image="episode.images[1].url"
        :url="episode.external_urls.spotify"
        :preview="episode.audio_preview_url"
      />
    </template>
  </section>
</template>

<script>
import Episode from '@/components/Episode.vue';
import { FulfillingSquareSpinner } from 'epic-spinners';

export default {
  name: 'Episodes',
  components: { Episode, FulfillingSquareSpinner },
  data() {
    return {
      episodes: [],
      isLoading: true
    };
  },
  async created() {
    const response = await fetch(
      'https://us-central1-un-podcast-junior.cloudfunctions.net/episodes'
    );
    const { items } = await response.json();
    this.episodes = items;
    this.isLoading = false;
  }
};
</script>

<style scoped>
section {
  margin: 2% 15%;
}

h2 {
  font-size: 2.2rem;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
}

@media screen and (max-width: 728px) {
  section {
    margin: 0% 4%;
  }
}
</style>
