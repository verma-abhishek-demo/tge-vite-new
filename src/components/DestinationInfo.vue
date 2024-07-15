<template>
    <div v-if="topPackages" :style="{ backgroundImage: `url(${topPackages.main_image})` }"
        class="sectionOne">
        <div class="wrap">
            <h1 class="city-heading">{{ cityInfo }}</h1>
            <p>Thrills for Soul and Spirit!</p>
            <p>Get upto
                <span>60% off</span>
            </p>
            <button>Explore</button>
        </div>
        <img src="@/assets/images/page-down.png" />
    </div>
    <div class="wrapper">
        <div class="cityPackage">
            <TotalPackages />
        </div>


        <ThirdContent />

        <div class="sectionTwo">
            <div class="left-side">
                <div class="red-line">
                    <span class="title">Trending, Best</span><br>
                    <span class="title">Selling </span>
                    <span class="title red-text">Tours</span><br>
                    <span class="title">And Fun</span>&nbsp;
                    <span class="title red-text">Destinations</span>
                </div>
                <p class="dummyTxtOne">Lorem ipsum dolor sit amet, consectetuer<br> adipiscing elit. </p>
            </div>
            <div class="right-side">
                <div class="slides" ref="slides">
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-Kerela.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-ladakh.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-spiti.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-uttrakhand.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-rajasthan.png" />
                    </div>
                    <!-- Duplicate the images for seamless looping -->
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-Kerela.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-ladakh.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-spiti.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-uttrakhand.png" />
                    </div>
                    <div class="right-side-img">
                        <img src="@/assets/images/contact-rajasthan.png" />
                    </div>
                </div>
            </div>
        </div>

        <div class="section-three">
            <p>Affordable <strong>adventures</strong>, our Pocket Friendly Guarantee ensures unforgettable <span
                    class="red-text">budget-friendly tours</span>.</p>
            <div class="reqqust-call">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="rqstBtn">Request To Call</button>
                <img src="@/assets/images/whatsapp.png" />
            </div>
        </div>
    </div>
</template>

<script>
import TotalPackages from './TotalPackages.vue';
import ThirdContent from './ThirdContent.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        TotalPackages,
        ThirdContent
    },
    computed: {
        ...mapGetters(['getCityData', 'getData', 'getTrendPackage', 'getError']),
        cityInfo() {
            const citySlug = this.$route.params.citySlug;
            return citySlug;
            //return this.getCityData.find(city => city.citySlug === this.$route.params.citySlug);
        },
        //cityNames() {
        //    let cityName = this.getCityData;
        //    console.log('290004', cityName);
        //    let mainCity =  cityName.find((obj) => obj.city_Name ==  cityName.name);
        //    console.log('2904', mainCity)
        //    return mainCity;
        //},
        loadError() {
            return this.getError;
        },
    },
    data() {
        return {
            topPackages: null,
        }
    },
    mounted() {
        this.animateSlides(1);
    },
    methods: {
        ...mapActions(['fetchCityData', 'fetchData', 'fetchTrendPackage']),
        getTrending() {
            console.log('Trend Package Data:', this.getTrendPackage.data);
            const citySlug = this.$route.params.citySlug;
            this.topPackages = this.getTrendPackage.data.find(obj => obj.slug === citySlug);
            //this.topPackages = this.getTrendPackage;
            //return this.getTrendPackage;
        },
        getCityWiseData() {
            let allData = this.getData;
            console.log('Radhhaaa', allData)
            const citySlug = this.$route.params.citySlug;
            let finalResult = allData.filter(obj => obj.citySlug == citySlug);
            console.log('Final-Result', finalResult);
            return finalResult;
        },
        animateSlides(position) {
            const slides = this.$refs.slides;
            const slideWidth = slides.offsetWidth / 2;
            position -= 1;
            if (Math.abs(position) >= slideWidth) {
                position = 0;
            }
            slides.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(this.animateSlides);
        },
    },
    async created() {
        console.log('RADHAAA', this.getCityWiseData);
        await this.fetchCityData(this.$route.params.citySlug);
        await this.getTrending();
        this.getCityWiseData();
    },
    watch: {
        '$route.params.citySlug': 'getTrending'
    }
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
    padding: 30px 0;
}

.city-heading {
    text-transform: uppercase;
}

.sectionOne {
    padding: 100px 0;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
}

.wrap {
    width: 600px;
    margin: auto;
    text-align: center;
    color: #fff;
}

.wrap h1 {
    font-size: 75px;
    font-weight: 700;
}

.wrap p {
    font-size: 30px;
}

.wrap span {
    background: #ff000094;
    padding: 5px 7px;
    border-radius: 10px;
}

.wrap button {
    background: red;
    border: none;
    padding: 7px 70px;
    color: #fff;
    font-size: 21px;
    margin-top: 22px;
    border-radius: 5px;
}

.sectionOne img {
    position: absolute;
    bottom: -41px;
    left: 733px;
}

.sectionTwo {
    padding: 30px 0;
    display: flex;
}

.left-side {
    width: 40%;
}

.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
}

.title {
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
}

.red-text {
    color: red;
}

p.dummyTxtOne {
    font-size: 20px;
    margin-top: 10px;
}

.right-side {
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    gap: 10px;
}

.slides {
    display: flex;
    width: 200%;
    /* Adjust width to fit all images */
    animation: slide 10s linear infinite;
}


.right-side-img {
    width: 35%;
    /* Adjust width to fit the container properly */
    flex-shrink: 0;
    /* Prevent shrinking */
    margin: 10px;
}

.right-side-img img {
    width: 100%;
}

.section-three {
    display: flex;
    justify-content: space-between;
}

.section-three p {
    font-size: 30px;
    width: 67%;
}

.reqqust-call {
    width: 30%;
    margin-top: 16px;
}

button.rqstBtn {
    border: none;
    background: red;
    color: #fff;
    padding: 12px 40px;
}

.section-three img {
    width: 50px;
    margin-left: 74px;
}

@keyframes slide {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>