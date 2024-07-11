<template>
    <div class="section-seven">
        <div class="wrapper">
            <div class="container container-custom">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="main-title">World Best <span class="sub-title">Travel Agency</span> Company Since
                            2015.
                        </h1>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="main-image">
                            <img src="@/assets/images/yellow-person.png" class="img-fluid" alt="Main Image">
                            <img src="@/assets/images/red-person.png" class="inset-image img-fluid" alt="Inset Image">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="description">You're looking for a family holiday, a romantic escape, an adventure
                            somewhere extraordinary, or a special event, we can arrange it. Whether you're looking for a
                            family holiday, a romantic escape, or an adventure somewhere extraordinary, we can make it
                            happen.</p>
                        <div class="SvnthPart">
                            <div class="part1">
                                <div class="svnthFlex">
                                    <img src="@/assets/images/worldwide.png" />
                                    <p class="svnthText">Worldwide Tour Coverage</p>
                                </div>
                                <div class="svnthFlex">
                                    <img src="@/assets/images/pricing.png" />
                                    <p class="svnthText">Competitive Pricing</p>
                                </div>
                            </div>
                            <div class="part1">
                                <div class="svnthFlex">
                                    <img src="@/assets/images/local-guide.png" />
                                    <p class="svnthText">Local Guided <br>Tours</p>
                                </div>
                                <div class="svnthFlex">
                                    <img src="@/assets/images/support.png" />
                                    <p class="svnthText">Best Support 24/7</p>
                                </div>
                            </div>
                            <div class="part1">
                                <div class="svnthFlex">
                                    <img src="@/assets/images/fast-booking.png" />
                                    <p class="svnthText">Fast Booking</p>
                                </div>
                                <div class="svnthFlex">
                                    <img src="@/assets/images/tour-flex.png" />
                                    <p class="svnthText">Ultimate Tour<br> Flexibility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    created() {
        
        console.log(this.$route);
    }
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;

}

.section-seven[data-v-d0c226b0] {
    background-color: #1a1a2e;
    background-image: url(/src/assets/images/seventh-bg.png);
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 18%;
}

.main-title {
    color: white;
    font-size: 2rem;
    font-weight: bold;
}

.sub-title {
    color: red;
}

.description {
    color: white;
    margin-top: 20px;
}

.feature-btn {
    background-color: #6c757d;
    border: none;
    color: white;
    margin: 10px 0;
}

.feature-btn:hover {
    background-color: #5a6268;
}

.main-image {
    position: relative;
}

.inset-image {
    position: absolute;
    bottom: -20px;
    right: -20px;
    ;
}

.container-custom {

    padding: 50px;
}

.img-fluid {
    max-width: 60%;
    height: auto;
}

.inset-image[data-v-d0c226b0] {
    position: absolute;
    bottom: 19px;
    right: 24px;
    max-width: 50%;
}

.part1 {
    display: flex;
    margin-bottom: 15px;
}

.svnthFlex {
    display: flex;
    padding: 15px;
    background-color: rgb(232 232 232 / 27%);
    margin-right: 10px;
    border-radius: 20px;
    width: 100%;
}

p.svnthText {
    color: #fff;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
}
</style>