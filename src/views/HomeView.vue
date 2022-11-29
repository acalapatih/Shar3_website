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
  <div class="content flex my-64 mx-56">
    <div class="aside sticky top-1 bg-[#828282] rounded-xl p-5 h-[200px]">
      <ul>
        <li class="cursor-pointer my-2 py-2 px-3 text-white rounded-md hover:bg-white hover:text-black">Development</li>
        <li class="cursor-pointer my-2 py-2 px-3 text-white rounded-md hover:bg-white hover:text-black">Da'wah</li>
        <li class="cursor-pointer my-2 py-2 px-3 text-white rounded-md hover:bg-white hover:text-black">Solidarity</li>
      </ul>
    </div>
    <div class="article inline-block ml-16">
      <div class="isiArticle">
        <h4 class="mb-7 font-semibold">Development</h4>
        <p class="my-7 text-justify">
          SHAR3 menjadi wadah untuk pembinaan dan pengembangan potensi remaja muslim dalam hal ketakwaan serta kebermanfaatan kepada lingkungan sekitar.
        </p>
        <a href="#" class="cursor-pointer text-white my-5 py-2 px-3 rounded-md bg-[#828282] hover:font-semibold">Read More</a>
      </div>
      <div class="isiArticle my-64">
        <h4 class="mb-7 font-semibold">Da'wah</h4>
        <p class="my-7 text-justify">
          Dakwah menjadi fokus dari program yang diselenggarakan oleh SHAR3. Kegiatan maupun konten disajikan oleh SHAR3 sebagai sarana peningkatan ilmu keagamaan dan keimanan.
        </p>
        <a href="#" class="cursor-pointer text-white my-5 py-2 px-3 rounded-md bg-[#6AA121] hover:font-semibold">Read More</a>
      </div>
      <div class="isiArticle mt-64">
        <h4 class="mb-7 font-semibold">Solidarity</h4>
        <p class="my-7 text-justify">
          SHAR3 memiliki misi kebermanfaatan kepada sesama manusia dengan pelaksanaan kegiatan sosial maupun agenda donasi kemanusiaan kepada yang membutuhkan.
        </p>
        <a href="#" class="cursor-pointer text-white my-5 py-2 px-3 rounded-md bg-[#964800] hover:font-semibold">Read More</a>
      </div>
    </div>
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