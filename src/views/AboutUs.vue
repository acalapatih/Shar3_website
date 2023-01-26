<template>
    <NavbarComp />
    <div class="main">
        <div class="header py-10 px-20 bg-[#E7FEEA]">
            <h3 class="txtHeader font-bold text-2xl">Tentang Kami</h3>
            <p class="my-1 text-justify">
                Halaman ini berisi profil organisasi Sahabat Remaja (SHAR3)
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
                <h4 class="font-semibold text-xl">Sahabat Remaja <br>(SHAR3)<br/></h4>
                <p class="my-2 text-justify">
                    Sahabat Remaja (SHAR3) adalah organisasi yang dibentuk oleh forum alumni Rohis SMAN 3 Kabupaten Tangerang. Organisasi ini berdiri sejak tahun 2018 dengan misi untuk mempererat silaturahmi antar alumni Rohis, membina Rohis, dan memberi kebermanfaatan kepada masyarakat melalui berbagai program kerja.
                </p>
                <div class="visi my-4 mx-4">
                    <h5 class="font-semibold text-lg">Visi</h5>
                    <p class="text-justify">
                        Menjadi organisasi dakwah Islam yang
                        profesional dan berwawasan luas, mampu
                        membangun dan mengembangkan potensi
                        Remaja dan Bertaqwa, Cerdas, Kreatif, dan
                        Bersolidaritas Tinggi serta terwujudnya 
                        umat Islam yang Madani.
                    </p>
                </div>
                <div class="misi my-4 mx-4">
                    <h5 class="font-semibold text-lg">Misi</h5>
                    <p class="text-justify">
                        Memberikan kontribusi nyata dalam
                        pembangunan bangsa dan negara melalui
                        dakwah, pengkajian, pemahaman dan
                        penerapan ajaran Islam yang dilakukan
                        secara menyeluruh, berkesinambungan dan
                        terintegrasi sesuai peran, posisi, tanggung
                        jawab, profesi sebagai komponen
                        bangsadalam wadah NKRI.
                    </p>
                </div>
                <h4 class="mt-7 font-semibold text-xl">Divisi SHAR3</h4>
                <p class="my-4 text-justify">
                    Ada lima divisi di dalam organisasi SHAR3 yang memiliki visi dan misinya sendiri untuk memberikan kebermanfaatan bagi internal maupun eksternal.
                </p>
                <div class="bph my-4 mx-4">
                    <h5 class="font-semibold text-lg">BPH <br>(Badan Pengurus Harian)<br/></h5>
                    <div class="visi my-3 mx-6">
                        <h5 class="font-semibold">Visi</h5>
                        <p class="text-justify">
                            Mengawasi, melancarkan dan mengevaluasi seluruh program kerja setiap divisi.
                        </p>
                    </div>
                    <div class="misi my-3 mx-6">
                        <h5 class="font-semibold">Misi</h5>
                        <p class="text-justify">
                            1. Mempererat ukhuwah Islamiyah antar pengurus SHAR3. <br/>
                            2. Mengembangkan kreativitas, minat dan bakat sesuai dengan divisi masing-masing.
                        </p>
                    </div>
                </div>
                <div class="pembinaan my-4 mx-4">
                    <h5 class="font-semibold text-lg">Pembinaan</h5>
                    <div class="visi my-3 mx-6">
                        <h5 class="font-semibold">Visi</h5>
                        <p class="text-justify">
                            Dibina dan membina anggota ROHIS dan SHAR3 untuk membentuk pribadi yang bertaqwa dan berakhlakul karimah.
                        </p>
                    </div>
                    <div class="misi my-3 mx-6">
                        <h5 class="font-semibold">Misi</h5>
                        <p class="text-justify">
                            1. Mengadakan, mengawasi, serta mendukung seluruh agenda pembinaan. <br/>
                            2. Mengadakan agenda yang bertujuan mempererat
                            silaturahmi antar anggota yang terlibat dalam
                            pembinaan. <br/>
                            3. Membentuk mentoring yang inovatif dan
                            inspiratif.
                        </p>
                    </div>
                </div>
                <div class="program my-4 mx-4">
                    <h5 class="font-semibold text-lg">Program</h5>
                    <div class="visi my-3 mx-6">
                        <h5 class="font-semibold">Visi</h5>
                        <p class="text-justify">
                            Mensyiarkan dakwah, menjalin ukhuwah dan silaturahmi melalui program-program yang bersifat internal maupun eksternal.
                        </p>
                    </div>
                    <div class="misi my-3 mx-6">
                        <h5 class="font-semibold">Misi</h5>
                        <p class="text-justify">
                            1. Menjalin ukhuwah dan silaturahmi dengan pengurus SHAR3 dan keluarga besar Rohis SMAN 3 Kabupaten Tangerang melalui program jaulah, silatbar, dan bingkisan cinta hari guru. <br/>
                            2. Berbagi daging kurban kepada pengurus Rohis ataupun masyarakat sekitar yang sedang mengalami kesulitan ekonomi melalui program Super Qurban.
                        </p>
                    </div>
                </div>
                <div class="humed my-4 mx-4">
                    <h5 class="font-semibold text-lg">Humed</h5>
                    <div class="visi my-3 mx-6">
                        <h5 class="font-semibold">Visi</h5>
                        <p class="text-justify">
                            Menjadi wadah syi'ar dan pendukung bagi pendakwah Islam secara digital maupun langsung.
                        </p>
                    </div>
                    <div class="misi my-3 mx-6">
                        <h5 class="font-semibold">Misi</h5>
                        <p class="text-justify">
                            1. Menggunakan Fasilitas Sosmed Sebagai  Wadah Syiar islam era digital. <br/>
                            2. Mendukung kegiatan Dakwah Antar Divisi. <br/>
                            3. Menjadikan ladang pahala untuk istiqomah beramal sholeh. <br/>
                            4. Merealisasikan Amanah Kerja.
                        </p>
                    </div>
                </div>
                <div class="saqu my-4 mx-4">
                    <h5 class="font-semibold text-lg">Sahabat Quran (SAQU)</h5>
                    <div class="visi my-3 mx-6">
                        <h5 class="font-semibold">Visi</h5>
                        <p class="text-justify">
                            Menjadi wadah bagi para aktivis dakwah untuk lebih mengenal dan mencintai Al-Qur'an sehingga terbentuk pribadi Qur'ani sebagai generasi penerus dakwah.
                        </p>
                    </div>
                    <div class="misi my-3 mx-6">
                        <h5 class="font-semibold">Misi</h5>
                        <p class="text-justify">
                            1. Mengentaskan buta huruf Al-Qur'an. <br/>
                            2. Memperbaiki bacaan Al-Qur'an. <br/>
                            3. Melahirkan generasi penghafal dan pecinta Al-Qur'an.
                        </p>
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
  name: 'aboutus',
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
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-top: 20rem;
    }

    .article h4 {
        font-size: 18px;
    }

    .article h5 {
        font-size: 14px;
    }

    .article p {
        font-size: 12px;
    }

    .visi,
    .misi {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .article p {
        font-size: 12px;
    }
}

</style>