<template>
  <NavbarComp />
  <div class="main">
    <div class="header">
      <div>
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i">
            <img class="imgHeader" :src="currentImg" />
          </div>
        </transition-group>
        <a class="prev" @click="prev">&#10094;</a>
        <a class="next" @click="next">&#10095;</a>
      </div>
    </div>
    <div class="content flex mx-12">
      <div class="aside inline-block my-12 mx-8 bg-[#E7FEEA] rounded-2xl p-5">
        <ul>
          <router-link to="/articlelist">
            <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Artikel SHAR3</li>
          </router-link>
          <router-link to="calendar">
            <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Kalender SHAR3</li>
          </router-link>
          <router-link to="daftarsaqu">
            <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Daftar SAQU</li>
          </router-link>
          <router-link to="documentation">
            <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Dokumentasi</li>
          </router-link>
          <router-link to="/shar3store">
            <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">SHAR3 Store</li>
          </router-link>
        </ul>
      </div>
      <div class="article absolute mt-[-6rem] ml-64 mr-20 bg-[#E7FEEA] rounded-3xl p-10 z-10">
        <h3 class="title font-bold text-2xl">Dashboard</h3>
        <div class="isi my-8 mx-5">
          <h4 class="my-2 text-lg font-semibold">Event SHAR3</h4>
          <div class="flex">
            <img src="../assets/event/imgJaulah.png" class="inline-block rounded-xl h-[168px] w-[318px]">
            <div class="detail inline-block m-5">
              <h5 class="font-semibold my-2">Jaulah</h5>
              <p class="text-justify">
                Melakukan kunjungan untuk menjalin Silaturahmi antara pengurus SHAR3, alumni, dan guru.
              </p>
            </div>
          </div>
          <router-link to="/eventlist" class="more my-2 cursor-pointer hover:font-semibold">
            <p>Lihat Event lainnya...</p>
          </router-link>
        </div>
        <div class="isi my-8 mx-5">
          <h4 class="my-2 text-lg font-semibold">Artikel SHAR3</h4>
          <div class="flex">
            <img src="../assets/imgArtikel.jpg" class="inline-block rounded-xl h-[168px] w-[318px]">
            <div class="detail inline-block m-5">
              <h5 class="font-semibold my-2">Judul Artikel</h5>
              <p class="text-justify">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <router-link to="/articlelist" class="more my-2 cursor-pointer hover:font-semibold">
            <p>Lihat Artikel lainnya...</p>
          </router-link>
        </div>
        <div class="isi mt-8 mx-5">
          <h4 class="my-2 text-lg font-semibold">Dokumentasi SHAR3</h4>
          <div class="flex">
            <div class="dokumentasi1 inline-block m-5">
              <img src="../assets/event/imgUps.png" class="inline-block rounded-xl h-[168px] w-[318px]">
              <h5 class="text-center font-semibold my-2">UPS (Upgrading Pengurus SHAR3)</h5>
            </div>
            <div class="dokumentasi2 inline-block m-5">
              <img src="../assets/event/imgHargur.png" class="inline-block rounded-xl h-[168px] w-[318px]">
              <h5 class="text-center font-semibold my-2">Bingkisan Cinta Hari Guru</h5>
            </div>
          </div>
          <router-link to="/article" class="more my-2 cursor-pointer hover:font-semibold">
            <p>Lihat Dokumentasi lainnya...</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="space h-[350px] mt-64"></div>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'dashboard',
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      images: [
        "https://i.ibb.co/1ZtNMgY/img-Header.png",
        "https://i.ibb.co/XF1c7Gs/img-Header2.png",
        "https://i.ibb.co/Nrt964w/img-Header3.png",
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

.aside {
  font-family: 'Poppins', sans-serif;
}

.article {
  font-family: 'Montserrat', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  overflow: hidden;
  visibility: visible;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.imgHeader {
  width:100%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}


@media only screen and (max-width: 1024px) {
  .isi {
    margin-left: 0;
  }

  .isi img {
    width: 200px;
    height: 105px;
  }

  .detail {
    margin-top: 0;
    height: 100px;
    font-size: 12px;
  }

  .detail h5 {
    margin-top: 0;
  }

  .more p,
  .dokumentasi1 h5,
  .dokumentasi2 h5 {
    font-size: 12px;
  }
}

@media only screen and (max-width: 768px) {
  .content {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .isi img {
    width: 170px;
    height: 90px;
    position: absolute;
  }

  .detail {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .dokumentasi1 {
    margin-left: 0;
  }
  
  .dokumentasi1 h5 {
    margin-top: 6rem;
  }

  .dokumentasi2 {
    display: none;
  }

  .space {
    height: 550px;
  }
}

@media only screen and (max-width: 640px) {
  .aside {
    position: absolute;
    margin-left: 0;
    width: 85%;
  }

  .article {
    position: relative;
    margin: 0;
    margin-top: 20rem;
  }

  .isi{
    margin-left: 0;
    margin-bottom: 2rem;
  }

  .detail {
    margin-left: 0;
    margin-bottom: 3rem;
  }

  .space {
    display: none;
  }
}
</style>