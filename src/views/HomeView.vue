<template>
  <NavBar />
  <div class="main">

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  mounted() {
    let tailwind = document.createElement('script')
    tailwind.setAttribute('src', 'https://cdn.tailwindcss.com')
    document.head.appendChild(tailwind)
  },
}
</script>

<style scoped>

</style>