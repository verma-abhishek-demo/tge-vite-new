<template>
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="red-line">
                        <span class="title">Explore Our </span><br>
                        <span class="title">Best</span>&nbsp;
                        <span class="title red-text">Holiday Packages</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="dummyTxtOne">Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo
                        Ligula Eget Dolor.
                        Aenean Massa Cum Sociis Theme Natoque.
                    </p>
                </div>
            </div>
            <div class="row">
                <TotalPackages />
            </div>
            <div class="viewAll">
                <router-link to="/explore_packages">
                    <button class="allPackage">View All</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import TotalPackages from './TotalPackages.vue';
export default {
    components: {
        TotalPackages
    }
}
</script>


<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
}

.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
}

.viewAll {
    text-align: center;
    display: block;
    margin-top: 30px;
}

button.allPackage {
    background: #dc3545;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
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
</style>