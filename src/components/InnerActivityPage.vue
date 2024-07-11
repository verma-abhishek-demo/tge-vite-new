<template>
    <div class="sectionOne">
        <img class="section-one-bg" src="@/assets/images/inner-activity-one.png" />
    </div>
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
            <div class="activity-images">
                <div class="left-side">
                    <img class="left-img" src="@/assets/images/ip-pic-1.png" />
                </div>
                <div class="right-side">
                    <div class="flex-right">
                        <img class="right-img" src="@/assets/images/ip-pic-2.png" />
                        <img class="right-img" src="@/assets/images/ip-pic-3.png" />
                    </div>
                    <div class="flex-right">
                        <img class="right-img" src="@/assets/images/ip-pic-4.png" />
                        <img class="right-img" src="@/assets/images/ip-pic-5.png" />
                    </div>

                </div>
            </div>
            <div class="activity-description">
                <div class="left-desc">
                    <div class="activity-info">
                        <div class="info-hdng">
                            <img src="@/assets/images/clock.png" />
                            <p class="info-text">
                                Duration<br>
                                <span class="small-text">
                                    45 min
                                </span>
                            </p>
                        </div>
                        <div class="info-hdng">
                            <img src="@/assets/images/red-cross.png" />
                            <p class="info-text">
                                Cancellation<br>
                                <span class="small-text">
                                    No Cancel
                                </span>
                            </p>
                        </div>
                        <div class="info-hdng">
                            <img src="@/assets/images/group-size.png" />
                            <p class="info-text">
                                Group Size<br>
                                <span class="small-text">
                                    Unlimited
                                </span>
                            </p>
                        </div>
                        <div class="info-hdng">
                            <img src="@/assets/images/tickets.png" />
                            <p class="info-text">
                                Ticket Price<br>
                                <span class="small-text">
                                    ₹ 250/-
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="activity-about">
                        <h1 class="about-hdng">ABOUT THIS ACTIVITY</h1>
                        <p class="about-text">
                            A famous sport permormed at Dobhi vilage Kullu. It is a memorable experience to see the bird
                            view of the entire kullu valley for just a few bucks which offer a jeep ride uphill to
                            take-off point and fly back to the same place.
                        </p>
                    </div>
                    <div class="activity-highlight">
                        <h1 class="about-hdng hdngGap">HIGHLIGHTS</h1>
                        <div class="highlight-desc">
                            <img class="highlight-img" src="@/assets/images/checkbox-tick.png" />
                            <p class="highlight-text">A breathtaking experience to fly high in air.</p>
                        </div>
                        <div class="highlight-desc">
                            <img class="highlight-img" src="@/assets/images/checkbox-tick.png" />
                            <p class="highlight-text">Adrenaline Rush</p>
                        </div>
                        <div class="highlight-desc">
                            <img class="highlight-img" src="@/assets/images/checkbox-tick.png" />
                            <p class="highlight-text">Valley View</p>
                        </div>
                    </div>
                    <div class="activity-highlight">
                        <h1 class="about-hdng hdngGap">Included/Excluded</h1>
                        <div class="highlight-desc">
                            <img class="highlight-img" src="@/assets/images/checkbox-tick.png" />
                            <p class="highlight-text">A lifetime memorable bird view of valley of Kullu.</p>
                        </div>
                        <div class="highlight-desc">
                            <img class="highlight-img" src="@/assets/images/checkbox-tick.png" />
                            <p class="highlight-text">Jeep ride uphill to Take-off point.</p>
                        </div>
                    </div>
                    <div class="activity-highlight">
                        <h1 class="about-hdng hdngGap">Itinerary</h1>
                        <div class="card">
                            <Accordion value="0">
                                <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                                    <AccordionHeader>{{ tab.title }}</AccordionHeader>
                                    <AccordionContent>
                                        <p class="m-0">{{ tab.content }}</p>
                                    </AccordionContent>
                                </AccordionPanel>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div class="right-desc">
                    <div class="booking-widget p-3">
                        <div class="price">
                            From: ₹1,800.00
                        </div>
                        <div class="reviews mt-1">
                            ⭐ 3 <span class="reviewTotal">(342 Reviews)</span>
                        </div>
                        <div class="form-group mt-3">
                            <label for="date">DATE</label>
                            <input type="date" v-model="date" class="form-control" id="date">
                        </div>
                        <div class="form-group mt-3 adultCountersec">
                            <label for="adults">ADULTS</label>
                            <div class="input-group InputGroup">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button"
                                        @click="updateAdults(-1)">-</button>
                                </div>
                                <p class="adlut-count">{{ counter }}</p>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button"
                                        @click="updateAdults(1)">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="total mt-3">
                            Total: ₹0.00
                        </div>
                        <button class="btn btn-book mt-3">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sectioTwo">
        <div class="wrapper">
            <div class="red-line">
                        <span class="title">Explore Our </span><br>
                        <span class="title">Best</span>&nbsp;
                        <span class="title red-text">Holiday Packages</span>
                    </div>
            <div class="container positonDiv">
                <div class="row">
                    <div class="col-md-4 mb-4 three-content">
                        <div class="card exploreImg">
                            <img src="@/assets/images/rafting.png" class="card-img-top" alt="River Rafting">
                            <div class="card-body bestBody">
                                <h5 class="card-title text-danger">River Rafting</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 three-content">
                        <div class="card exploreImg">
                            <img src="@/assets/images/rockClimbing.png" class="card-img-top" alt="Rock Climbing">
                            <div class="card-body bestBody">
                                <h5 class="card-title text-danger">Rock Climbing</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 three-content">
                        <div class="card exploreImg">
                            <img src="@/assets/images/red-tracking.png" class="card-img-top" alt="Hiking">
                            <div class="card-body bestBody">
                                <h5 class="card-title text-danger">Hiking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <button class="btn explore-btn">Explore More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
export default {
    components: {
        Accordion,
        AccordionPanel,
        AccordionHeader,
        AccordionContent
    },
    data() {
        return {
            counter: 1,
            date: '',
            tabs: [
                { title: 'UPHILL DRIVE', content: 'A Drive From National Highway To Take-Off Point Uphill.', value: '0' },
                { title: 'Fly & Landing', content: 'A famous sport permormed at Dobhi vilage Kullu. It is a memorable experience to see the bird view of the entire kullu valley', value: '1' },
            ]
        }
    },
    methods: {
        updateAdults(change) {
            this.counter += change;
            if (this.counter < 1) {
                this.counter = 1;
            }
            if (this.counter > 4) {
                this.counter = 4;
            }
        }
    }
}
</script>

<style scoped>
.positonDiv {
    position: relative;
}
.sectionOne {
    width: 100%;
}

img.section-one-bg {
    width: 100%;
}

.wrapper {
    width: 1200px;
    margin: auto;
}

.svnthFlex img {
    width: 50px;
    height: 50px;
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

.activity-images {
    display: flex;
    margin-top: 35px;
    margin-bottom: 30px;
}

.left-desc {
    width: 60%;
}

.right-desc {
    width: 40%;
}

.left-side {
    width: 50%;
}

img.left-img {
    width: 100%;
}

.right-side {
    width: 50%;
}

.flex-right {
    display: flex;
    justify-content: center;
}

img.right-img {
    width: 273px;
    margin: 10px;
}

.activity-description {
    display: flex;

    margin-top: 20px;
    margin-bottom: 20px;
}

.activity-about {
    margin-top: 25px;
    margin-bottom: 25px;
}

.activity-info {
    display: flex;
    border-bottom: 1px solid #8080804d;
}

.info-hdng {
    display: flex;
    width: 200px;
}

.info-hdng img {
    width: 40px;
    height: 40px;
}

p.info-text {
    font-size: 15px;
    font-weight: 600;
    margin-left: 15px;
    line-height: 19px;
}

span.small-text {
    font-size: 11px;
    color: grey;
}

.booking-widget {
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 20px;
    max-width: 300px;
    margin: auto;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
}

.reviews {
    color: #000;
    font-weight: 600;
}

span.reviewTotal {
    font-size: 12px;
    color: grey;
}

.total {
    font-size: 1.5rem;
    font-weight: bold;
}

.btn-book {
    background-color: #ff4d4d;
    color: white;
    width: 100%;
    margin-top: 20px;
}

p.adlut-count {
    width: 40px;
    text-align: center;
}

.InputGroup {
    margin-left: 105px;
}

.highlight-desc {
    display: flex;
    gap: 10px;
}

img.highlight-img {
    width: 30px;
    height: 30px;
}

p.highlight-text {
    font-size: 18px;
}

.hdngGap {
    margin-bottom: 31px;
    text-transform: uppercase;
}

.sectioTwo {
    background-color: #0b0d36;
    color: #ffffff;
    padding-top: 40px;
}

.card-img-top {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.explore-btn {
    background-color: #e71d24;
    color: white;
    border: none;
    position: absolute;
    bottom: 98px;
    padding: 25px 55px;
    left: 495px;
}

.explore-btn:hover {
    background-color: #d31820;
}

.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
    margin-bottom: 40px;
}

.title {
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
}

.red-text {
    color: red;
}

.exploreImg {
    width: 100%;
    height: 57%;
    border-radius: 10px 10px 0 0;
    border: none;
}

.bestBody {
    background: #fff;
    border-radius: 0 0 10px 8px;
    padding: 27px;
}
</style>