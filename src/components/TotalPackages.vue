<template>
    <div class="wrapper">
        <TripPackage v-for="tour in tourPackageList" :key="tour.key" :packageId="tour.id" :image="tour.pdf_image"
            :title="tour.package_name" :price="tour.starting_cost" :rating="tour.rating" :days="Number(tour.days)"
            :night="Number(tour.night)" />
    </div>
</template>

<script>
import TripPackage from './TripPackage.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import { baseURL } from '@/config';

export default {
    components: {
        TripPackage
    },
    data() {
        return {
            tourPackageList: null
        };
    },
    computed: {
        ...mapGetters(['getData', 'getCitySlugData', 'getCityData', 'getError', 'getCurrentPage']),
        loadError() {
            return this.getError;
        }
    },
    methods: {
        ...mapActions(['fetchData', 'fetchCitySlugData', 'fetchCityData']),
        async getCityWisePackage() {
            console.log('CitySlug Data:', this.getCitySlugData);
            let allData = this.getData;
            let citySlug = this.$route.params.citySlug;
            console.log('CitySlug:', citySlug);

            if (citySlug) {
                try {
                    const response = await axios.post(`${baseURL}/apis/packages/package_with_city`, new URLSearchParams({
                        city_id: citySlug,
                        page: this.getCurrentPage,
                        limit: 10
                    }), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    console.log('API Response:', response.data);
                    let newData = response.data.data.data;

                    if (Array.isArray(newData)) {
                        this.tourPackageList = newData;
                    } else {
                        console.error('Unexpected response structure:', response.data.data.data);
                    }
                    console.log('Tour Package List:', this.tourPackageList);
                } catch (error) {
                    console.error('Error fetching city data:', error);
                }
            } else {
                this.tourPackageList = allData;
                console.log('All Data:', this.tourPackageList);
            }
        }
    },
    async created() {
        await this.fetchData(this.getCurrentPage);
        this.getCityWisePackage();
    },
    watch: {
        '$route.params.citySlug': 'getCityWisePackage',
        getCurrentPage() {
            this.fetchData(this.getCurrentPage);
            this.getCityWisePackage();
        }
    }
};
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}
</style>