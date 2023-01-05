<template>
    <NavbarComp />
    <div class="main">
        <div class="header py-10 px-20 bg-[#E7FEEA]">
            <h3 class="txtHeader font-bold text-2xl">Artikel > <span>Blog</span></h3>
            <p class="my-1 text-justify">
                Halaman blog memuat artikel yang berisi karya tulis dari anggota Shar3.
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
            <div class="article inline-block my-12 mx-12 bg-[#E7FEEA] rounded-2xl py-7 px-10 w-full">
                <h4 class="font-semibold text-xl">Lorem Ipsum Dolor Sit Amet.</h4>
                <p class="detail my-1 text-xs">
                    <span>Blog</span> | <span>User - 5 Januari 2023</span>
                </p>
                <img src="../assets/imgBlog.jpg" class="imgBlog my-5 w-[750px] h-[350px] object-cover rounded-xl">
                <p class="text-justify">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.<br/>
                    
                    <br>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <div class="my-4">
                    <h5 class="font-semibold text-lg">Lorem ipsum dolor sit amet.</h5>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
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
  name: 'articledetail',
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

    .imgBlog {
        width: 450px;
        height: 210px;
    }
}

@media only screen and (max-width: 768px) {
    .aside {
        position: absolute;
        margin-left: 0;
        padding: 1rem;
        width: 85%;
        height: 245px;
    }

    .article {
        position: relative;
        margin: 0;
        margin-top: 20rem;
    }
}

@media only screen and (max-width: 640px) {
    .header p {
        font-size: 14px;
    }

    .aside {
        width: 80%;
    }

    .article p {
        font-size: 12px;
    }

    .imgBlog {
        width: 350px;
        height: 163px;
    }
}

@media only screen and (max-width: 500px) {
    .article h4{
        font-size: 18px;
    }

    .article h5 {
        font-size: 16px;
    }

    .imgBlog {
        width: 300px;
        height: 140px;
    }
}

@media only screen and (max-width: 450px) {
    .article h4{
        font-size: 14px;
    }

    .article h5 {
        font-size: 12px;
    }

    .article .detail {
        font-size: 8px;
    }

    .article p {
        font-size: 10px;
    }

    .imgBlog {
        width: 200px;
        height: 93px;
    }
}
</style>