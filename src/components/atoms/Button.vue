<template>
  <button @click="$router.push(to)" class="btn btn-purple ">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'g-button',
  props: {
    to: String
  },
  methods: {}
}
</script>

<style scoped>
.btn-purple {
  background-color: #9969d3;
  color: #fff;
}
</style>
