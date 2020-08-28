<template>
  <router-link v-if="to" :to="to" v-bind="$attrs" v-on="$listeners">
    <button :class="[color, size]">
      <slot />
    </button>
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <button :class="[color, size]">
      <slot />
    </button>
  </a>
  <button v-else :class="[color, size]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['color', 'to', 'href', 'size']
};
</script>

<style scoped>
button {
  box-shadow: 8px 8px #000;
  border: none;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  margin: 4px 4px 4px 12px;
  padding: 0 48px;
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #000;
}

button:hover {
  cursor: pointer;
  box-shadow: 5px 5px #0d3042;
  transition: box-shadow 0.2s ease-in;
}

button.small {
  height: 25px;
  margin: 1px 1px 1px 4px;
  box-shadow: 4px 4px #000;
  padding: 0 15px;
}

button.small:hover {
  box-shadow: 3px 3px #0d3042;
}

button:focus {
  outline: none;
}

a {
  text-decoration: none;
}

.blue {
  background: #013db4;
  color: #fff;
}

@media screen and (max-width: 728px) {
  button {
    padding: 0 18px;
    height: 35px;
  }

  button.small {
    height: 20px;
    margin: 3px 2px;
    box-shadow: 4px 4px #000;
    padding: 0 15px;
    font-size: 0.7rem;
  }
}
</style>
