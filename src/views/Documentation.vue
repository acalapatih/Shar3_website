<template>
    <NavbarComp />
    <div class="main">
        <div class="header py-10 px-20 bg-[#E7FEEA]">
            <h3 class="txtHeader font-bold text-2xl">Dokumentasi</h3>
            <p class="my-1 text-justify">
                Halaman ini berisi dokumentasi dari kegiatan yang diselenggarakan oleh SHAR3.
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
            <div class="article inline-block my-12 mx-12 py-7 px-10 w-full">
                <h4 class="font-semibold text-xl">Dokumentasi SHAR3</h4>
                <div class="flex flex-wrap">
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgRaker.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">RAKER (Rapat Kerja)</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgSerbu.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">SERBU (Syuro Bulanan)</p>
                    </div>
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgUps.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">UPS (Upgrading Pengurus SHAR3)</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgCharter.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">CHARTER (Charity Together)</p>
                    </div>
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgRekruitmen.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Rekruitmen</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgSekolahCoach.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Sekolah Coach</p>
                    </div>
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgPemantauanEvent.png" class="rounded-xl bord">
                        <p class="font-semibold text-center my-1">Pemantauan Event</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgNongskiKuy.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Nongski Kuy</p>
                    </div>
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgPokemonGo.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Pokemon Go</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgRihlah.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Rihlah</p>
                    </div>
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgJaulah.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Jaulah</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgSekuy.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">SEKUY (Semangat Berkurban Kuy)</p>
                    </div>
                    <div class="img1 mx-2 my-5">
                        <img src="../assets/event/imgHargur.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Bingkisan Cinta Hari Guru</p>
                    </div>
                    <div class="img2 mx-2 my-5">
                        <img src="../assets/event/imgSilatbar.png" class="rounded-xl">
                        <p class="font-semibold text-center my-1">Silatbar (Silaturahmi Akbar)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComp />
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'documentation',
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