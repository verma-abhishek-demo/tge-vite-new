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
            let allData = this.getData;
            let filterData =  await this.getCitySlugData;
            let citySlug = this.$route.params.citySlug;
            console.log('radha-krishna', filterData);
            if(citySlug) {
                console.log('mannnissshhh', filterData);
                this.tourPackageList =  filterData.data.filter(obj => obj.citySlug == citySlug);
            } else {
                this.tourPackageList = allData;
            }
            
        },
    },
    created() {
        console.log('Krishnaa',this.$route.params.citySlug);
        console.log('Krishnaa-Radhaa',this.getCitySlugData);

        this.fetchData();
        this.fetchCitySlugData();
        this.getCityWisePackage();
    },
    //props: {
    //    limit: {
    //        type: Number,
    //        default: 6,
    //    }
    //}
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