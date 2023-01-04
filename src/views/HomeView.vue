<template>
<NavbarComp />
<div class="main">
  <div class="heroComp flex mx-10 my-48">
    <h3 class="text-5xl font-semibold py-24">
      Ayo berkembang bersama<br/>
      <span class="text-[#1D8925]">Sahabat Remaja</span>
    </h3> 
    <img src="@/assets/imgHero.png" class="inline-block ml-10">
  </div>
  <div class="content flex my-64 mx-56 md:mx-20">
    <div class="aside sticky top-[150px] bg-[#828282] rounded-xl p-5 h-[200px]">
      <ul>
        <li class="development cursor-pointer my-2 py-2 px-3 text-white rounded-md hover:bg-white hover:text-black" @click="goto('scroll1')" tabindex="0">Development</li>
        <li class="dakwah cursor-pointer my-2 py-2 px-3 text-white rounded-md hover:bg-white hover:text-black" @click="goto('scroll2')" tabindex="0">Da'wah</li>
        <li class="solidarity cursor-pointer my-2 py-2 px-3 text-white rounded-md hover:bg-white hover:text-black" @click="goto('scroll3')" tabindex="0">Solidarity</li>
      </ul>
    </div>
    <div class="article inline-block ml-16">
      <div class="isiArticle">
        <h4 class="batas1 mb-7 font-semibold" ref="scroll1">Development</h4>
        <p class="my-7 text-justify">
          SHAR3 menjadi wadah untuk pembinaan dan pengembangan potensi remaja muslim dalam hal ketakwaan serta kebermanfaatan kepada lingkungan sekitar.
        </p>
        <a href="#" class="cursor-pointer text-white my-5 py-2 px-3 rounded-md bg-[#828282] hover:font-semibold">Read More</a>
      </div>
      
      <div class="isiArticle my-16">
        <div class="batas2 h-40"></div>
        <h4 class="mb-7 font-semibold" ref="scroll2">Da'wah</h4>
        <p class="my-7 text-justify">
          Dakwah menjadi fokus dari program yang diselenggarakan oleh SHAR3. Kegiatan maupun konten disajikan oleh SHAR3 sebagai sarana peningkatan ilmu keagamaan dan keimanan.
        </p>
        <a href="#" class="cursor-pointer text-white my-5 py-2 px-3 rounded-md bg-[#6AA121] hover:font-semibold">Read More</a>
      </div>
      <div class="isiArticle my-16">
        <div class="batas3 h-40"></div>
        <h4 class="mb-7 font-semibold" ref="scroll3">Solidarity</h4>
        <p class="my-7 text-justify">
          SHAR3 memiliki misi kebermanfaatan kepada sesama manusia dengan pelaksanaan kegiatan sosial maupun agenda donasi kemanusiaan kepada yang membutuhkan.
        </p>
        <a href="#" class="cursor-pointer text-white my-5 py-2 px-3 rounded-md bg-[#964800] hover:font-semibold">Read More</a>
      </div>
    </div>
  </div>
</div>
<FooterComp />
</template>

<script>
// @ is an alias to /src
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComp
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      const aside = document.querySelector(".aside");
      const font1 = document.querySelector(".development");
      const font2 = document.querySelector(".dakwah");
      const font3 = document.querySelector(".solidarity");
      if(refName == "scroll1") {
        aside.style.top = "0";
        var top = document.querySelector(".batas1").offsetTop;
      }
      else if(refName == "scroll2") {
        aside.style.top = "150px";
        var top = document.querySelector(".batas2").offsetTop;
      }
      else if(refName == "scroll3") {
        aside.style.top = "150px";
        var top = document.querySelector(".batas3").offsetTop;
      }
      window.scrollTo(0, top);
      

      if(refName == "scroll1") {
        aside.style.backgroundColor = '#828282';
        font1.style.color = 'black';
        font1.style.backgroundColor = 'white';
        font2.style.color = 'white';
        font2.style.backgroundColor = 'unset';
        font3.style.color = 'white';
        font3.style.backgroundColor = 'unset';
      }
      else if(refName == "scroll2") {
        aside.style.backgroundColor = '#6AA121';
        font2.style.color = 'black';
        font2.style.backgroundColor = 'white';
        font1.style.color = 'white';
        font1.style.backgroundColor = 'unset';
        font3.style.color = 'white';
        font3.style.backgroundColor = 'unset';
      }
      else if(refName == "scroll3") {
        aside.style.backgroundColor = '#964800';
        font3.style.color = 'black';
        font3.style.backgroundColor = 'white';
        font2.style.color = 'white';
        font2.style.backgroundColor = 'unset';
        font1.style.color = 'white';
        font1.style.backgroundColor = 'unset';
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
 
.main {
  font-family: 'Poppins', sans-serif;
}

.heroComp img {
  width: 420px;
  height: 350px;
}

@media only screen and (max-width: 1024px) {
  .heroComp h3 {
    font-size: 26px;
  }

  .heroComp img{
    width: 350px;
    height: 290px;
  }
}

@media only screen and (max-width: 768px) {
  .heroComp h3 {
    font-size: 18px;
  }

  .heroComp img{
    width: 270px;
    height: 225px;
  }

  .content {
    margin: 8rem 5rem;
  }
}

@media only screen and (max-width: 640px) {
  .heroComp {
    margin: 7rem 1.5rem;
  }

  .heroComp h3 {
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 12px;
  }
  
  .heroComp img{
    width: 120px;
    height: 100px;
    margin-left: 2rem;
  }

  .content {
    margin: 2.5rem 1.5rem;
    font-size: 10px;
  }

  .aside {
    padding: 0.5rem;
    height: 150px;
  }

  .article {
    margin-left: 2rem;
    width: 50%;
  }
}
</style>