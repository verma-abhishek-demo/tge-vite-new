<template>
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="red-line">
                        <span class="title">TOP TRENDING</span><br>
                        <span class="title red-text">DESTINATIONS</span>&nbsp;
                        <span class="title">FOR YOU</span>
                    </div>

                    <div class="container mt-5">
                        <router-link :to="{ name: 'DestinationInfo', params: { citySlug: trip.slug } }"
                            v-for="trip in topPackages" :key="trip">
                            <div class="trip-section" :style="{ backgroundImage: `url(${trip.main_image})` }">
                                <div class="trip-text">
                                    <div class="trip-subtitle"></div>
                                    <div class="trip-title">{{ trip.name }}</div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 innerRow">
                    <p class="dummyTxtOne">Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo
                        Ligula Eget Dolor.
                        Aenean Massa Cum Sociis Theme Natoque.
                    </p>
                    <div class="row custom-row">
                        <div class="col-sm-4 slideUpOne" ref="slideUpOne">
                            <router-link :to="{ name: 'DestinationInfo', params: { citySlug: trip.slug } }"
                                v-for="(trip, index) in slidePackagesOne" 
                                :key="trip" 
                                >
                                <div :class="{tripHght: ((index % 2) != 0)}" class="trip-section rightTrip" :style="{ backgroundImage: `url(${trip.main_image})` }">
                                    <div class="trip-text">
                                        <div class="trip-subtitle"></div>
                                        <div class="trip-title">{{ trip.name }}</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-sm-4 slideUpOne" ref="slideUpOne">
                            <router-link :to="{ name: 'DestinationInfo', params: { citySlug: trip.slug } }"
                                v-for="(trip, index) in slidePackagesTwo" :key="trip">
                                <div :class="{tripHght: ((index % 2) == 0)}" class="trip-section rightTrip" :style="{ backgroundImage: `url(${trip.main_image})` }">
                                    <div class="trip-text">
                                        <div class="trip-subtitle"></div>
                                        <div class="trip-title">{{ trip.name }}</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <div class="col-sm-4 slideUpOne" ref="slideUpOne">
                            <router-link :to="{ name: 'DestinationInfo', params: { citySlug: trip.slug } }"
                                v-for="(trip, index) in slidePackagesThree" :key="trip">
                                <div :class="{tripHght: ((index % 2) != 0)}" class="trip-section rightTrip" :style="{ backgroundImage: `url(${trip.main_image})` }">
                                    <div class="trip-text">
                                        <div class="trip-subtitle"></div>
                                        <div class="trip-title">{{ trip.name }}</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    mounted() {
        this.animateSlides(1);
    },
    data() {
        return {
            topPackages: '',
            slidePackagesOne: '',
            slidePackagesTwo: '',
            slidePackagesThree: ''
        }
    },
    computed: {
        ...mapGetters(['getTrendPackage', 'getError']),

    },
    methods: {
        ...mapActions(['fetchTrendPackage']),
        animateSlides(position) {
            const slides = this.$refs.slideUpOne;
            const slideWidth = slides.offsetHeight / 2;
            position -= 1;
            if (Math.abs(position) >= slideWidth) {
                position = 0;
            }
            slides.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(this.animateSlides);
        },
        getTrending() {
            console.log('Trend Package Data:', this.getTrendPackage);
            //return this.getTrendPackage;
        },
        topThreePack() {
            let trEndData = this.getTrendPackage.data.filter((obj, index) => index < 3);
            this.topPackages = trEndData;
            console.log('cello', trEndData);
        },
        slidePackagesFirst() {
            let firstPick = this.getTrendPackage.data.filter((obj, index) => index < 5);
            this.slidePackagesOne = firstPick;
        },
        slidePackagesSecond() {
            let secondPick = this.getTrendPackage.data.slice(2, 8);
            let secondFinal = secondPick.filter((obj, index) => index < 5);
            this.slidePackagesTwo = secondFinal;
        },
        slidePackagesThird() {
            let thirdPick = this.getTrendPackage.data.slice(3, 8);
            let thirdFinal = thirdPick.filter((obj, index) => index < 5);
            this.slidePackagesThree = thirdFinal;
        }
    },
    async created() {
        await this.fetchTrendPackage();
        await this.topThreePack();
        await this.slidePackagesFirst();
        await this.slidePackagesSecond();
        await this.slidePackagesThird();
        await this.getTrending();
    }
}
</script>

<style scoped>
.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
}

.title {
    font-size: 35px;
    font-weight: bold;
}

.red-text {
    color: red;
}

.innerRow {
    margin-top: 17px;
}

.wrapper {
    width: 1200px;
    margin: auto;
}

.rightTrip {
    height: 300px !important;
}

.tripHght {
    height: 200px !important;
}

.trip-section {
    position: relative;
    color: white;
    background-size: cover;
    height: 250px;
    background-position: center;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
}

.showBg-1 {
    background-image: url('@/assets/images/bg-kerela.png');
}

.showBg-2 {
    background-image: url('@/assets/images/bg-ladakh.png');
}

.showBg-3 {
    background-image: url('@/assets/images/bg-spiti.png');
}

.trip-text {
    position: absolute;
    bottom: 20px;
    left: 20px;
}

p.dummyTxtOne {
    font-size: 20px;
}

.trip-title {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    font-family: Merriweather;
    text-transform: capitalize;
}

.trip-subtitle {
    font-size: 22px;
    color: #fff;
    font-family: Merriweather;
}

.custom-row {
    max-height: 828px;
    margin-top: 48px;
    overflow: hidden;
    position: relative;
    height: 100%;
}

.custom-img {
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.rowOne {
    margin: 15px 0;
    width: 190px;
}

.slideUpOne {

    gap: 1vw;

    animation: section2_translateCards__Gkjpc 35s linear infinite;
}

@keyframes section2_translateCards__Gkjpc {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(calc(-110vh));
    }

    100% {
        transform: translateY(0);
    }
}
</style>
