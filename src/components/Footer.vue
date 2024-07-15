<template>
    <div class="">
        <footer class="footer">
            <div class="container">
                <div class="wrapper">
                    <div class="col-md-2 footer-logo">
                        <img src="@/assets/images/whats_app_image_20240503_at_14072.png" alt="Logo">
                    </div>
                    <div class="row text-md-start footer-links">
                        <div class="col-md-2">
                            <h5>ABOUT TGE</h5>
                            <a href="#">About us</a>
                            <a href="#">Support</a>
                            <a href="#">Copyright Policies</a>
                            <a href="#">Privacy</a>
                        </div>
                        <div class="col-md-2">
                            <h5>IMPORTANT LINK</h5>
                            <a href="#">Refund Policy</a>
                            <a href="#">Teams & Conditions</a>
                            <a href="#">Posts</a>
                        </div>
                        <div class="col-md-3 contact-info">
                            <h5>CONTACT US</h5>
                            <a href="tel:+916753557043">
                                <img class="ftrLink" src="@/assets/images/foter-call.png" />
                                +91 67535 57043</a>
                            <a href="mailto:tourwithtge23@gmail.com">
                                <img class="ftrLink" src="@/assets/images/foter-msg.png" />
                                tourwithtge23@gmail.com</a>
                            <div class="social-icons">
                                <a href="#"><img class="ftrIcons" src="@/assets/images/facebook.png" /></a>
                                <a href="#"><img class="ftrIcons" src="@/assets/images/insta.png" /></a>
                                <a href="#"><img class="ftrIcons" src="@/assets/images/YOUTUBE.png" /></a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h5>Travel Destinations</h5>
                            <div class="row ftr-imgs g-2">
                                <router-link :to="{ name: 'DestinationInfo', params: { citySlug: trip.slug } }" v-for="(trip, index) in topPackages" :key="index">
                                    <div class="col-4 topRow">
                                        <img :src="trip.main_image" alt="Beaches">
                                        <p>{{ trip.name }}</p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 text-center">
                        <div class="col-12">
                            <p>© 2024 TGE ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            topPackages: ''
        }
    },
    computed: {
        ...mapGetters(['getTrendPackage', 'getError']),

    },
    methods: {
        ...mapActions(['fetchTrendPackage']),
        topThreePack() {
            let trEndData = this.getTrendPackage.data.filter((obj, index) => index < 6);
            this.topPackages = trEndData;
            console.log('footer-Images', trEndData);
        },
    },
    async created() {
        await this.fetchTrendPackage();
        await this.topThreePack();
    }

}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
}

.footer-links {
    display: flex;
    justify-content: center;
    margin: 60px 0;
}

.footer-logo {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.footer {
    padding: 30px;
}

.ftr-imgs.g-2 {
    display: inline-grid;
    grid-template-columns: auto auto auto;
}

.topRow {
    margin-bottom: -7px;
    max-width: 90px;
    max-height: 90px;
    position: relative;
}

.topRow p {
    color: #fff;
    position: absolute;
    top: 39px;
    left: 25px;
    font-size: 14px;
}

.footer img {
    width: 88px;
    height: 88px;
}

img.ftrLink {
    width: 25px !important;
    height: 25px !important;
}

.social-icons {
    display: flex;
    margin-top: 20px;
}

img.ftrIcons {
    width: 30px !important;
    height: 30px !important;
}



.footer h5 {
    margin-bottom: 20px;
    font-weight: 700;
    color: #000000b8;
    font-size: 18px;
}

.footer a {
    display: block;
    margin-bottom: 5px;
    color: #6c757d;
    text-decoration: none;
    font-weight: 500;
}

.footer .contact-info a {
    color: #000;
    font-weight: 700;
}

.footer .social-icons a {
    margin-right: 15px;
    color: #6c757d;
}

.footer .social-icons a:hover {
    color: #343a40;
}

.footer .travel-destinations img {
    width: 100%;
    height: auto;
}
</style>
