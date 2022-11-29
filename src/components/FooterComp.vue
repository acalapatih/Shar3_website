<template>
<div class="footer flex-column bg-black text-white">
    <div class="footerAtas flex mx-20">
        <div class="leftFooter flex inline-block my-16">
            <div class="inline-block">
                <img src="@/assets/imgFooter.png" class="imgFooter">
            </div>
            <div class="aboutUs inline-block ml-16">
                <ul>
                    <li class="font-semibold mb-3"><h5>About Us</h5></li>
                    <li class="mt-1 cursor-pointer">Event</li>
                    <li class="mt-1 cursor-pointer">Our Profile</li>
                    <li class="mt-1 cursor-pointer">Documentation</li>
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
        <p class="text-center">© 2022 Sahabat Remaja.</p>
        <hr class="my-1">
        <p class="text-right text-sm pb-1 mr-1">Developed by <span class="font-semibold"><a href="instagram.com/@acalapatih">Acalapatih</a></span></p>
    </div>
</div>
</template>

<script>
export default {
    name: 'FooterComp',
    mounted() {
        let tailwind = document.createElement('script')
        tailwind.setAttribute('src', 'https://cdn.tailwindcss.com')
        document.head.appendChild(tailwind)
    },
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
</style>