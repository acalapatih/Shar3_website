<template>
    <NavbarComp />
    <div class="main">
        <div class="header py-10 px-20 bg-[#E7FEEA]">
            <h3 class="txtHeader font-bold text-2xl">Event</h3>
            <p class="my-1 text-justify">
                SHAR3 memiliki berbagai macam event yang diselenggarakan sesuai dengan visi misi organisasi.
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
                    <router-link to="/saqu">
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
            <div class="article inline-block my-12 mx-12 w-full">
                <h4 class="txtIsi text-xl font-semibold">Event SHAR3</h4>
                <div class="filter flex my-3">
                    <button class="inline-block mr-3 p-2 bg-[#289928] rounded-2xl font-semibold text-white hover:bg-[#006400] focus:bg-[#006400]">Semua Event</button>
                    <button class="inline-block mr-3 p-2 bg-[#289928] rounded-2xl font-semibold text-white hover:bg-[#006400] focus:bg-[#006400]">BPH</button>
                    <button class="inline-block mr-3 p-2 bg-[#289928] rounded-2xl font-semibold text-white hover:bg-[#006400] focus:bg-[#006400]">Pembinaan</button>
                    <button class="inline-block mr-3 p-2 bg-[#289928] rounded-2xl font-semibold text-white hover:bg-[#006400] focus:bg-[#006400]">Program</button>
                    <button class="inline-block mr-3 p-2 bg-[#289928] rounded-2xl font-semibold text-white hover:bg-[#006400] focus:bg-[#006400]">Humed</button>
                    <button class="inline-block mr-3 p-2 bg-[#289928] rounded-2xl font-semibold text-white hover:bg-[#006400] focus:bg-[#006400]">SAQU</button>
                </div>
                <div class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p>Divisi : BPH</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p>Divisi : Pembinaan</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p>Divisi : Program</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p>Divisi : Humed</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p>Divisi : SAQU</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
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
  name: 'eventlist',
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
        padding: 2rem 4rem;
    }

    .aside,
    .article {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .filter {
        margin-right: 0;
        font-size: 12px;
    }

    .isi img {
        width: 200px;
        height: 112px;
    }

    .isi {
        font-size: 12px;
    }
}

@media only screen and (max-width: 768px) {
    .filter {
        display: none;
    }

    .isi img {
        width: 170px;
        height: 95px;
        position: absolute;
    }

    .detail {
        margin-left: 0;
        margin-top: 7rem;
        margin-bottom: 0;
    }

    .detail p {
        width: 170px;
    }
}

@media only screen and (max-width: 640px) {
    .header p {
        font-size: 14px;
    }

    .aside {
        position: absolute;
        margin-left: 0;
        padding: 1rem;
        width: 70%;
    }

    .article {
        position: relative;
        margin: 0;
        margin-top: 20rem;
    }
    
    .isi {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .detail p {
        width: 100%;
    }
}
</style>