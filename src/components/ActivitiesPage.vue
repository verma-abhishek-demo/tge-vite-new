<template>
    <MainContent />
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="red-line">
                        <span class="title">Explore Our </span><br>
                        <span class="title">Best</span>&nbsp;
                        <span class="title red-text">Activities Packages</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="dummyTxtOne">Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo
                        Ligula Eget Dolor.
                        Aenean Massa Cum Sociis Theme Natoque.
                    </p>
                </div>
            </div>
            <div class="spcaebtw row g-4">
                <div class="col-lg-4">
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-white">
                            <img src="@/assets/images/rockClimbing.png" class="card-img" alt="Rock Climbing">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">Rock Climbing</h5>
                                    <p class="card-text">Let Us Look At Some Of The Popular Adventure Sports In Himachal
                                        Pradesh That Take The State By Storm</p>
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="col-lg-4">
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-middle">
                            <img src="@/assets/images/red-tracking.png" class="middle-img" alt="Hiking">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">Hiking</h5>
                                    <p class="card-text">Let Us Look At Some Of The Popular Adventure Sports In Himachal
                                        Pradesh That Take The State By Storm</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-middle card-margin">
                            <img src="@/assets/images/rafting.png" class="middle-img" alt="River Rafting">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">River Rafting</h5>
                                    <p class="card-text">Let Us Look At Some Of The Popular Adventure Sports In Himachal
                                        Pradesh That Take The State By Storm</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-middle">
                            <img src="@/assets/images/rafting.png" class="middle-img" alt="Vehicle Safari">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">Vehicle Safari</h5>
                                    <p class="card-text">Let Us Look At Some Of The Popular Adventure Sports In Himachal
                                        Pradesh That Take The State By Storm</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="col-lg-4">
                    <router-link to="/inner_activity_page">
                        <div class="card bg-dark text-white">
                            <img src="@/assets/images/para-sunset.png" class="card-img" alt="Rock Climbing">
                            <div class="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5 class="card-title">Rock Climbing</h5>
                                    <p class="card-text">Let Us Look At Some Of The Popular Adventure Sports In Himachal
                                        Pradesh That Take The State By Storm</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <SixthComponent />
    <SeventhComponent />
</template>

<script>
import MainContent from './MainContent.vue';
import SixthComponent from './SixthComponent.vue';
import SeventhComponent from './SeventhComponent.vue';
export default {
    components: {
        MainContent,
        SixthComponent,
        SeventhComponent
    }
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

.spcaebtw {
    margin-top: 30px;
    margin-bottom: 30px;
}

.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
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

.card-img-overlay {
    background: rgba(0, 0, 0, 0.4);
    color: white;
}

img.card-img {
    height: 555px;
}

.card.bg-dark.text-middle {
    height: 173px;
}

img.middle-img {
    width: 100%;
    height: 100%;
}

.card-margin {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>