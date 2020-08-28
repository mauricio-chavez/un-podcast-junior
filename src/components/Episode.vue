<template>
  <article>
    <div class="image">
      <img :src="image" :alt="name" />
    </div>
    <div class="content">
      <h3>{{ shortName }}</h3>
      <small>{{ date }}</small>
      <p class="description">{{ shortDescription }}</p>
      <div class="buttons">
        <BaseButton color="blue" size="small" :href="url">
          Ir al Episodio
        </BaseButton>
        <BaseButton size="small" @click="isPlaying = !isPlaying">
          {{ isPlaying ? 'Detener' : 'Escuchar Avance' }}
        </BaseButton>
        <audio :src="preview"></audio>
      </div>
    </div>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'Episode',
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    preview: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      previewAudio: new Audio(this.preview),
      isPlaying: false
    };
  },
  computed: {
    shortName() {
      return this.name.substring(9).trim();
    },
    shortDescription() {
      let description;
      const linksIndex = this.description.indexOf('ENLACES');

      if (linksIndex === -1) {
        description = this.description.substring(0, 230);
      } else {
        description = this.description.substring(0, linksIndex);
      }

      return description;
    }
  },
  watch: {
    isPlaying(shouldPlay) {
      if (shouldPlay) {
        this.previewAudio.play();
      } else {
        this.previewAudio.pause();
        this.previewAudio.currentTime = 0;
      }
    }
  },
  components: { BaseButton }
};
</script>

<style scoped>
article {
  display: flex;
  align-items: space-evenly;
  background: #f0f0f0;
  border-radius: 15px;
  margin: 25px 0;
}

h3 {
  margin: 5px 0;
  text-align: center;
  font-size: 1.2rem;
}

.image {
  margin: 0;
  padding: 0;
}

img,
.image {
  width: 210px;
  height: 210px;
  border-radius: 15px 0 0 15px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.description {
  font-size: 0.9rem;
  text-align: center;
  width: 80%;
}

.buttons {
  text-align: center;
  margin-bottom: 10px;
}

@media (max-width: 728px) {
  h3 {
    font-size: 1rem;
  }

  img,
  .image {
    width: 100px;
    height: 100px;
  }

  .description {
    display: none;
  }

  small {
    display: none;
  }
}
</style>
