<template>
    <NavbarComp />
    <div class="main">
        <div class="header py-10 px-20 bg-[#E7FEEA]">
            <h3 class="txtHeader font-bold text-2xl">Daftar SAQU</h3>
            <p class="my-1 text-justify">
                SAQU adalah program tahsin tahfidz yang diselenggarakan oleh divisi Sahabat Quran (SAQU).
            </p>
        </div>
        <div class="content flex mx-12">
            <div class="aside inline-block my-12 mx-8 bg-[#E7FEEA] h-[245px] w-[300px] rounded-2xl p-5">
                <ul>
                    <router-link to="/articlelist">
                        <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Artikel SHAR3</li>
                    </router-link>
                    <router-link to="/calendar">
                        <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Kalender SHAR3</li>
                    </router-link>
                    <router-link to="/daftarsaqu">
                        <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Daftar SAQU</li>
                    </router-link>
                    <router-link to="/documentation">
                        <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">Dokumentasi</li>
                    </router-link>
                    <router-link to="/shar3store">
                        <li class="asideList py-2 px-3 font-semibold rounded-md cursor-pointer hover:bg-white">SHAR3 Store</li>
                    </router-link>
                </ul>
            </div>
            <div class="article inline-block my-12 mx-12 bg-[#E7FEEA] rounded-2xl py-7 px-10 w-full">
                <h4 class="font-semibold text-xl">Daftar SAQU</h4>
                <p class="my-2 text-justify">
                    Mohon maaf untuk saat ini, halaman ini belum tersedia.
                </p>
            </div>
        </div>
    </div>
    <FooterComp />
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'daftarsaqu',
  components: {
    NavbarComp,
    FooterComp
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

.main {
    font-family: 'Montserrat', sans-serif;
}

.aside {
  font-family: 'Poppins', sans-serif;
}

@media only screen and (max-width: 1024px) {
    .header {
        padding: 2rem 3rem;
    }

    .aside,
    .article {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .aside {
        height: 270px;
    }
}

@media only screen and (max-width: 768px) {

}

@media only screen and (max-width: 640px) {
    .header p {
        font-size: 14px;
    }

    .aside {
        position: absolute;
        margin-left: 0;
        padding: 1rem;
        width: 80%;
        height: 245px;
    }

    .article {
        position: relative;
        margin: 0;
        margin-top: 20rem;
    }

    .article p {
        font-size: 12px;
    }
}
</style>