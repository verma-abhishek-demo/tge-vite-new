<template>
    <div class="sectionOne">
        <div class="imgone">
            <img src="@/assets/images/page-down.png" />
        </div>
    </div>
    <div class="wrapper ">
        <div class="container mt-5">
            <div class="flexItems">
                <div class="col-md-7">
                    <div class="red-line">
                        <span>{{ packageNames.package_name }}</span>
                    </div>
                </div>

                <div class="col-md-5">
                    <div class="trip-rating">
                        <p class="dummyTxtOne">{{ packageNames.night }} Nights / {{ packageNames.days }} Days</p>
                        <span class="starImg"><img src="@/assets/images/banner-star.png" /></span>&nbsp;
                        <span class="dark-text">{{ packageNames.rating }} / 5</span>&nbsp;
                        <span class="light-text">(253 reviews)</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="four-hdng">
            <div class="four-hdng-text" :class="{ active: activeSection === 'overview' }"
                @click="toggleSection('overview')">
                <img src="@/assets/images/overview.png" />
                <p class="text-size">OVERVIEW</p>
            </div>
            <div class="four-hdng-text" :class="{ active: activeSection === 'itinerary' }"
                @click="toggleSection('itinerary')">
                <img src="@/assets/images/globe.png" />
                <p class="text-size">Itinerary</p>
            </div>
            <div class="four-hdng-text" :class="{ active: activeSection === 'included' }"
                @click="toggleSection('included')">
                <img src="@/assets/images/circle-rupees.png" />
                <p class="text-size">Included</p>
            </div>
            <div class="four-hdng-text" :class="{ active: activeSection === 'policy' }"
                @click="toggleSection('policy')">
                <img src="@/assets/images/policy.png" />
                <p class="text-size">Policy</p>
            </div>
        </div>

        <div v-if="activeSection === 'overview'" class="overview-section">
            <div class="left-side">
                <div class="overview-1">
                    <h1 class="left-side-hdng">Overview</h1>
                    <div v-html="packageNames.overview"></div>
                </div>
                <div class="overview-2">
                    <p class="overview-2-text">{{ packageNames.package_routing }}</p>
                </div>
                <div class="overview-3">
                    <p class="boldHdng">Explore The Area</p>
                    <div v-html="packageNames.explore_the_area"></div>
                </div>
                <div class="overview-4">
                    <p class="boldHdng">Popular Amenities</p>
                    <img :src="noImg" />
                    <div class="amenties-row">
                        <div class="amenties-row-data" v-for="activity in packageNames.amenities" :key="activity">
                            <img v-if="activity.icon" :src="activity.icon" />
                            <img v-else src="https://dummyimage.com/30.png/09f/fff" />
                            <p>{{ activity.ammenity }}</p>
                        </div>
                    </div>
                </div>
                <div class="overview-5">
                    <p class="boldHdng">Services</p>
                    <div v-if="packageNames.servies" class="amenties-row">
                        <div class="amenties-row-data" v-for="activity in packageNames.servies" :key="activity">
                            <img :src="activity.icon" />
                            <p>{{ activity.service }}</p>
                        </div>
                    </div>
                    <div v-else class="bnoActivty">
                        <span>
                            AT PRESENT THERE IS NO ACTIVITY
                        </span>
                    </div>
                </div>
                <div class="overview-5">
                    <p class="boldHdng">Activities</p>
                    <div v-if="packageNames.activities" class="amenties-row">
                        <div class="amenties-row-data" v-for="activity in packageNames.activities" :key="activity">
                            <img :src="activity.icon" />
                            <p>{{ activity.activity }}</p>
                        </div>
                    </div>
                    <div v-else class="bnoActivty">
                        <span>
                            AT PRESENT THERE IS NO ACTIVITY
                        </span>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <h1 class="right-side-hdng">Gallery</h1>
                <div class="imgGallery" ref="imgGallery">
                    <img :src="image" v-for="image in packageNames.gallery_images" :key="image" />


                </div>
                <div class="right-form">
                    <p>GET FREE QUOTES</p>
                    <form @submit.prevent="submitForm">
                        <div class="inputForm">
                            <label for="name">Name</label>
                            <input v-model="inputName" type="text" id="name" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="email">Email</label>
                            <input v-model="inputEmail" type="email" id="email" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="number">Number</label>
                            <input v-model="inputNumber" type="text" id="number" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="guest">Number of Guest</label>
                            <input v-model="inputGuest" type="number" id="guest" class="nameInput" />
                        </div>
                        <div class="formBtn">
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div v-if="activeSection === 'itinerary'" class="itinerary-section">
            <div class="left-side">
                <div class="itinerary-1">
                    <h1 class="left-side-hdng">Itinerary</h1>
                    <p>The untapped land’s calling to every enthusiastic soul, is this exciting Himalayan traveller’s
                        goal.</p>
                </div>

                <div class="itinerary-2">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item" v-for="(daywiseData, index) in packageNames.daywise_meta"
                            :key="index">
                            <h2 class="accordion-header" :id="'heading' + index">
                                <button class="accordion-button red-bg" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#collapse' + index" aria-controls="'collapse' + index">
                                    <div class="accod-div">
                                        <p>Day {{ daywiseData.tour_day }}</p>
                                        <div class="accord-img">
                                            <img class="gate-img" src="@/assets/images/india-gate.png" />
                                            <p>{{ daywiseData.tour_name }}</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div :id="'collapse' + index" class="accordion-collapse collapse"
                                :class="{ show: index === 0 }" :aria-labelledby="'heading' + index"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body body-accord">
                                    <img class="accrd-image" src="@/assets/images/gold-temple.png" />
                                    <p v-html="daywiseData.tour_des"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <h1 class="right-side-hdng">Gallery</h1>
                <div class="imgGallery" ref="imgGallery">
                    <img :src="image" v-for="image in packageNames.gallery_images" :key="image" />
                </div>
                <div class="right-form">
                    <p>GET FREE QUOTES</p>
                    <form @submit.prevent="submitForm">
                        <div class="inputForm">
                            <label for="name">Name</label>
                            <input v-model="inputName" type="text" id="name" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="email">Email</label>
                            <input v-model="inputEmail" type="email" id="email" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="number">Number</label>
                            <input v-model="inputNumber" type="text" id="number" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="guest">Number of Guest</label>
                            <input v-model="inputGuest" type="number" id="guest" class="nameInput" />
                        </div>
                        <div class="formBtn">
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div v-if="activeSection === 'included'" class="included-section">
            <div class="left-side">
                <div class="include-1">
                    <h1 class="left-side-hdng">Included</h1>
                    <p>The untapped land’s calling to every enthusiastic soul, is this exciting Himalayan traveller’s
                        goal.</p>
                </div>
                <div class="include-2">
                    <div class="row">
                        <div class="col">
                            <h2 class="section-title">TOUR INCLUSIONS</h2>
                            <ul class="list-unstyled">
                                <li class="list-item" v-for="inclusion in packageNames.inc_meta" :key="inclusion">
                                    <img src="@/assets/images/Star-red.png" />
                                    <p>{{ inclusion.tour_inc }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h2 class="section-title">TOUR EXCLUSIONS</h2>
                            <ul class="list-unstyled">
                                <li class="list-item" v-for="exclusion in packageNames.exc_meta" :key="exclusion">
                                    <img src="@/assets/images/Star-red.png" />
                                    <p>{{ exclusion.tour_exc }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="right-side">
                <h1 class="right-side-hdng">Gallery</h1>
                <div class="imgGallery" ref="imgGallery">
                    <img :src="image" v-for="image in packageNames.gallery_images" :key="image" />
                </div>
                <div class="right-form">
                    <p>GET FREE QUOTES</p>
                    <form @submit.prevent="submitForm">
                        <div class="inputForm">
                            <label for="name">Name</label>
                            <input v-model="inputName" type="text" id="name" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="email">Email</label>
                            <input v-model="inputEmail" type="email" id="email" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="number">Number</label>
                            <input v-model="inputNumber" type="text" id="number" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="guest">Number of Guest</label>
                            <input v-model="inputGuest" type="number" id="guest" class="nameInput" />
                        </div>
                        <div class="formBtn">
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div v-if="activeSection === 'policy'" class="policy-section">
            <div class="left-side">
                <div class="include-1">
                    <h1 class="left-side-hdng">Policy</h1>
                    <p>The untapped land’s calling to every enthusiastic soul, is this exciting Himalayan traveller’s
                        goal.</p>
                </div>
                <div class="include-2">
                    <div class="row">
                        <div class="col">
                            <h2 class="section-title">Cancellation Policy & Payment Terms</h2>
                            <ul class="list-unstyled">
                                <li class="list-item">
                                    <img src="@/assets/images/Star-red.png" />
                                    <p v-html="packageNames.cancel_content"></p>
                                </li>
                            </ul>
                            <ul class="list-unstyled">
                                <li class="list-item">
                                    <img src="@/assets/images/Star-red.png" />
                                    <p v-html="packageNames.payment_policy"></p>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div class="right-side">
                <h1 class="right-side-hdng">Gallery</h1>
                <div class="imgGallery" ref="imgGallery">
                    <img :src="image" v-for="image in packageNames.gallery_images" :key="image" />
                </div>
                <div class="right-form">
                    <p>GET FREE QUOTES</p>
                    <form @submit.prevent="submitForm">
                        <div class="inputForm">
                            <label for="name">Name</label>
                            <input v-model="inputName" type="text" id="name" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="email">Email</label>
                            <input v-model="inputEmail" type="email" id="email" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="number">Number</label>
                            <input v-model="inputNumber" type="text" id="number" class="nameInput" />
                        </div>
                        <div class="inputForm">
                            <label for="guest">Number of Guest</label>
                            <input v-model="inputGuest" type="number" id="guest" class="nameInput" />
                        </div>
                        <div class="formBtn">
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <ThirdContent />

        <div class="package-display">
            <div class="package-display-left">
                <div class="red-line">
                    <span class="title">Trending, Best  </span><br>
                    <span class="title">Selling</span>&nbsp;
                    <span class="title red-text">Tours</span>&nbsp;
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
            </div>
            <div class="package-display-right">
                <div class="imgGallery wrap-2">
                    <TotalPackages />
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
import ThirdContent from './ThirdContent.vue';
import TotalPackages from './TotalPackages.vue';
import { mapActions, mapGetters } from 'vuex';
import { baseURL } from '@/config';
import axios from 'axios';

export default {
    components: {
        ThirdContent,
        TotalPackages
    },
    computed: {
        ...mapGetters(['getpackageData', 'getError']),
        packageNames() {
            console.log('manish', this.getpackageData);
            let packageName = this.getpackageData;
            return packageName[0];
        },

        loadError() {
            return this.getError;
        },

    },
    data() {
        return {
            activeSection: 'overview',
            routeData: this.$route.params.id,
            inputName: '',
            inputEmail: '',
            inputNumber: '',
            inputGuest: ''
        }
    },

    methods: {
        ...mapActions(['fetchpackageData']),
        async submitForm() {
            const formData = {
                name: this.inputName,
                email: this.inputEmail,
                mobile: this.inputNumber,
                destination: '',
                total_no_travelers: this.inputGuest,
                departuredate: '',
                returndate: '',
                adminEamil: '',
                message: ''
            }
            console.log('hcbbhcvcvajc', this.inputName, this.inputEmail, this.inputNumber, this.inputGuest)
            const enquiryFormData = new FormData();
            for (const key in formData) {
                enquiryFormData.append(key, formData[key]);
            }
            try {
                await axios.post(`${baseURL}/apis/query/savequery`, enquiryFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log('Enquiry-Data', response)
                    alert('Success!!!');
                })
            } catch (error) {
                console.error('Error', error);
            }
            this.inputName = '';
            this.inputEmail = '';
            this.inputNumber = '';
            this.inputGuest = '';
        },
        fetchData() {
            //const packageId = this.$route.params.id;
            this.fetchpackageData(this.routeData);
        },
        toggleSection(section) {
            this.activeSection = section;
        }
    },
    async created() {
        await this.fetchData();
        console.log('avi', this.getpackageData);
    }
}
</script>

<style scoped>
.red-line span {
    font-size: 37px;
    font-weight: 700;
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

.red-text {
    color: red;
}

.wrap-2 .wrapper {
    flex-wrap: nowrap;
}

.policy-section {
    display: flex;
    padding: 60px 0;
}

.include-2 {
    width: 92%;
}

.section-title {
    font-weight: 500;
    margin-top: 20px;
}

li.list-item {
    display: flex;
}

.list-item img {
    width: 2%;
    height: 0%;
    margin-top: 5px;
    margin-right: 8px;
}

.wrapper {
    width: 1200px;
    margin: auto;
}

.sectionOne {
    background-image: url('@/assets/images/trip-info-bg.png');
    padding: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.imgone img {
    position: absolute;
    bottom: -45px;
    left: 729px;
}

.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
    margin-bottom: 40px;
    margin-top: 30px;
}

img.accrd-image {
    width: 100px;
    height: 100px;
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
    font-size: 30px;
    font-weight: 700;
}

.starImg img {
    width: 70px;
}

.gate-img {
    width: 46%;
    height: 78%;
}

span.dark-text {
    font-size: 15px;
    font-weight: 500;
}

span.light-text {
    color: grey;
    font-size: 13px;
}

.trip-rating {
    text-align: right;
    margin-top: 31px;
}

.four-hdng {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
}

.four-hdng-text {
    display: flex;
    width: 159px;
}

.four-hdng-text img {
    width: 30%;
}

p.text-size {
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
}

.four-hdng-text.active {
    border-bottom: 2px solid red;
}

.flexItems {
    display: flex;
}

h1 {
    text-transform: uppercase;
}

.overview-section {
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;
}

.left-side {
    width: 70%;
}

.overview-1 {
    width: 92%;
    border-bottom: 1px solid #80808059;
    margin-bottom: 25px;
}

h1.left-side-hdng {
    margin-bottom: 25px;
}

p.overview-2-text {
    font-size: 25px;
    font-weight: 700;
}

.overview-2 {
    border-bottom: 1px solid #80808059;
    width: 92%;
}

p.boldHdng {
    font-size: 18px;
    font-weight: 700;
}

span.boldText {
    font-weight: 500;
}

.amenties-row {
    display: flex;
    flex-wrap: wrap;
    width: 583px;
    row-gap: 15px;
}

.amenties-row-data {
    display: flex;
    width: 190px;
}

.amenties-row-data img {
    width: 21%;
}

.amenties-row-data p {
    margin: 5px 0 0 10px;
}

.overview-3 {
    margin-bottom: 35px;
}

.overview-4 {
    margin-bottom: 35px;
}

.right-side {
    width: 30%;
    overflow: hidden;
}

h1.right-side-hdng {
    width: 46%;
    border-bottom: 2px solid red;
}

.imgGallery {
    display: flex;
    gap: 5px;
    animation: slide 18s linear infinite;
}

@keyframes slide {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}

.imgGallery img {
    width: 49%;
}

.right-form {
    border: 1px solid #8080804a;
    border-radius: 10px;
    padding: 50px 20px;
    margin-top: 10px;
}

.right-form p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}

.inputForm {
    display: grid;
}

input#name {
    border: 1px solid #ff000052;
}

.nameInput {
    border: 1px solid #ff000052;
    border-radius: 3px;
}

.formBtn {
    margin-top: 35px;
}

button.btn {
    width: 100%;
    background: #ff0000c9;
    color: #fff;
}

.itinerary-section {
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;

}

.itinerary-1 {
    border-bottom: 1px solid #80808059;
    width: 92%;
    margin-bottom: 25px;
}

.accod-div {
    display: flex;
}

.accord-img {
    display: flex;
    margin-left: 55px;
}

.red-bg {
    background: #CA1C26BF !important;
}

.accod-div p {
    color: #fff;
    font-size: 19px;
}


.itinerary-2 {
    width: 92%;
}

.body-accord {
    display: flex;
    gap: 17px;
}

.included-section {
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;
}

.package-display-left {
    width: 30%;
}

.package-display-right {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

.package-display {
    display: flex;
}
</style>