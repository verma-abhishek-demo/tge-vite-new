<template>
    <div class="wrapper">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <div class="red-line">
                        <span class="title">Trending, Best Selling</span><br>
                        <span class="title red-text">Tours</span>
                        <span class="title"> And Fun</span>&nbsp;
                        <span class="title red-text">Destinations</span>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="dummyTxtOne">Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Aenean Commodo
                        Ligula Eget Dolor.
                        Aenean Massa Cum Sociis Theme Natoque.
                    </p>
                </div>
            </div>
        </div>
        <div class="container tours">
            <div class="slides" ref="slides">
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-honeymoon.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-family.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-adventure.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-heritage.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-solo.png" />
                        </router-link>
                    </div>

                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-group.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-hiking.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-luxury.png" />
                        </router-link>
                    </div>
                    <!-- Duplicate the images for seamless looping -->
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-honeymoon.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-family.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-adventure.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-heritage.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-solo.png" />
                        </router-link>
                    </div>

                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-group.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-hiking.png" />
                        </router-link>
                    </div>
                    <div class="right-side-img">
                        <router-link to="/tours_and_destination">
                            <img src="@/assets/images/new-luxury.png" />
                        </router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.animateSlides(1);
    },
    methods : {
         animateSlides(position) {
            const slides = this.$refs.slides;
            const slideWidth = slides.offsetWidth / 2;
            position -= 1;
            if (Math.abs(position) >= slideWidth) {
                position = 0;
            }
            slides.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(this.animateSlides);
        }
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

.tours {
    margin-top: 88px;
    width: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    gap: 10px;

}

.tour-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
    margin-bottom: 20px;
    width: 340px;
}

.tour-card img {
    width: 100%;
    height: auto;
}

.tour-card .card-body {
    padding: 10px;
    display: flex;
    gap: 3px;
    justify-content: center;
}

.tour-card .trip-count {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #ffffff;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    color: #333;
}

.tour-card .tour-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
}

.rowPosition {
    display: flex;
    position: relative;
    width: 126%;
    animation: slide 10s linear infinite;
}

.rowUp {
    margin-top: 30px;
}

a {
    text-decoration: none;
    color: #000;
}

@keyframes slide {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.slides {
    display: flex;
    width: 200%; /* Adjust width to fit all images */
    animation: slide 10s linear infinite;
}

.right-side-img {
    width: 35%; /* Adjust width to fit the container properly */
    flex-shrink: 0; /* Prevent shrinking */
    margin: 10px;
}

.right-side-img img {
    width: 100%;
}
</style>
