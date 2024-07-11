<template>
    <div class="wrapper">
        <TripPackage v-for="tour in getCityWisePackage" :key="tour.key" :packageId="tour.id" :image="tour.pdf_image" :title="tour.package_name"
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
    computed: {
        ...mapGetters(['getData', 'getError']),
        getCityWisePackage() {
            let allData = this.getData;
            let citySlug = this.$route.params.citySlug;
            if(citySlug) {
                return allData.filter(obj => obj.citySlug == citySlug);
            } else {
                return allData;
            }
            
        },
        loadError() {
            return this.getError;
        },
        limitedData() {
            return this.getData.slice(0, this.limit);
        }
    },
    methods: {
        ...mapActions(['fetchData']),
    },
    created() {
        console.log('Krishnaa',this.$route.params.citySlug);
        this.fetchData();
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