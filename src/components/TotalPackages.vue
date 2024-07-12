<template>
    <div class="wrapper">
        <TripPackage v-for="tour in tourPackageList" :key="tour.key" :packageId="tour.id" :image="tour.pdf_image" :title="tour.package_name"
            :price="tour.starting_cost" :rating="tour.rating" :days="Number(tour.days)" :night="Number(tour.night)" />
    </div>
</template>

<script>
import TripPackage from './TripPackage.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        TripPackage
    },
    data() {
        return {
            tourPackageList: null
        }
    },
    computed: {
        ...mapGetters(['getData', 'getCitySlugData', 'getCityData', 'getError']),

        loadError() {
            return this.getError;
        },
        limitedData() {
            return this.getData.slice(0, this.limit);
        }
    },
    methods: {
        ...mapActions(['fetchData', 'fetchCitySlugData', 'fetchCityData']),
        async getCityWisePackage() {
            console.log('radhakrishna', this.getCitySlugData);
            let allData = this.getData;
            let citySlug = this.$route.params.citySlug;
            await this.fetchCitySlugData(citySlug);
            let filterData = this.getCitySlugData;
            
            if(citySlug) {
                //this.tourPackageList =  filterData.data.filter(obj => obj.citySlug == citySlug);
                this.tourPackageList = filterData;
            } else {
                this.tourPackageList = allData;
            }
            
        },
    },
    async created() {
        let vari = await this.fetchData();
        console.log('sasjaasnja', vari);
        this.getCityWisePackage();
    },
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}
</style>