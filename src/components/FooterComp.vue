<template>
<div class="footer flex-column bg-black text-white">
    <div class="footerAtas flex mx-20 lg:mx-16">
        <div class="leftFooter flex inline-block my-16">
            <div class="inline-block">
                <router-link to="/">
                    <img src="@/assets/imgFooter.png" class="imgFooter" />
                </router-link>
            </div>
            <div class="aboutUs inline-block ml-16">
                <ul>
                    <li class="font-semibold mb-3"><h5>About Us</h5></li>
                    <router-link to="/eventlist">
                        <li class="mt-1 cursor-pointer">Event</li>
                    </router-link>
                    <router-link to="/aboutus">
                        <li class="mt-1 cursor-pointer">Our Profile</li>    
                    </router-link>
                    <router-link to="/documentation">
                        <li class="mt-1 cursor-pointer">Documentation</li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="rightFooter flex inline-block my-16">
            <div class="contactUs inline-block mx-12">
                <ul>
                    <li><h5 class="font-semibold mb-3">Contact Us</h5></li>
                    <li class="mt-1">
                        <img src="@/assets/phone.png" class="inline-block">
                        <p class="inline-block ml-2">02133172394</p>
                    </li>
                    <li class="mt-1">
                        <img src="@/assets/email.png" class="inline-block">
                        <p class="inline-block ml-2">shar3sman3@gmail.com</p>
                    </li>
                    <li><h5  class="font-semibold cursor-pointer mt-1">FAQ</h5></li>
                </ul>
            </div>
            <div class="followUs inline-block">
                <ul>
                    <li class="font-semibold mb-3"><h5>Follow Us</h5></li>
                    <li>
                        <img src="@/assets/instagram.png" class="imgInstagram inline-block cursor-pointer">
                        <img src="@/assets/tiktok.png" class="imgTiktok inline-block cursor-pointer mx-3">
                        <img src="@/assets/linkedin.png" class="imgLinkedin inline-block cursor-pointer">
                    </li>
                    <li class="mt-1">Sahabat Remaja</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footerBawah">
        <p class="text-center">© 2023 Sahabat Remaja.</p>
        <hr class="my-1">
        <p class="text-right text-sm pb-1 mr-1">Developed by <span class="font-semibold"><a href="instagram.com/@acalapatih">Acalapatih</a></span></p>
    </div>
</div>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

.footer {
    font-family: 'Montserrat', sans-serif;
}

.imgFooter {
    width: 319px;
    height: 93px;
}

.imgTiktok {
    width: 21.5px;
    height: 25px;
}

.imgInstagram,
.imgLinkedin {
    width: 25px;
    height: 25px;
}

hr {
    border: 7px solid #FFFFFF;
}

@media only screen and (max-width: 1024px) {
    .footerAtas {
        margin-right: 4rem;
        margin-left: 4rem;
    }

    .imgFooter {
        width: 250px;
        height: 72px;
    }

    .aboutUs {
        margin-left: 2rem;
    }

    .contactUs {
        margin-right: 2rem;
        margin-left: 2rem;
    }

    .contactUs img {
        display: none;
    }

    .contactUs p {
        margin-left: 0;
    }

    .followUs img {
        height: 20px;
        width: 20px;
    }

    li {
        font-size: 12px;
    }
}

@media only screen and (max-width: 768px) {
    .footerAtas {
        margin-right: 2rem;
        margin-left: 2rem;
    }

    .imgFooter {
        width: 200px;
        height: 58px;
    }

    .aboutUs {
        margin-left: 1.5rem;
    }

    .contactUs {
        margin-right: 1.5rem;
        margin-left: 1.5rem;
    }
}

@media only screen and (max-width: 640px) {
    .footerAtas {
        margin: 5rem 3rem;
        font-size: 10px;
    }

    .imgFooter {
        width: 150px;
        height: 43px;
    }

    .aboutUs {
        margin-left: 0.75rem;
    }

    .rightFooter {
        position: absolute;
        margin-top: 11rem;
        margin-bottom: 11rem;
    }

    .contactUs {
        margin-right: 0.75rem;
        margin-left: 0.75rem;
    }

    .contactUs img {
        width: 12px;
    }

    .followUs img {
        height: 15px;
        width: 15px;
    }

    .footerBawah {
        font-size: 14px;
    }
}
</style>