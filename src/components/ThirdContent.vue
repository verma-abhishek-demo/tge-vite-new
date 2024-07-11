<template>
    <div class="mainDiv">
        <div class="container my-4">
            <div class="promo-banner d-flex align-items-center">
                <div class="promo-banner-content">
                    <h2>Enjoy Best Deals</h2>
                    <h1>Up to 40% Discount!</h1>
                    <p>Version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                        quis bibendum auctor.</p>
                    <a href="#" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Discover More</a>
                </div>
                <img src="@/assets/images/bg-section3.png" alt="Rafting Image">
                <Enquiry v-if="showEnquiry" />
            </div>
        </div>
    </div>
</template>

<script>
import Enquiry from './Enquiry.vue';
export default {
    components: {
        Enquiry
    },
    data() {
        return {
            showEnquiry: false
        }
    },
    methods: {
        toggleEnquiry() {
            this.showEnquiry = !this.showEnquiry;
        }
    }
}
</script>

<style scoped>
.mainDiv {
    width: 1200px;
    margin: auto;
}

.promo-banner {
    background-color: #020241;
    color: white;
    padding: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.promo-banner img {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 50%;
    border-radius: 10px;
}

.promo-banner-content {
    max-width: 50%;
}
</style>