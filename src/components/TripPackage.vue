<template>
    <router-link :to="{ name: 'TripPackageInfo', params: { id: packageId } }">
        <div class="aaa">
            <div class="container mt-5">
                <div class="card travel-card">
                    <img :src="image" class="card-img-top" alt="Ladakh">
                    <div class="badge badge-danger position-absolute best-sale">Best Sale!</div>
                    <div class="position-absolute badge badgeNmbr badge-secondary">
                        {{ night }}<span><img class="night-icon" src="@/assets/images/night.png" /></span> / {{ days }}<span><img class="night-icon" src="@/assets/images/day.png" /></span>
                    </div>
                    <div class="card-body">
                        <div class="hdng-border">
                            <h5 class="card-title">{{ title }}</h5>
                        </div>
                        <p class="card-text">
                            <img class="trip-icon" src="@/assets/images/hotel-stay.png" /> Hotel Stay
                            <img class="trip-icon" src="@/assets/images/meals.png" /> Meals
                            <img class="trip-icon" src="@/assets/images/tour-guide.png" /> Tour Guide
                            <img class="trip-icon" src="@/assets/images/sightseeing.png" /> Sightseeing
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <h4 class="price">₹ {{ price }} <span class="text-muted"><s>&nbsp;₹ {{ discountPrice }}/-</s></span></h4>
                            <p><img src="@/assets/images/star.png" />
                                <span class="rating">{{ rating }}</span>
                                <span class="totalRating"></span>
                            </p>
                        </div>
                        <div class="exploreBtn">
                            <button class="redExplore btn btn-danger">Explore Now</button>
                            <div class="contactIcons btn-outline">
                                <a href="#" class="btnLink"><img class="callimg" src="@/assets/images/phone.png" /></a>
                                <a href="#" class="btnLink"><img class="callimg"
                                        src="@/assets/images/whatsapp.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>

</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        price: String,
        rating: Number,
        days: Number,
        night: Number,
        packageId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            originalPrice: ''
        }
    },
    computed: {
        discountPrice() {
            return this.originalPrice = Math.round(Number(this.price * 0.10) + Number(this.price));
        }
    }
}
</script>

<style scoped>
.aaa {
    width: 392px;
}
a {
    text-decoration: none;
}

img.night-icon {
    width: 10px;
    margin-top: -3px;
    margin-left: 3px;
}

.travel-card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    padding-bottom: 20px;
}

.badgeNmbr {
    left: 15px;
    top: 14px;
    background: #000;
}

.best-sale {
    top: 15px;
    right: 15px;
    background-image: linear-gradient(92deg, #010080, #BC000B);
}

.card-title {
    font-weight: bold;
    font-size: 18px;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
}

.card-text i {
    margin-right: 8px;
}

.btn-outline-danger {
    border-color: #dc3545;
    color: #dc3545;
}

.btn-outline-danger:hover {
    background-color: #dc3545;
    color: #fff;
}

.exploreBtn {
    display: flex;
    justify-content: space-between;
}

.contactIcons.btn-outline {
    justify-content: space-between;
    display: flex;
    width: 66px;
    border: 1.6px solid red;
    border-radius: 5px;
}

.btnLink {
    border-right: 1px solid red;
}

img.callimg {
    width: 30px;
}

.redExplore {
    padding-left: 50px;
    padding-right: 50px;
}

span.rating {
    font-weight: bold;
}

span.totalRating {
    font-size: 12px;
    color: grey;
}

p.card-text {
    font-size: 14px;
    font-weight: 500;
}

img.trip-icon {
    width: 20px;
}

img.card-img-top {
    max-height: 245px;
}
</style>