<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to your Vite + Vue app. This is a sample component to get you started.
    </p>
  </div>
</template>

<style scoped>
.card {
  padding: 2em;
  text-align: center;
}

h1 {
  color: #42b983;
  font-size: 2.5em;
  margin: 0.5em 0;
}

p {
  margin: 1em 0;
  line-height: 1.6;
}
</style>
