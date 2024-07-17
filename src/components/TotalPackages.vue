<template>
    <div class="wrapper">
        <TripPackage 
            v-for="tour in tourPackageList" 
            :key="tour.id" 
            :packageId="tour.id" 
            :image="tour.pdf_image"
            :title="tour.package_name" 
            :price="tour.starting_cost" 
            :rating="tour.rating" 
            :days="Number(tour.days)"
            :night="Number(tour.night)"
            :orignalPrice="tour.discount"
            :services="tour.servies"
        />
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
            let citySlug = this.$route.params.citySlug;

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
                    let newData = response.data.data.data;
                    if (Array.isArray(newData)) {
                        this.tourPackageList = newData;
                    } else {
                        console.error('Unexpected response structure:', response.data.data.data);
                    }
                } catch (error) {
                    console.error('Error fetching city data:', error);
                }
            } else {
                this.tourPackageList = this.getData;
            }
        },
        async fetchCategoryBasedPackages() {
            let tripSlug = this.$route.params.tripSlug;
            if (tripSlug) {
                try {
                    const response = await axios.get(`${baseURL}/apis/packages/categorybased?slug=${tripSlug}&page=1&limit=9`);
                    this.tourPackageList = response.data.data.data;
                    console.log('Rabbtaa', this.tourPackageList);
                    console.log('Rabbtaa-url', tripSlug);
                } catch (error) {
                    console.error('Error fetching category-based packages:', error);
                }
            }
        }
    },
    async created() {
        if (this.$route.params.tripSlug) {
            await this.fetchCategoryBasedPackages();
        } else {
            await this.fetchData(this.getCurrentPage);
            this.getCityWisePackage();
        }
    },
    watch: {
        '$route.params.tripSlug': 'fetchCategoryBasedPackages',
        getCurrentPage() {
            if (this.$route.params.tripSlug) {
                this.fetchCategoryBasedPackages();
            } else {
                this.fetchData(this.getCurrentPage);
                this.getCityWisePackage();
            }
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
