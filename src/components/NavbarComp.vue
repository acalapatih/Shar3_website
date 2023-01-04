<template>
    <div class="main">
        <nav class="flex items-center justify-between bg-[#7BCEA0] p-6 px-16">
            <div class="imgNav flex items-center flex-shrink-0">
                <img src="@/assets/imgNav.png">
            </div>
            <div class="navbar flex lg:items-center lg:w-auto">
                <div class="leftNav ml-32">
                    <router-link to="/" class="navLink block mt-4 lg:inline-block lg:mt-0 text-black ml-10 hover:font-semibold mr-4">
                    Home
                    </router-link>
                    <router-link to="/dashboard" class="navLink block mt-4 lg:inline-block lg:mt-0 text-black ml-10 hover:font-semibold mr-4">
                    Dashboard
                    </router-link>
                    <router-link to="/eventlist" class="navLink block mt-4 lg:inline-block lg:mt-0 text-black ml-10 hover:font-semibold mr-4">
                    Event
                    </router-link>
                    <router-link to="/aboutUs" class="navLink block mt-4 lg:inline-block lg:mt-0 text-black ml-10 hover:font-semibold mr-4">
                    About Us
                    </router-link>
                </div>
                <div class="rightNav ml-8">
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded-2xl text-white font-medium bg-[#2E567A] hover:border-transparent hover:text-[#2E567A] hover:bg-white mt-4 lg:mt-0">Donate Online</a>
                    <!-- <img src="@/assets/search.png" class="inline-block ml-5"> -->
                </div>
                <div class="hamburger-menu ml-3 py-5" @click="menu()">
                    <img src="@/assets/menu.png" alt="">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavbarComp',
    methods: {
        menu() {
            document.querySelector('.leftNav').classList.toggle('active-nav')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
nav {
    font-family: 'Montserrat', sans-serif;
}

.rightNav img {
    width: 25px;
    height: 25px;
    cursor: pointer;
}

.hamburger-menu img {
    width: 25px;
    height: 25px;
    cursor: pointer;
}

.hamburger-menu {
  display: none;
}

@media only screen and (max-width: 1030px) {
    nav {
        display: flex;
        flex-direction: row;
    }

    .leftNav {
        display: none;
        position: absolute;
        margin-left: 0;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: #fff;
    }

    .active-nav {
        display: block;
        z-index: 20;
    }

    .hamburger-menu {
        display: flex;
        align-items: center;
        display: block;
        z-index: 100;
    }

    .hamburger-menu img {
        cursor: pointer;
    }
}
@media only screen and (max-width: 500px) {
    nav {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .imgNav {
        width: 30%;
        margin-left: 5px;
    }

    .rightNav {
        margin-left: 20px;
    }

    .rightNav a {
        font-size: x-small;
        padding: 5px;
    }

    .rightNav img, .hamburger-menu img {
        width: 15px;
        height: 15px;
    }
}
</style>