<template>
<NavBar />
<div class="main">
  <div class="heroComp flex mx-10 my-48">
    <h3 class="text-5xl font-semibold py-24">
      Ayo berkembang bersama<br/>
      <span class="text-[#1D8925]">Sahabat Remaja</span>
    </h3>
    <img src="@/assets/imgHero.png" class="inline-block ml-16">
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
 
.heroComp h3 {
  font-family: 'Montserrat', sans-serif;
}

.heroComp img {
  width: 420px;
  height: 350px;
}

@media only screen and (max-width: 1030px) {
  .heroComp {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }

  .heroComp h3{
    font-size: 26px;
  }

  .heroComp img{
    width: 350px;
    height: 290px;
  }
}
@media only screen and (max-width: 720px) {
  .heroComp {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .heroComp h3{
    font-size: 18px;
  }

  .heroComp img{
    width: 270px;
    height: 225px;
  }
}
@media only screen and (max-width: 500px) {
  .heroComp {
    margin: 3rem 2rem;
  }

  .heroComp h3{
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 10px;
  }
  
  .heroComp img{
    width: 120px;
    height: 100px;
  }
}
</style>