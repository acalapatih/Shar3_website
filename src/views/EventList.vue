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
            <div class="article inline-block my-12 mx-12 w-full">
                <h4 class="txtIsi text-xl font-semibold">Event SHAR3</h4>
                <select name="category" id="category" v-model="selectedCategory" class="mt-2 p-2 bg-[#289928] rounded-xl font-semibold text-white hover:bg-[#006400] active:bg-[#006400] cursor-pointer">
                    <option v-for="category in categories" v-bind:value="category.id" class="bg-[#289928] rounded-xl font-semibold text-white hover:bg-[#006400] active:bg-[#006400] cursor-pointer">
                    {{ category.name }}
                    </option>
                </select>
                <div v-show="selectedCategory == 0 | selectedCategory == 1" v-for="bph in resultQuery1" :key="bph.id" class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img :src=bph.img class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">{{ bph.title }}</h5>
                        <p class="text-justify text-sm my-2 w-[92%]">
                            {{ bph.desc }}
                        </p>
                        <p class="divisi">Divisi : {{ bph.divisi }}</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div v-show="selectedCategory == 0 | selectedCategory == 2" v-for="pembinaan in resultQuery2" :key="pembinaan.id" class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img :src=pembinaan.img class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">{{ pembinaan.title }}</h5>
                        <p class="text-justify text-sm my-2 w-[92%]">
                            {{ pembinaan.desc }}
                        </p>
                        <p class="divisi">Divisi : {{ pembinaan.divisi }}</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div v-show="selectedCategory == 0 | selectedCategory == 3" v-for="program in resultQuery3" :key="program.id" class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img :src=program.img class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">{{ program.title }}</h5>
                        <p class="text-justify text-sm my-2 w-[92%]">
                            {{ program.desc }}
                        </p>
                        <p class="divisi">Divisi : {{ program.divisi }}</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div v-show="selectedCategory == 0 | selectedCategory == 4" class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify text-sm my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p class="divisi">Divisi : Humed</p>
                        <button class="my-1 p-1 rounded-xl bg-white text-black hover:font-semibold">Lihat Jadwal</button>
                    </div>
                </div>
                <div v-show="selectedCategory == 0 | selectedCategory == 5" class="isi flex my-10 bg-[#184064] p-5 rounded-xl text-white">
                    <img src="../assets/imgEvent2.jpg" class="inline-block w-[300px] h-[168px] rounded-lg">
                    <div class="detail inline-block ml-3">
                        <h5 class="font-semibold">Judul Event</h5>
                        <p class="text-justify text-sm my-2 w-[92%]">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </p>
                        <p class="divisi">Divisi : SAQU</p>
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
import { vShow } from 'vue';

export default {
    name: 'eventlist',
    components: {
        NavbarComp,
        FooterComp
    },
    data() {
        return {
            searchQuery: null,
            bph: [
                {id: 1, img:"https://i.ibb.co/fYyrf5N/imgRaker.png", title:"RAKER (Rapat Kerja)", desc:"Setiap Divisi SHAR3 mempresentasikan rencana program kerja yang akan dilaksanakan selama satu periode.", divisi: "BPH"},
                {id: 2, img:"https://i.ibb.co/VVwY3VK/imgSerbu.png", title:"SERBU (Syuro Bulanan)", desc:"Pelaporan pelaksanaan Program Kerja terlaksana, tidak terlaksana selama sebulan dan merencanakan Program Kerja untuk bulan selanjutnya.", divisi: "BPH"},
                {id: 3, img:"https://i.ibb.co/ryRSyy9/img-Charter.png", title:"CHARTER (Charity Together)", desc:"Melaksanakan Open Donation untuk membantu kepentingan ummat.", divisi: "BPH"},
                {id: 4, img:"https://i.ibb.co/ZzWd32H/imgUps.png", title:"UPS (Upgrading Pengurus Shar3)", desc:"Memberikan pengarahan tentang bagaimana caranya menjadi pendakwah yang istiqomah dan tak kenal lelah.", divisi: "BPH"},
            ],
            pembinaan: [
                {id: 1, img:"https://i.ibb.co/yyNW0cP/img-Rekruitmen.png", title:"Rekruitmen dan BBM", desc:"Memantau serta mendukung keberlangsungan acara PSB yang diadakan oleh ROHIS & Membentuk kelompok mentoring baru untuk siswa kelas 10.", divisi: "Pembinaan"},
                {id: 2, img:"https://i.ibb.co/8bggnC4/img-Sekolah-Coach.png", title:"Sekolah Coach", desc:"Mempersiapkan, menyeleksi coach baru, serta pemberian bekal terkait pembinaan.", divisi: "Pembinaan"},
                {id: 3, img:"https://i.ibb.co/YNsNC5T/img-Pemantauan-Event.png", title:"Pemantauan Event", desc:"Memantau serta mendukung keberlangsungan acara Rohis SMAN 3 Kabupaten Tangerang yang memiliki kaitan dengan program pembinaan SHAR3.", divisi: "Pembinaan"},
                {id: 4, img:"https://i.ibb.co/HB7nzQj/img-Nongski-Kuy.png", title:"Nongski Kuy", desc:"Mentoring gabungan untuk para pengurus SHAR3.", divisi: "Pembinaan"},
                {id: 5, img:"https://i.ibb.co/fFHgDBj/img-Pokemon-Go.png", title:"Pokemon Go", desc:"Mentoring dalam bentuk games, memasak, dolanan, dan lainnya serta pemberian materi keislaman.", divisi: "Pembinaan"},
                {id: 6, img:"https://i.ibb.co/pn2Lj4d/img-Rihlah.png", title:"Rihlah", desc:"Melakukan kegiatan mentoring dengan konsep rihlah.", divisi: "Pembinaan"},
            ],
            program: [
                {id: 1, img:"https://i.ibb.co/QNkYF6y/img-Jaulah.png", title:"Jaulah", desc:"Melakukan kunjungan untuk menjalin Silaturahmi antara pengurus SHAR3, alumni, dan guru.", divisi: "Program"},
                {id: 2, img:"https://i.ibb.co/Bg4JFLz/imgSekuy.png", title:"SEKUY (Semangat Berkurban Kuy)", desc:"Melatih ibadah berkurban serta membantu sesama kepada pengurus SHAR3, Anggota Rohis dan masyarakat sekitar yang membutuhkan.", divisi: "Program"},
                {id: 3, img:"https://i.ibb.co/jf24gp1/img-Silatbar.png", title:"Silatbar (Silaturahmi Akbar)", desc:"Menjalin silaturahmi keluarga besar alumni ROhis SMAN 3 Kabupaten Tangerang.", divisi: "Program"},
                {id: 4, img:"https://i.ibb.co/80sXcMV/img-Hargur.png", title:"Bingkisan Cinta Hari Guru", desc:"Memperingati Hari Guru dan Menjalin Silaturahmi dengan guru SMAN 3 Kabupaten Tangerang.", divisi: "Program"},
            ],
            categories: [
                { id: 0, name: "Semua Event" },
                { id: 1, name: "BPH" }, 
                { id: 2, name: "Pembinaan" },
                { id: 3, name: "Program" },
                { id: 4, name: "Humed" },
                { id: 5, name: "SAQU" }
            ],
            selectedCategory: "",
        };
    },
    mounted() {
        this.selectedCategory = 0;
    },
    computed: {
        resultQuery1() {
            return this.bph;
        },
        resultQuery2() {
            return this.pembinaan;
        },
        resultQuery3() {
            return this.program;
        },
        filteredItems: function() {
            return el.category_id === this.selectedCategory;
        }
    }
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

    .detail h5 {
        font-size: 16px;
    }

    .detail p {
        font-size: 14px;
        width: 100%;
    }

    .detail .divisi {
        font-size: 15px;
    }

    .detail button {
        font-size: 15px;
    }
}
</style>