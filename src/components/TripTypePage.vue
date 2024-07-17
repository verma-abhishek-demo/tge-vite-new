<template>
    <div class="wrapper">
        <TotalPackages />
    </div>
</template>

<script>
import TotalPackages from './TotalPackages.vue';
export default {
    components: {
        TotalPackages
    },
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: 0 auto;
}
</style>