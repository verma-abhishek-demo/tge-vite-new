<template>
    <div class="wrapper">
        <TotalPackages />
        <div class="pagination">
            <button class="btnP" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
            <button :class="{ active: currentPage !== 1 }" class="btnPage" @click="changePage(1)">1</button>
            <button :class="{ active: currentPage !== 2 }" class="btnPage" @click="changePage(2)">2</button>
            <button class="btnP" @click="changePage(currentPage + 1)">Next</button>
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
    margin-top: 50px;
}
.btnPage {
    margin: 0 5px;
    padding: 5px 12px;
    cursor: pointer;
    background: red;
    border: none;
    border-radius: 30px;
    color: #fff;
}

.active {
    background: none;
    color: #000;
}

button.btnP {
    background: none;
    border: none;
}
</style>
