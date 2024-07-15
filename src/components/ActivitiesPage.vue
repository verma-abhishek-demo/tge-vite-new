<template>
    <MainContent />
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="red-line">
                        <span class="title">Explore Our </span><br>
                        <span class="title">Best</span>&nbsp;
                        <span class="title red-text">Activities Packages</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="dummyTxtOne">Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo
                        Ligula Eget Dolor.
                        Aenean Massa Cum Sociis Theme Natoque.
                    </p>
                </div>
            </div>
            <div class="spcaebtw row g-4">
                <div class="col-lg-4">
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-white">
                            <img :src="totalActivitiesOne?.pdf_image" class="card-img" alt="Rock Climbing">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">{{ totalActivitiesOne?.package_name }}</h5>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4">
                    <router-link to="/inner_activity_page" v-for="pckg in totalActivitiesTwo" :key="pckg">
                        <div class="card bg-dark text-middle card-margin">
                            <img :src="pckg?.pdf_image" class="middle-img" alt="Hiking">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">{{ pckg?.package_name }}</h5>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="col-lg-4">
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-white">
                            <img :src="totalActivitiesThree?.pdf_image" class="card-img" alt="Rock Climbing">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">{{ totalActivitiesThree?.package_name }}</h5>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <SixthComponent />
    <SeventhComponent />
</template>

<script>
import MainContent from './MainContent.vue';
import SixthComponent from './SixthComponent.vue';
import SeventhComponent from './SeventhComponent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        MainContent,
        SixthComponent,
        SeventhComponent
    },
    data() {
        return {
            totalActivitiesOne: null,
            totalActivitiesTwo: null,
            totalActivitiesThree: null
        }
    },
    computed: {
        ...mapGetters(['getActivity']),
    },
    methods: {
        ...mapActions(['fetchActivities']),
        getActivitypageOne() {
            if (this.getActivity && this.getActivity.data && this.getActivity.data.length > 0) {
                this.totalActivitiesOne = this.getActivity.data[0];
                console.log('om Shivay', this.totalActivitiesOne);
            } else {
                console.error('No activity data found');
            }
        },
        getActivitypageTwo() {
            if(this.getActivity && this.getActivity.data && this.getActivity.data.length > 0) {
                this.totalActivitiesTwo = this.getActivity.data.slice(1, 4);
            } else {
                console.error('No activity data found');
            }
        },
        getActivitypageThree() {
            if(this.getActivity && this.getActivity.data && this.getActivity.data.length > 0) {
                this.totalActivitiesThree = this.getActivity.data[5];
            } else {
                console.error('No activity data found');
            }
        }
    },
    async created() {
        await this.fetchActivities();
        this.getActivitypageOne();
        this.getActivitypageTwo();
        this.getActivitypageThree();
        console.log('om namah Shivay', this.getActivity.data);
    }
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

.spcaebtw {
    margin-top: 30px;
    margin-bottom: 30px;
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
}

.card-img-overlay {
    background: rgba(0, 0, 0, 0.4);
    color: white;
}

img.card-img {
    height: 555px;
}

.card.bg-dark.text-middle {
    height: 173px;
}

img.middle-img {
    width: 100%;
    height: 100%;
}

.card-margin {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
