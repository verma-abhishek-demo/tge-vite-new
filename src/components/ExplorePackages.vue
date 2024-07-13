<template>
    <div class="wrapper">
        <TotalPackages />
        <div class="pagination">
            <button class="btnPage" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">&lBarr;</button>
            <button class="btnPage" @click="changePage(1)">1</button>
            <button class="btnPage" @click="changePage(2)">2</button>
            <button class="btnPage" @click="changePage(currentPage + 1)">&rBarr;</button>
        </div>
    </div>
</template>

<script>
import TotalPackages from "./TotalPackages.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        TotalPackages
    },
    computed: {
        ...mapGetters(['getCurrentPage']),
        currentPage() {
            return this.getCurrentPage;
        }
    },
    methods: {
        ...mapActions(['fetchData']),
        changePage(page) {
            if (page < 1) return;
            this.fetchData(page);
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: 0 auto;
}
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.btnPage {
    margin: 0 5px;
    padding: 10px 20px;
    cursor: pointer;
}
</style>
